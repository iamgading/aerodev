import { Metadata } from 'next'
import { BlogList } from '@/components/blog/blog-list'
import { getAllPosts } from '@/lib/mdx'
import { SearchBar } from '@/components/search/search-bar'

export const metadata: Metadata = {
  title: 'Insights & Updates - AeroDev',
  description: 'Latest news, tutorials, and insights about web development, technology, and business.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
        <div className="container-custom text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Insights & <span className="gradient-text">Updates</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Explore our latest articles, tutorials, and news about web development, technology trends, and business strategies.
          </p>
          
          <div className="max-w-md mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar (Categories) - Optional/Future */}
            <div className="hidden lg:block w-64 space-y-8">
              <div>
                <h3 className="font-bold mb-4 text-lg">Categories</h3>
                <ul className="space-y-2">
                  {['All Posts', 'Web Development', 'Tutorials', 'Business', 'Tech News'].map((cat, i) => (
                    <li key={cat}>
                      <button className={`text-sm ${i === 0 ? 'text-primary-600 font-medium' : 'text-gray-600 dark:text-gray-400 hover:text-primary-500'}`}>
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
                    <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-xs rounded-full text-gray-600 dark:text-gray-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 transition-colors cursor-pointer">
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
      
      {/* Newsletter Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Get the latest updates, tutorials, and insights delivered directly to your inbox. No spam, just quality content.
          </p>
          
          <form className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button type="submit" className="px-6 py-3 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-50 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
