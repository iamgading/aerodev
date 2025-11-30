import Link from 'next/link'
import CTASection from '@/components/home/cta-section'
import { ArrowLeft } from 'lucide-react'
import { getProjects } from '@/lib/supabase/server-queries'
import { Project } from '@/lib/supabase/types'

export const metadata = {
  title: 'Projects - Aerodev',
  description: 'Explore our portfolio of web applications, landing pages, and digital solutions.',
}

export const revalidate = 60 // Revalidate every 60 seconds

export default async function ProjectsPage() {
  let projects: Project[] = []
  
  try {
    projects = await getProjects()
  } catch (error) {
    console.error('Error fetching projects:', error)
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
            MY <span className="text-gray-500">WORK</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects I&apos;ve worked on. From web applications to open source libraries.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-wide">
          {projects.length === 0 ? (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  No Projects Yet
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Projects will appear here once they are added through the admin panel.
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
            <>
              {/* Filters (Future implementation) */}
              <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
                {['All', 'Web Apps', 'Landing Pages', 'Dashboard'].map((filter, index) => (
                  <button
                    key={filter}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                      index === 0
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <Link 
                    key={project.id}
                    href={`/projects/${project.slug}`}
                    className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-xl transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-900">
                      <div 
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url(${project.image_url})` }}
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur text-xs font-bold rounded-full shadow-sm text-gray-900 dark:text-white">
                        {project.category}
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full shadow-sm">
                          Featured
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag: string) => (
                          <span 
                            key={tag} 
                            className="px-3 py-1 text-xs font-medium rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="px-3 py-1 text-xs font-medium text-gray-500">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
