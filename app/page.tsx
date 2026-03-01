import Link from "next/link";
import { tools } from "@/lib/tools-config";

export default function Home() {
  const categories = [...new Set(tools.map((t) => t.category))];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Free AI Tools for Every Business Need
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            50 AI-powered generators that help you write better emails, create
            policies, build business plans, and more. No signup required.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/tools"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
            >
              Browse All Tools
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            3 free uses per day • No signup required • Unlimited with Pro
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.slice(0, 9).map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="border rounded-xl p-6 hover:shadow-lg transition group"
            >
              <div className="text-3xl mb-3">{tool.icon}</div>
              <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">
                {tool.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {tool.shortDescription}
              </p>
              <span className="inline-block mt-3 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {tool.category}
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/tools"
            className="text-blue-600 font-medium hover:underline"
          >
            View all {tools.length} tools →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your Business?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Start using any tool for free. Upgrade to Pro for unlimited access.
          </p>
          <Link
            href="/tools"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  );
}
