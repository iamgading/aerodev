'use client'

import Link from 'next/link'

// Mock projects data
const projects = [
  {
    slug: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    link: '#'
  },
  {
    slug: 'project-2',
    title: 'SaaS Dashboard',
    description: 'Modern analytics dashboard for a SaaS application.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['React', 'TypeScript', 'Charts'],
    link: '#'
  },
  {
    slug: 'project-3',
    title: 'Corporate Website',
    description: 'Professional corporate website with CMS integration.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['Next.js', 'Sanity', 'Tailwind'],
    link: '#'
  },
  {
    slug: 'project-4',
    title: 'Mobile App Landing',
    description: 'High-converting landing page for mobile application.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    tags: ['React', 'Framer Motion', 'CSS'],
    link: '#'
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="section bg-gray-50 dark:bg-[#0A0A0A] border-y border-gray-200 dark:border-white/5 scroll-mt-20">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
              FEATURED <br />
              <span className="gradient-text">WORK</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
              Selected projects that showcase our capabilities.
            </p>
          </div>
          <Link 
            href="/projects" 
            className="btn-premium-outline px-8 py-3 text-sm"
          >
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.slug}
              className="glass-card group relative overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-white/20 backdrop-blur text-white border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    {project.description}
                  </p>
                  
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-white font-semibold accent-link"
                  >
                    View Case Study
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
