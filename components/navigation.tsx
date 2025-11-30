'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Logo from './logo'
import { Menu, X, ArrowRight, Github, Linkedin, Instagram, Home, User, Briefcase, FileText, Mail } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Blog', href: '#blog', icon: FileText },
  { name: 'Contact', href: '#cta', icon: Mail },
]

export function Navigation() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('/')
  const [scrolled, setScrolled] = useState(false)
  
  const isHomePage = pathname === '/'

  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      if (!isHomePage) return
      
      if (window.scrollY < 100) {
        setActiveSection('/')
        return
      }

      const sections = ['about', 'projects', 'blog']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top >= 0 && rect.top <= 400) {
            setActiveSection(`#${section}`)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  // Lock body scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [mobileMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      if (isHomePage) {
        const sectionId = href.replace('#', '')
        const element = document.getElementById(sectionId)
        if (element) {
          setMobileMenuOpen(false)
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 300)
        }
      } else {
        setMobileMenuOpen(false)
        window.location.href = `/${href}`
      }
    } else if (href === '/') {
      if (isHomePage) {
        e.preventDefault()
        setMobileMenuOpen(false)
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          setActiveSection('/')
        }, 300)
      } else {
        setMobileMenuOpen(false)
      }
    } else {
      setMobileMenuOpen(false)
    }
  }

  const isActive = (href: string) => {
    if (isHomePage) {
      if (href === '/') return activeSection === '/'
      if (href.startsWith('#')) return activeSection === href
    }
    if (href === '#about' && pathname === '/about') return true
    if (href === '#projects' && pathname === '/projects') return true
    if (href === '#blog' && pathname === '/blog') return true
    return false
  }

  return (
    <>
      {/* Skip to Content Link - Accessibility */}
      <a 
        href="#main-content" 
        className="skip-to-content"
      >
        Skip to main content
      </a>

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen 
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/5' 
            : 'bg-transparent border-transparent'
        }`}
        role="banner"
      >
        <nav className="container-wide" role="navigation" aria-label="Main navigation">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="relative z-50">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-1 bg-gray-100/50 dark:bg-white/5 p-1.5 rounded-full border border-gray-200/50 dark:border-white/5 backdrop-blur-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              {mounted && (
                <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors relative z-50"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-live="polite"
              >
                  {theme === 'dark' ? (
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
              )}

              {/* CTA Button - Desktop */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-gray-900/20 dark:shadow-white/20"
              >
                Contact Me
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 relative z-50"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                  <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-2xl" />
        
        {/* Content */}
        <div className="relative h-full flex flex-col pt-28 px-6 pb-10 overflow-y-auto">
          <div className="flex-1 flex flex-col gap-2">
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  className={`group flex items-center gap-4 p-4 rounded-2xl text-2xl font-bold transition-all duration-300 transform ${
                    mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  } ${
                    isActive(item.href)
                      ? 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className="w-7 h-7 flex-shrink-0" />
                  <span className="flex-1">{item.name}</span>
                  <ArrowRight className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${isActive(item.href) ? 'opacity-100' : 'opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                </Link>
              )
            })}
          </div>

          {/* Bottom Actions */}
          <div className={`mt-8 space-y-6 transition-all duration-500 delay-300 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full p-5 text-lg font-bold bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl"
            >
              Contact Me
              <ArrowRight className="w-5 h-5" />
            </Link>

            <div className="flex justify-center gap-8">
              <SocialIcon href="https://github.com/aerodev-id" icon={<Github className="w-7 h-7" />} label="GitHub" />
              <SocialIcon href="https://linkedin.com/in/gadingsatrio" icon={<Linkedin className="w-7 h-7" />} label="LinkedIn" />
              <SocialIcon href="https://instagram.com/aerodev.id" icon={<Instagram className="w-7 h-7" />} label="Instagram" />
            </div>
            
            <p className="text-center text-sm text-gray-400 dark:text-gray-500">
              © {new Date().getFullYear()} Aerodev. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

function SocialIcon({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  )
}
