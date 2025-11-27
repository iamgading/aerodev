'use client'

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import AnimatedBackground from './animated-background'

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
    <section ref={containerRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white dark:bg-[#050505]">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Grid Background with Spotlight */}
      <div className="absolute inset-0 bg-grid opacity-[0.3] dark:opacity-[0.2]" />
      
      {/* Spotlight Effect */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.12), transparent 40%)`,
        }}
      />

      <div className="container-wide relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-sm font-semibold mb-10 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400">OPEN FOR NEW OPPORTUNITIES</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.95] animate-slide-up">
            ELEVATING<br />
            <span className="gradient-text">DIGITAL REALITY</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12 animate-slide-up" style={{ animationDelay: '100ms' }}>
            AeroDev is a creative development studio crafting future-ready web experiences. We blend technical precision with aesthetic excellence.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Link href="/projects" className="btn-premium px-10 py-4 text-base">
              View Our Work
            </Link>
            
            <Link href="/about" className="btn-premium-outline px-10 py-4 text-base">
              About Studio
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
