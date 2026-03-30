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
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
      <p className="text-xl text-gray-400 mb-12">
        Technical articles, insights, and thoughts on AI, entrepreneurship, and building products
      </p>

      {posts.length > 0 ? (
        <div className="grid gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-8 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <time>{post.date}</time>
                {post.readTime && <span>• {post.readTime} min read</span>}
                {post.tags && (
                  <div className="flex gap-2">
                    {post.tags.map((tag: string) => (
                      <span key={tag} className="px-2 py-1 bg-white/5 rounded text-xs">
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
        <div className="p-12 bg-white/5 rounded-xl border border-white/10 text-center">
          <p className="text-gray-400 text-lg mb-2">No articles yet</p>
          <p className="text-gray-500">
            Stay tuned for technical deep dives, product insights, and more!
          </p>
        </div>
      )}
    </div>
  )
}
