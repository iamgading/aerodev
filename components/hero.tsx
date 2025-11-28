'use client'

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import AnimatedBackground from './animated-background'
import { StarBackground } from './ui/star-background'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section ref={containerRef} className="relative flex items-center justify-center overflow-hidden bg-white dark:bg-black min-h-[85vh] sm:min-h-[100svh] pt-20">
      {/* Animated Background */}
      <AnimatedBackground />
      <StarBackground />
      
      {/* Grid Background with Spotlight */}
      <div className="absolute inset-0 bg-grid opacity-[0.3] dark:opacity-[0.2]" />
      
      {/* Subtle Spotlight Effect */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 hidden md:block"
        style={{
          background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 113, 108, 0.06), transparent 40%)`,
        }}
      />

      <div className="container-wide relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 text-xs md:text-sm font-medium mb-8 animate-fade-in backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 dark:bg-gray-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-500 dark:bg-gray-400"></span>
            </span>
            <span className="text-gray-700 dark:text-gray-300 tracking-wide">AVAILABLE FOR NEW PROJECTS</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9] md:leading-[0.95] animate-slide-up">
            THOUGHTS,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800 dark:from-gray-400 dark:to-gray-600">
              PROJECTS & IDEAS
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10 md:mb-12 animate-slide-up px-4" style={{ animationDelay: '100ms' }}>
            I share my journey of building, learning, and creating. From articles to projects, this is my space for exploration and growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up px-4" style={{ animationDelay: '200ms' }}>
            <Link 
              href="/blog" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-gray-900/10 dark:shadow-white/10"
            >
              Read Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link 
              href="/projects" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
