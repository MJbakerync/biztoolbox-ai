"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { getToolBySlug } from "@/lib/tools-config";
import type { FormField } from "@/lib/tools-config";

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug);
  if (!tool) return notFound();

  const [formData, setFormData] = useState<Record<string, string>>({});
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ toolSlug: tool.slug, formData }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Generation failed");
      }

      const data = await res.json();
      setResult(data.content);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderField = (field: FormField) => {
    const baseClass = "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none";

    if (field.type === "textarea") {
      return (
        <textarea
          className={baseClass + " min-h-[100px]"}
          placeholder={field.placeholder}
          required={field.required}
          value={formData[field.name] || ""}
          onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
        />
      );
    }

    if (field.type === "select" && field.options) {
      return (
        <select
          className={baseClass}
          required={field.required}
          value={formData[field.name] || ""}
          onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
        >
          <option value="">Select...</option>
          {field.options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      );
    }

    return (
      <input
        type={field.type === "number" ? "number" : "text"}
        className={baseClass}
        placeholder={field.placeholder}
        required={field.required}
        value={formData[field.name] || ""}
        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
      />
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <span className="text-4xl mb-4 block">{tool.icon}</span>
        <h1 className="text-3xl font-bold text-gray-900">{tool.name}</h1>
        <p className="text-gray-600 mt-2">{tool.longDescription}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {tool.fields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                  {field.required && <span className="text-red-500"> *</span>}
                </label>
                {renderField(field)}
              </div>
            ))}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </form>
        </div>

        <div>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}
          {result && (
            <div className="bg-gray-50 border rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Result</h3>
                <button
                  onClick={() => navigator.clipboard.writeText(result)}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Copy to Clipboard
                </button>
              </div>
              <div className="whitespace-pre-wrap text-sm">{result}</div>
            </div>
          )}
          {!result && !error && (
            <div className="bg-gray-50 border-2 border-dashed rounded-lg p-8 text-center text-gray-400">
              Fill out the form and click Generate to see your result here.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}