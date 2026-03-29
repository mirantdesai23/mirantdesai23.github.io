import Link from 'next/link'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
}

export default function Home() {
  const recentPosts: BlogPost[] = [
    // We'll populate this with actual posts later
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Mirant Desai
        </h1>
        <p className="text-xl text-gray-300 mb-8">
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
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors border border-white/20"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="mb-16 p-8 bg-white/5 rounded-xl border border-white/10">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          I&apos;m the founder of PlanAI, an AI-powered enterprise business software platform for strategic planning
          and financial analysis. I&apos;m passionate about building tools that help businesses make better decisions
          through intelligent automation and data-driven insights.
        </p>
        <Link href="/about" className="text-blue-400 hover:text-blue-300 transition-colors">
          Learn more →
        </Link>
      </section>

      {/* Blog Preview */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
        {recentPosts.length > 0 ? (
          <div className="grid gap-6">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all group"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-3">{post.excerpt}</p>
                <div className="text-sm text-gray-500">{post.date}</div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-8 bg-white/5 rounded-xl border border-white/10 text-center text-gray-400">
            <p>Articles coming soon...</p>
            <p className="mt-2 text-sm">Check back later for technical deep dives and insights!</p>
          </div>
        )}
      </section>
    </div>
  )
}
