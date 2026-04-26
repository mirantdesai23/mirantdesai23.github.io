import type { Metadata } from "next";
import Link from 'next/link'

export const metadata: Metadata = {
  other: {
    "public-record-pacermonitor": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.pacermonitor.com/public/case/58059049/Desai_v_Walmart_Inc",
    "public-record-justia": "https://dockets.justia.com/docket/circuit-courts/ca8/26-1704/",
  },
};

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
}

export default function Home() {
  const recentPosts: BlogPost[] = [
    {
      slug: '60-day-sprint-planai',
      title: 'The 60-Day Sprint at PlanAI: Building the Product Foundation for EdTech B2C and Enterprise AI',
      excerpt: "How PlanAI's focused 60-day sprint established the foundational product architecture for serving both B2C education and enterprise AI applications.",
      date: 'April 26, 2026'
    },
    {
      slug: 'annual-plan-startup-journey',
      title: 'Your First Year with PlanAI: A 12-Month Startup Roadmap',
      excerpt: "A founder's perspective on how PlanAI's annual subscription maps to every critical milestone in your startup's first year—from market validation to go-live integrations.",
      date: 'March 30, 2026'
    },
    {
      slug: 'planai-collaboration-branching',
      title: "PlanAI's Collaboration & Branching Product Feature",
      excerpt: 'How real-time collaboration and intelligent branching transform strategic planning from a siloed exercise into a synchronized team activity.',
      date: 'March 29, 2026'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Mirant Desai
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Founder & CEO at PlanAI | Building AI-powered business intelligence tools
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/blog"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Read Blog
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-colors border border-gray-300"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="mb-16 p-8 bg-gray-50 rounded-xl border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">About Me</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          I&apos;m the founder of PlanAI, an AI-powered enterprise business software platform for strategic planning
          and financial analysis. I&apos;m passionate about building tools that help businesses make better decisions
          through intelligent automation and data-driven insights.
        </p>
        <Link href="/about" className="text-blue-600 hover:text-blue-700 transition-colors">
          Learn more →
        </Link>
      </section>

      {/* Social Links */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Connect With Me</h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.pinterest.com/mirantdesai1/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-colors border border-gray-300"
          >
            Pinterest
          </a>
          <a
            href="https://www.youtube.com/@MirantDesai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-colors border border-gray-300"
          >
            YouTube
          </a>
          <a
            href="https://soundcloud.com/mirant-desai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-colors border border-gray-300"
          >
            SoundCloud
          </a>
          <a
            href="https://linkedin.com/in/desaimirant"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-colors border border-gray-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mirantdesai23"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-colors border border-gray-300"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Blog Preview */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Recent Articles</h2>
        {recentPosts.length > 0 ? (
          <div className="grid gap-6">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 transition-all group"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-3">{post.excerpt}</p>
                <div className="text-sm text-gray-500">{post.date}</div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 text-center text-gray-600">
            <p>Articles coming soon...</p>
            <p className="mt-2 text-sm">Check back later for technical deep dives and insights!</p>
          </div>
        )}
      </section>
    </div>
  )
}
