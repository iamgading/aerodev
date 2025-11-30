import Link from 'next/link'
import Image from 'next/image'
import { getPosts } from '@/lib/supabase/server-queries'
import { Post } from '@/lib/supabase/types'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function BlogSection() {
  // Fetch published posts from Supabase
  let posts: Post[] = []
  try {
    const allPosts = await getPosts(true) // Get only published posts
    posts = allPosts.slice(0, 6) // Show max 6 posts
  } catch (error) {
    console.error('Error fetching posts:', error)
    // If published posts fail, try getting all posts
    try {
      const allPosts = await getPosts()
      posts = allPosts.filter(p => p.published).slice(0, 6)
    } catch (err) {
      console.error('Error fetching all posts:', err)
      posts = []
    }
  }

  return (
    <section id="blog" className="section relative bg-gray-50 dark:bg-gray-900 scroll-mt-20 !pt-12 md:!pt-16">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
              THOUGHTS &<br />
              <span className="text-gray-600 dark:text-gray-400">INSIGHTS</span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-400">
              Articles and reflections from my learning journey.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-sm font-bold border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-2xl hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300"
          >
            View All Articles
          </Link>
        </div>

        {/* Blog Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No articles yet. Add some from the admin dashboard!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-xl"
              >
                {/* Cover Image (if exists) */}
                {post.cover_image && (
                  <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={post.cover_image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(post.published_at || post.created_at).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
