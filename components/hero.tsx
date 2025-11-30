'use client'

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import AnimatedBackground from './animated-background'
import { StarBackground } from './ui/star-background'
import { ArrowRight } from 'lucide-react'

// Typewriter component for rotating text
function TypewriterText() {
  const words = ['CREATIVE LAB', 'DIGITAL SPACE', 'JOURNEY', 'DEV STUDIO']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1))
          setTypingSpeed(150)
        } else {
          // Pause at end before deleting
          setTypingSpeed(2000)
          setIsDeleting(true)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentWord.substring(0, currentText.length - 1))
          setTypingSpeed(100)
        } else {
          // Move to next word
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
          setTypingSpeed(500)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex, typingSpeed, words])

  return (
    <span className="relative inline-block">
      <span className="text-gray-600 dark:text-gray-400 font-black">
        {currentText}
      </span>
      <span className="inline-block w-[0.15em] h-[0.9em] bg-gray-600 dark:bg-gray-400 ml-1 animate-blink"></span>
      <style jsx>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </span>
  )
}

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
    <section ref={containerRef} className="relative flex items-center justify-center overflow-hidden bg-white dark:bg-black min-h-[85vh] sm:min-h-[100svh] pt-32 pb-32 sm:pt-20 sm:pb-0">
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
            <span className="text-gray-700 dark:text-gray-300 tracking-wide">AVAILABLE FOR PROJECTS</span>
          </div>

          {/* Main Heading with Typewriter */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1] md:leading-[1.0] animate-slide-up text-gray-900 dark:text-white">
            HI, WELCOME TO<br />
            MY <TypewriterText />
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10 md:mb-12 animate-slide-up px-4" style={{ animationDelay: '100ms' }}>
            Full-stack developer turning ideas into reality. I build modern web applications with clean code, thoughtful design, and a passion for innovation.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up px-4" style={{ animationDelay: '200ms' }}>
            <Link 
              href="/#blog" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-gray-900/10 dark:shadow-white/10"
            >
              Read Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link 
              href="/#projects" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-2xl hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
