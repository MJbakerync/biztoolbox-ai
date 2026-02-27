export interface FormField {
  name: string;
  label: string;
  type: "text" | "textarea" | "select" | "number";
  placeholder?: string;
  required: boolean;
  options?: string[];
  maxLength?: number;
}

export interface ToolConfig {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  icon: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  fields: FormField[];
  systemPrompt: string;
}

export const tools: ToolConfig[] = [
  {
    slug: "ai-cold-email-writer",
    name: "AI Cold Email Writer",
    shortDescription: "Generate personalized cold emails that actually get replies.",
    longDescription: "Write compelling cold outreach emails personalized to your prospect. AI analyzes your offer and target to create emails that land in inboxes and get responses.",
    category: "Sales",
    icon: "\u2709\ufe0f",
    seoTitle: "Free AI Cold Email Writer \u2014 Generate Personalized Outreach | BizToolbox AI",
    seoDescription: "Write cold emails that get replies. AI generates personalized outreach emails for sales, partnerships, and business development. Free tool.",
    seoKeywords: ["cold email generator", "AI email writer", "sales email template", "outreach email generator"],
    fields: [
      { name: "yourOffer", label: "What You\u2019re Offering", type: "textarea", placeholder: "Describe your product/service and key benefits", required: true },
      { name: "targetPerson", label: "Who You\u2019re Emailing", type: "textarea", placeholder: "Their role, company, industry", required: true },
      { name: "tone", label: "Tone", type: "select", options: ["Professional", "Casual", "Friendly", "Direct"], required: true },
      { name: "cta", label: "Desired Call-to-Action", type: "text", placeholder: "e.g., Book a 15-min call", required: true },
      { name: "personalDetail", label: "Personal Detail (optional)", type: "text", placeholder: "Something specific about them", required: false },
    ],
    systemPrompt: "You are an elite cold email copywriter who has written campaigns with 40%+ open rates. Write a cold email that: 1) Has a subject line under 6 words that creates curiosity without being clickbait, 2) Opens with something about THEM, not you, 3) Establishes credibility in one sentence, 4) Clearly states the value proposition, 5) Includes a low-friction CTA, 6) Is under 150 words, 7) Sounds human, not AI-generated. Provide 3 email variations: a) The Curiosity Opener, b) The Value-First Approach, c) The Mutual Connection Style.",
  },
  {
    slug: "ai-return-refund-policy-generator",
    name: "AI Return & Refund Policy Generator",
    shortDescription: "Create professional return policies in seconds.",
    longDescription: "Generate legally-informed return and refund policies tailored to your business type. Covers all standard scenarios and protects your business.",
    category: "Legal",
    icon: "\ud83d\udcdc",
    seoTitle: "Free AI Return & Refund Policy Generator | BizToolbox AI",
    seoDescription: "Create a professional return and refund policy for your business in seconds. AI generates customized policies for e-commerce, SaaS, and services. Free tool.",
    seoKeywords: ["return policy generator", "refund policy template", "AI policy writer"],
    fields: [
      { name: "businessName", label: "Business Name", type: "text", placeholder: "Your company name", required: true },
      { name: "businessType", label: "Business Type", type: "select", options: ["E-commerce", "SaaS", "Service", "Digital Products", "Subscription"], required: true },
      { name: "returnWindow", label: "Return Window (days)", type: "number", placeholder: "30", required: true },
      { name: "refundMethod", label: "Refund Method", type: "select", options: ["Full refund", "Store credit", "Exchange only", "Partial refund"], required: true },
    ],
    systemPrompt: "You are a business policy expert. Generate a professional return and refund policy that: 1) Is clear and customer-friendly, 2) Covers standard scenarios, 3) Protects the business legally, 4) Includes eligibility conditions, 5) Describes the refund process step by step, 6) Addresses exceptions. Note: This is AI-generated and should be reviewed by a legal professional.",
  },
  {
    slug: "ai-business-plan-generator",
    name: "AI Business Plan Generator",
    shortDescription: "Create a comprehensive business plan outline instantly.",
    longDescription: "Generate a structured business plan with executive summary, market analysis, and financial projections. Perfect for startups seeking funding.",
    category: "Sales",
    icon: "\ud83d\udcca",
    seoTitle: "Free AI Business Plan Generator \u2014 Create Plans in Minutes | BizToolbox AI",
    seoDescription: "Generate a professional business plan instantly. AI creates structured plans with market analysis, financial projections, and strategy. Free tool.",
    seoKeywords: ["business plan generator", "AI business plan", "startup plan template"],
    fields: [
      { name: "businessName", label: "Business Name", type: "text", placeholder: "Your company name", required: true },
      { name: "industry", label: "Industry", type: "text", placeholder: "e.g., SaaS, E-commerce, Healthcare", required: true },
      { name: "problem", label: "Problem You Solve", type: "textarea", placeholder: "What pain point does your business address?", required: true },
      { name: "solution", label: "Your Solution", type: "textarea", placeholder: "How does your product/service solve this?", required: true },
      { name: "targetMarket", label: "Target Market", type: "text", placeholder: "Who are your ideal customers?", required: true },
      { name: "revenueModel", label: "Revenue Model", type: "select", options: ["Subscription", "One-time purchase", "Freemium", "Marketplace", "Advertising"], required: true },
    ],
    systemPrompt: "You are a startup advisor who has helped 500+ companies create business plans. Generate a comprehensive business plan that includes: 1) Executive Summary, 2) Problem & Solution, 3) Market Analysis, 4) Business Model, 5) Marketing Strategy, 6) Financial Projections (Year 1-3), 7) Team Requirements, 8) Key Milestones. Make it specific, data-informed, and investor-ready.",
  },
  {
    slug: "ai-invoice-generator",
    name: "AI Invoice Generator",
    shortDescription: "Create professional invoices with proper formatting.",
    longDescription: "Generate clean, professional invoices with all required fields. Includes tax calculations, payment terms, and professional formatting.",
    category: "Sales",
    icon: "\ud83e\uddfe",
    seoTitle: "Free AI Invoice Generator \u2014 Professional Invoices in Seconds | BizToolbox AI",
    seoDescription: "Create professional invoices instantly. AI generates formatted invoices with tax calculations, payment terms, and line items. Free tool.",
    seoKeywords: ["invoice generator", "free invoice maker", "AI invoice template"],
    fields: [
      { name: "businessName", label: "Your Business Name", type: "text", required: true },
      { name: "clientName", label: "Client Name", type: "text", required: true },
      { name: "items", label: "Items/Services", type: "textarea", placeholder: "List items with quantities and prices, one per line", required: true },
      { name: "paymentTerms", label: "Payment Terms", type: "select", options: ["Due on receipt", "Net 15", "Net 30", "Net 60"], required: true },
      { name: "taxRate", label: "Tax Rate (%)", type: "number", placeholder: "0", required: false },
    ],
    systemPrompt: "You are a financial document specialist. Generate a clean, professional invoice in markdown format that includes: 1) Invoice number (generate one), 2) Date and due date, 3) From/To details, 4) Itemized list with quantities and prices, 5) Subtotal, tax, and total, 6) Payment terms and instructions. Format it clearly for easy reading.",
  },
  {
    slug: "ai-social-media-bio-generator",
    name: "AI Social Media Bio Generator",
    shortDescription: "Create compelling bios for any social platform.",
    longDescription: "Generate optimized bios for LinkedIn, Twitter, Instagram, and more. AI crafts bios that capture attention and drive engagement.",
    category: "Marketing",
    icon: "\ud83d\udcf1",
    seoTitle: "Free AI Social Media Bio Generator \u2014 All Platforms | BizToolbox AI",
    seoDescription: "Create perfect social media bios for LinkedIn, Twitter, Instagram, and more. AI generates platform-optimized bios that stand out. Free tool.",
    seoKeywords: ["social media bio generator", "LinkedIn bio writer", "Instagram bio generator"],
    fields: [
      { name: "name", label: "Name or Business Name", type: "text", required: true },
      { name: "platform", label: "Platform", type: "select", options: ["LinkedIn", "Twitter/X", "Instagram", "TikTok", "Facebook", "YouTube"], required: true },
      { name: "role", label: "What You Do", type: "text", placeholder: "Your role or business description", required: true },
      { name: "personality", label: "Personality/Tone", type: "select", options: ["Professional", "Creative", "Witty", "Inspirational", "Casual"], required: true },
      { name: "keyPoints", label: "Key Things to Mention", type: "textarea", placeholder: "Achievements, interests, specialties", required: false },
    ],
    systemPrompt: "You are a social media branding expert. Generate 5 bio variations for the specified platform that: 1) Fit within platform character limits, 2) Include relevant keywords, 3) Have a clear value proposition, 4) Match the desired personality, 5) Include a CTA where appropriate. For each bio, note why it works and what makes it effective.",
  },
];

export function getToolBySlug(slug: string): ToolConfig | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string): ToolConfig[] {
  return tools.filter((t) => t.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(tools.map((t) => t.category))];
}