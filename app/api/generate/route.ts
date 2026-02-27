import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { getToolBySlug } from "@/lib/tools-config";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { toolSlug, formData } = await request.json();

    // Validate tool exists
    const tool = getToolBySlug(toolSlug);
    if (!tool) {
      return NextResponse.json({ error: "Tool not found" }, { status: 404 });
    }

    // Build the user message from form data
    const userMessage = Object.entries(formData)
      .map(([key, value]) => {
        const field = tool.fields.find((f) => f.name === key);
        return field ? `${field.label}: ${value}` : `${key}: ${value}`;
      })
      .join("\n");

    // Call OpenAI
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [
        { role: "system", content: tool.systemPrompt },
        { role: "user", content: userMessage },
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    const content = completion.choices[0]?.message?.content || "No content generated.";

    return NextResponse.json({ content });
  } catch (error: any) {
    console.error("Generation error:", error);

    if (error?.status === 429) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please try again in a moment." },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: "Failed to generate content. Please try again." },
      { status: 500 }
    );
  }
}