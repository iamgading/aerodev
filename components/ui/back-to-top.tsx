'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!show) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 left-8 z-50 p-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
    </button>
  )
}
