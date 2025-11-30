import Hero from '@/components/hero'
import AboutSection from '@/components/home/about-section'
import ProjectsSection from '@/components/home/projects-section'
import BlogSection from '@/components/home/blog-section'
import Link from 'next/link'
import CTASection from '@/components/home/cta-section'

export const revalidate = 60 // Revalidate every 60 seconds

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      {/* Gradient transition */}
      <div className="h-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900" />
      
      <AboutSection />
      
      {/* Gradient transition */}
      <div className="h-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black" />
      
      <ProjectsSection />
      
      {/* Gradient transition */}
      <div className="h-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900" />
      
      <BlogSection />
      
      {/* Gradient transition */}
      <div className="h-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black" />
      
      <CTASection />
    </div>
  )
}
