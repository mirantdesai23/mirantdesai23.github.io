import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mirant Desai | Founder & CEO at PlanAI",
  description: "Personal website and blog of Mirant Desai - Founder of PlanAI, building AI-powered business intelligence tools",
  keywords: ["Mirant Desai", "PlanAI", "AI", "Business Intelligence", "Entrepreneurship", "Tech Blog"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <Link href="/" className="text-xl font-bold hover:text-blue-400 transition-colors">
                  Mirant Desai
                </Link>
                <div className="flex gap-6">
                  <Link href="/blog" className="hover:text-blue-400 transition-colors">
                    Blog
                  </Link>
                  <Link href="/about" className="hover:text-blue-400 transition-colors">
                    About
                  </Link>
                </div>
              </div>
            </nav>
          </header>

          {/* Main Content */}
          <main className="flex-1 container mx-auto px-6 py-12">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-white/10 mt-auto">
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} Mirant Desai. All rights reserved.</p>
                <div className="flex gap-6">
                  <a
                    href="https://www.planaipro.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    PlanAI
                  </a>
                  <a
                    href="https://linkedin.com/in/desaimirant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/mirantdesai23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
