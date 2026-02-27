import Link from "next/link";
import { tools } from "@/lib/tools-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All AI Business Tools - BizToolbox AI",
    description: "Browse all 50 free AI-powered business tools. Generate emails, policies, plans, invoices and more instantly.",
    };

    const categories = [...new Set(tools.map((t) => t.category))];

    export default function ToolsPage() {
      return (
          <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                  All AI Business Tools
                                          </h1>
                                                  <p className="text-xl text-gray-600">
                                                            50 free tools to help you run your business smarter.
                                                                    </p>
                                                                          </div>

                                                                                {categories.map((category) => (
                                                                                        <div key={category} className="mb-12">
                                                                                                  <h2 className="text-2xl font-bold text-gray-900 mb-6 capitalize">
                                                                                                              {category}
                                                                                                                        </h2>
                                                                                                                                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                                                                                                              {tools
                                                                                                                                                            .filter((tool) => tool.category === category)
                                                                                                                                                                          .map((tool) => (
                                                                                                                                                                                          <Link
                                                                                                                                                                                                            key={tool.slug}
                                                                                                                                                                                                                              href={`/tools/${tool.slug}`}
                                                                                                                                                                                                                                                className="border rounded-xl p-6 hover:shadow-lg transition group"
                                                                                                                                                                                                                                                                >
                                                                                                                                                                                                                                                                                  <div className="text-3xl mb-3">{tool.icon}</div>
                                                                                                                                                                                                                                                                                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                                                                                                                                                                                                                                                                                                                        {tool.name}
                                                                                                                                                                                                                                                                                                                                          </h3>
                                                                                                                                                                                                                                                                                                                                                            <p className="text-gray-600 text-sm mt-2">
                                                                                                                                                                                                                                                                                                                                                                                {tool.shortDescription}
                                                                                                                                                                                                                                                                                                                                                                                                  </p>
                                                                                                                                                                                                                                                                                                                                                                                                                  </Link>
                                                                                                                                                                                                                                                                                                                                                                                                                                ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                        ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                                                                                                                                                                                              }