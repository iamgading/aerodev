import Link from 'next/link'
import CTASection from '@/components/home/cta-section'

export const metadata = {
  title: 'Projects - AeroDev',
  description: 'Explore our portfolio of web applications, landing pages, and digital solutions.',
}

// Mock projects data
const projects = [
  {
    slug: 'project-1',
    title: 'E-Commerce Platform',
    description: 'Built a scalable marketplace to master complex state management and secure payment processing with Stripe. Learned how to handle high-concurrency transactions.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['Next.js', 'Stripe', 'Tailwind', 'PostgreSQL'],
    category: 'Web App',
    link: '#'
  },
  {
    slug: 'project-2',
    title: 'SaaS Analytics Dashboard',
    description: 'Developed a real-time analytics dashboard to explore data visualization techniques. Focused on optimizing large dataset rendering and ensuring smooth 60fps animations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['React', 'TypeScript', 'Recharts', 'Supabase'],
    category: 'Dashboard',
    link: '#'
  },
  {
    slug: 'project-3',
    title: 'Corporate Landing Page',
    description: 'Designed a high-conversion landing page to study advanced animation libraries like Framer Motion. Learned about intersection observers and performance optimization.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['Next.js', 'Framer Motion', 'Tailwind'],
    category: 'Landing Page',
    link: '#'
  },
  {
    slug: 'project-4',
    title: 'Real Estate Platform',
    description: 'Created a property listing engine to work with geospatial data and maps. Mastered Google Maps API integration and complex database queries for location-based search.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    tags: ['Next.js', 'Google Maps API', 'Prisma'],
    category: 'Web App',
    link: '#'
  }
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-24 md:py-32 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="container-wide text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            MY <span className="text-gray-500">WORK</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects I've built to help businesses solve problems and achieve their goals.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-wide">
          {/* Filters (Future implementation) */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {['All', 'Web Apps', 'Landing Pages', 'E-Commerce'].map((filter, index) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.slug}
                className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur text-xs font-bold rounded-full shadow-sm text-gray-900 dark:text-white">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300"
                    >
                      View Case Study
                    </Link>
                    <a 
                      href={project.link}
                      className="text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      Live Demo →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
