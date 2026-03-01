import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Pricing - BizToolbox AI", description: "Simple pricing for AI business tools. Free, Starter $7/mo, Pro $19/mo." };

const check = "\u2713";

const tiers = [
  { name: "Free", price: "$0", period: "/forever", desc: "Perfect for trying out our tools.", cta: "Start Free", link: "/tools", pop: false, features: ["3 uses per day", "All 50 tools", "No signup required", "Copy results", "Standard AI model"] },
  { name: "Starter", price: "$7", period: "/month", desc: "For regular users who want more.", cta: "Get Starter", link: "/signin", pop: false, features: ["20 uses per day", "All 50 tools", "Save history (20 projects)", "Brand voice profile", "Standard AI model", "Export as text"] },
  { name: "Pro", price: "$19", period: "/month", desc: "Unlimited power for serious businesses.", cta: "Go Pro", link: "/signin", pop: true, features: ["Unlimited uses", "All 50 tools", "Unlimited saved projects", "Brand voice profile", "GPT-4o premium model", "Export PDF and Word", "Priority support", "3 output variations", "File upload and analysis"] },
  ];

export default function PricingPage() {
    return (
          <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>h1>
                        <p className="text-xl text-gray-600">Start free. Upgrade when you need more power.</p>p>
                </div>div>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {tiers.map((tier) => (
                      <div key={tier.name} className={"border-2 rounded-2xl p-8 relative " + (tier.pop ? "border-blue-600 shadow-lg" : "border-gray-200")}>
                        {tier.pop && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</div>div>}
                                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{tier.name}</h2>h2>
                                  <p className="text-gray-500 text-sm mb-4">{tier.desc}</p>p>
                                  <div className="mb-6"><span className="text-4xl font-bold">{tier.price}</span>span><span className="text-gray-500">{tier.period}</span>span></div>div>
                                  <ul className="space-y-3 mb-8">{tier.features.map((f) => (<li key={f} className="flex items-start gap-2 text-gray-600 text-sm"><span className="text-green-500 mt-0.5">{check}</span>span>{f}</li>li>))}</ul>ul>
                                  <Link href={tier.link} className={"block w-full text-center py-3 px-6 rounded-lg font-medium transition " + (tier.pop ? "bg-blue-600 text-white hover:bg-blue-700" : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50")}>{tier.cta}</Link>Link>
                      </div>div>
                    ))}
                </div>div>
                <div className="mt-16 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h3>h3>
                        <div className="space-y-6">
                                  <div><h4 className="font-medium text-gray-900">Do I need to sign up?</h4>h4><p className="text-gray-600 mt-1 text-sm">No! Free users can use any tool without an account. Sign up to save work and access history.</p>p></div>div>
                                  <div><h4 className="font-medium text-gray-900">What counts as a use?</h4>h4><p className="text-gray-600 mt-1 text-sm">Each Generate click counts as one use. Free gets 3/day, Starter 20/day, Pro unlimited.</p>p></div>div>
                                  <div><h4 className="font-medium text-gray-900">What is Brand Voice?</h4>h4><p className="text-gray-600 mt-1 text-sm">Save your company details so every generation is personalized to your brand automatically.</p>p></div>div>
                                  <div><h4 className="font-medium text-gray-900">Can I cancel anytime?</h4>h4><p className="text-gray-600 mt-1 text-sm">Yes. You keep access until the end of your billing period.</p>p></div>div>
                                  <div><h4 className="font-medium text-gray-900">GPT-4o vs Standard?</h4>h4><p className="text-gray-600 mt-1 text-sm">Pro uses GPT-4o for longer, more nuanced outputs. Free and Starter use GPT-4o-mini.</p>p></div>div>
                        </div>div>
                </div>div>
                <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Still not sure?</h3>h3>
                        <p className="text-gray-600 mb-4">Try any tool free. No signup, no credit card.</p>p>
                        <Link href="/tools" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition">Browse All 50 Tools</Link>Link>
                </div>div>
          </div>div>
        );
}</div>
