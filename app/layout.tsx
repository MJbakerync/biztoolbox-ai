import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BizToolbox AI \u2014 Free AI Business Tools",
  description: "50 free AI-powered tools to help you write emails, generate policies, create business plans, and more. No signup required.",
  keywords: ["AI business tools", "free AI tools", "business generator", "AI writing tools"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <a href="/" className="text-xl font-bold text-blue-600">
                BizToolbox AI
              </a>
              <div className="flex items-center gap-6">
                <a href="/tools" className="text-gray-600 hover:text-gray-900">Tools</a>
                <a href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                <a href="/tools" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Get Started Free
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="border-t bg-gray-50 mt-20">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center text-sm text-gray-500">
             © 2025 BizToolbox AI. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
