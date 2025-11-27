import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

export const metadata = {
  title: 'Projects - AeroDev',
  description: 'Explore our portfolio of web applications, landing pages, and digital solutions.',
}

// Mock projects data
const projects = [
  {
    slug: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['Next.js', 'Stripe', 'Tailwind', 'PostgreSQL'],
    category: 'Web App',
    link: '#'
  },
  {
    slug: 'project-2',
    title: 'SaaS Analytics Dashboard',
    description: 'Modern analytics dashboard for a SaaS application featuring interactive charts, data visualization, and reporting tools.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['React', 'TypeScript', 'Recharts', 'Supabase'],
    category: 'Dashboard',
    link: '#'
  },
  {
    slug: 'project-3',
    title: 'Corporate Landing Page',
    description: 'High-converting landing page for a fintech company with smooth animations and SEO optimization.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['Next.js', 'Framer Motion', 'Tailwind'],
    category: 'Landing Page',
    link: '#'
  },
  {
    slug: 'project-4',
    title: 'Real Estate Platform',
    description: 'Property listing platform with map integration, advanced search filters, and user authentication.',
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
      <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
        <div className="container-custom text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Our <span className="gradient-text">Work</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects we've built to help businesses solve problems and achieve their goals.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container-custom">
          {/* Filters (Future implementation) */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {['All', 'Web Apps', 'Landing Pages', 'E-Commerce'].map((filter, index) => (
              <button
                key={filter}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700'
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
                className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-xs font-bold rounded-full shadow-sm">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="btn-primary py-2 px-4 text-sm"
                    >
                      View Case Study
                    </Link>
                    <a 
                      href={project.link}
                      className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
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
      <section className="py-20 bg-gray-50 dark:bg-slate-900/50 border-t border-gray-200 dark:border-gray-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            We can help you bring your vision to life. Let's discuss your requirements.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  )
}
