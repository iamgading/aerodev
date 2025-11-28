'use client'

import Link from 'next/link'

export default function BlogSection() {
  // Mock data
  const posts = [
    {
      slug: 'future-of-web-dev',
      title: 'The Future of Web Development: What to Expect in 2025',
      date: 'Nov 24, 2024',
      category: 'Technology'
    },
    {
      slug: 'building-scalable-apps',
      title: 'Building Scalable Applications with Next.js and Supabase',
      date: 'Nov 20, 2024',
      category: 'Development'
    },
    {
      slug: 'design-systems-guide',
      title: 'A Comprehensive Guide to Modern Design Systems',
      date: 'Nov 15, 2024',
      category: 'Design'
    },
    {
      slug: 'typescript-best-practices',
      title: 'TypeScript Best Practices for Large Scale Applications',
      date: 'Nov 10, 2024',
      category: 'Development'
    },
    {
      slug: 'ui-trends-2025',
      title: 'Top UI/UX Trends That Will Dominate 2025',
      date: 'Nov 5, 2024',
      category: 'Design'
    },
    {
      slug: 'performance-optimization',
      title: 'Web Performance Optimization: A Complete Guide',
      date: 'Nov 1, 2024',
      category: 'Technology'
    }
  ]

  return (
    <section id="blog" className="section !pt-12 md:!pt-20 bg-gray-50 dark:bg-gray-900 scroll-mt-20">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            LATEST <br />
            <span className="text-gray-600 dark:text-gray-400">CONTENT</span>
          </h2>
          <Link href="/blog" className="inline-flex items-center px-6 py-2.5 text-sm font-medium border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass-card p-8 group hover:scale-[1.02] transition-all duration-300 block"
            >
              <div className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-widest">
                {post.category} — {post.date}
              </div>
              <h3 className="text-xl font-bold leading-tight mb-6 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center text-sm font-semibold accent-link">
                Read Article
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
