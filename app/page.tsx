import Hero from '@/components/hero'
import AboutSection from '@/components/home/about-section'
import ServicesSection from '@/components/home/services-section'
import ProjectsSection from '@/components/home/projects-section'
import BlogSection from '@/components/home/blog-section'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <BlogSection />
      
      {/* Final CTA */}
      <section className="py-28 bg-gradient-to-br from-gray-900 via-black to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white text-center border-t border-white/10">
        <div className="container-wide">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6">
            LET'S BUILD <br />
            <span className="gradient-text">THE FUTURE</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Ready to start your next project? We are currently accepting new clients for Q4 2024.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-12 py-5 text-base font-semibold text-black bg-white rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/20"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  )
}
