import Link from 'next/link'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime?: number
  tags?: string[]
}

export default function Blog() {
  const posts: BlogPost[] = [
    {
      slug: '60-day-sprint-planai',
      title: 'The 60-Day Sprint at PlanAI: Building the Product Foundation for EdTech B2C and Enterprise AI',
      excerpt: "How PlanAI's focused 60-day sprint established the foundational product architecture for serving both B2C education and enterprise AI applications.",
      date: 'April 26, 2026',
      readTime: 5,
      tags: ['PlanAI', 'Product', 'Strategy', 'Development']
    },
    {
      slug: 'annual-plan-startup-journey',
      title: 'Your First Year with PlanAI: A 12-Month Startup Roadmap',
      excerpt: "A founder's perspective on how PlanAI's annual subscription maps to every critical milestone in your startup's first year—from market validation to go-live integrations.",
      date: 'March 30, 2026',
      readTime: 5,
      tags: ['PlanAI', 'Startup', 'Product', 'Strategy']
    },
    {
      slug: 'planai-collaboration-branching',
      title: "PlanAI's Collaboration & Branching Product Feature",
      excerpt: "How real-time collaboration and intelligent branching transform strategic planning from a siloed exercise into a synchronized team activity.",
      date: 'March 29, 2026',
      readTime: 2,
      tags: ['PlanAI', 'Product', 'Collaboration', 'Strategic Planning']
    }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Blog</h1>
      <p className="text-xl text-gray-700 mb-12">
        Technical articles, insights, and thoughts on AI, entrepreneurship, and building products
      </p>

      {posts.length > 0 ? (
        <div className="grid gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 transition-all"
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <time>{post.date}</time>
                {post.readTime && <span>• {post.readTime} min read</span>}
                {post.tags && (
                  <div className="flex gap-2">
                    {post.tags.map((tag: string) => (
                      <span key={tag} className="px-2 py-1 bg-gray-200 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="p-12 bg-gray-50 rounded-xl border border-gray-200 text-center">
          <p className="text-gray-600 text-lg mb-2">No articles yet</p>
          <p className="text-gray-500">
            Stay tuned for technical deep dives, product insights, and more!
          </p>
        </div>
      )}
    </div>
  )
}
