import { Metadata } from 'next'
import { BlogList } from '@/components/blog/blog-list'
import { getAllPosts } from '@/lib/mdx'
import { SearchBar } from '@/components/search/search-bar'
import CTASection from '@/components/home/cta-section'

export const metadata: Metadata = {
  title: 'Insights & Updates - AeroDev',
  description: 'Latest news, tutorials, and insights about web development, technology, and business.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-24 md:py-32 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="container-wide text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            INSIGHTS & <span className="text-gray-500">UPDATES</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Explore our latest articles, tutorials, and news about web development, technology trends, and business strategies.
          </p>
          
          <div className="max-w-md mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar (Categories) */}
            <div className="hidden lg:block w-64 space-y-8">
              <div>
                <h3 className="font-bold mb-4 text-lg">Categories</h3>
                <ul className="space-y-2">
                  {['All Posts', 'Web Development', 'Tutorials', 'Business', 'Tech News'].map((cat, i) => (
                    <li key={cat}>
                      <button className={`text-sm font-medium transition-colors ${i === 0 ? 'text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-300'}`}>
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-4 text-lg">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React', 'Tailwind', 'TypeScript', 'Startup'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-medium rounded-full text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 transition-colors cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <BlogList posts={posts} />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
