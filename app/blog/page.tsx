import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getPosts } from '@/lib/supabase/server-queries'
import { Post } from '@/lib/supabase/types'
import CTASection from '@/components/home/cta-section'

export const metadata: Metadata = {
  title: 'Insights & Updates - Aerodev',
  description: 'Latest news, tutorials, and insights about web development, technology, and business.',
}

export const revalidate = 60 // Revalidate every 60 seconds

export default async function BlogPage() {
  let posts: Post[] = []
  
  try {
    const allPosts = await getPosts()
    // Only show published posts
    posts = allPosts.filter(post => post.published)
  } catch (error) {
    console.error('Error fetching posts:', error)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-24 md:py-32 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 relative">
        <div className="container-wide text-center animate-fade-in relative">
          <div className="absolute left-0 top-0 hidden md:block">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
          <div className="md:hidden flex justify-start mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            INSIGHTS & <span className="text-gray-500">UPDATES</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our latest articles, tutorials, and news about web development, technology trends, and business strategies.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-wide">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  No Blog Posts Yet
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Blog posts will appear here once they are published through the admin panel.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-xl transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Cover Image */}
                  {post.cover_image && (
                    <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-900">
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url(${post.cover_image})` }}
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    {/* Category */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-xs font-bold rounded-full text-gray-900 dark:text-white">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(post.created_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white group-hover:gap-3 transition-all">
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
