import Link from 'next/link'
import Image from 'next/image'
import { getProjects } from '@/lib/supabase/server-queries'
import { Project } from '@/lib/supabase/types'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function ProjectsSection() {
  // Fetch featured projects from Supabase
  let projects: Project[] = []
  try {
    const allProjects = await getProjects(true) // Get only featured projects
    projects = allProjects.slice(0, 4) // Show max 4 projects
  } catch (error) {
    console.error('Error fetching projects:', error)
    // If featured projects fail, try getting all projects
    try {
      const allProjects = await getProjects()
      projects = allProjects.slice(0, 4)
    } catch (err) {
      console.error('Error fetching all projects:', err)
      projects = []
    }
  }

  return (
    <section id="projects" className="section relative bg-white dark:bg-black scroll-mt-20 !pt-12 md:!pt-16">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
              THINGS I&apos;VE <br />
              <span className="text-gray-600 dark:text-gray-400">BUILT</span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-400">
              Projects and experiments from my creative journey.
            </p>
          </div>
          <Link 
            href="/projects" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-sm font-bold border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-2xl hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No projects yet. Add some from the admin dashboard!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-xl"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={project.image_url}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading={index < 2 ? 'eager' : 'lazy'}
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {project.featured && (
                      <span className="px-2 py-0.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-bold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag: string) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 text-xs font-medium text-gray-500">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
