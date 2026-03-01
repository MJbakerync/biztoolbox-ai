import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "BizToolbox AI — Free AI Business Tools",
    description: "50 free AI-powered tools to help you write emails, generate policies, create business plans, and more. Used by 2,000+ businesses.",
    keywords: ["AI business tools", "free AI tools", "business generator", "AI writing tools", "AI email writer", "AI business plan generator"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
          <html lang="en">
                <body className={inter.className}>
                        <nav className="border-b bg-white sticky top-0 z-50">
                                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                              <div className="flex justify-between h-16 items-center">
                                                            <a href="/" className="text-xl font-bold text-blue-600">BizToolbox AI</a>a>
                                                            <div className="flex items-center gap-6">
                                                                            <a href="/tools" className="text-gray-600 hover:text-gray-900 text-sm">Tools</a>a>
                                                                            <a href="/pricing" className="text-gray-600 hover:text-gray-900 text-sm">Pricing</a>a>
                                                                            <a href="/dashboard" className="text-gray-600 hover:text-gray-900 text-sm">Dashboard</a>a>
                                                                            <a href="/signin" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">Sign In</a>a>
                                                            </div>div>
                                              </div>div>
                                  </div>div>
                        </nav>nav>
                        <main>{children}</main>main>
                        <footer className="border-t bg-gray-50 mt-20">
                                  <div className="max-w-7xl mx-auto px-4 py-12">
                                              <div className="grid md:grid-cols-4 gap-8 mb-8">
                                                            <div>
                                                                            <h3 className="font-bold text-gray-900 mb-3">BizToolbox AI</h3>h3>
                                                                            <p className="text-sm text-gray-600">50 AI-powered tools to help you run your business smarter. Trusted by 2,000+ small businesses.</p>p>
                                                            </div>div>
                                                            <div>
                                                                            <h4 className="font-semibold text-gray-900 mb-3 text-sm">Product</h4>h4>
                                                                            <div className="space-y-2"><a href="/tools" className="block text-sm text-gray-600 hover:text-gray-900">All Tools</a>a><a href="/pricing" className="block text-sm text-gray-600 hover:text-gray-900">Pricing</a>a><a href="/dashboard" className="block text-sm text-gray-600 hover:text-gray-900">Dashboard</a>a></div>div>
                                                            </div>div>
                                                            <div>
                                                                            <h4 className="font-semibold text-gray-900 mb-3 text-sm">Popular Tools</h4>h4>
                                                                            <div className="space-y-2"><a href="/tools/ai-cold-email-writer" className="block text-sm text-gray-600 hover:text-gray-900">Cold Email Writer</a>a><a href="/tools/ai-business-plan-generator" className="block text-sm text-gray-600 hover:text-gray-900">Business Plan Generator</a>a><a href="/tools/ai-invoice-generator" className="block text-sm text-gray-600 hover:text-gray-900">Invoice Generator</a>a></div>div>
                                                            </div>div>
                                                            <div>
                                                                            <h4 className="font-semibold text-gray-900 mb-3 text-sm">Stay Updated</h4>h4>
                                                                            <p className="text-sm text-gray-600 mb-3">Get free business templates and AI tips weekly.</p>p>
                                                                            <div className="flex gap-2"><input type="email" placeholder="you@email.com" className="flex-1 px-3 py-2 border rounded-lg text-sm" /><button className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700">Join</button>button></div>div>
                                                            </div>div>
                                              </div>div>
                                              <div className="border-t pt-8 text-center text-sm text-gray-500">© 2025 BizToolbox AI. All rights reserved.</div>div>
                                  </div>div>
                        </footer>footer>
                </body>body>
          </html>html>
        );
}</html>
