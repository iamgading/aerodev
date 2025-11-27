'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface Heading {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll('article h2, article h3')
    ).filter((elem) => elem.id) as HTMLHeadingElement[]

    const headingData = elements.map((elem) => ({
      id: elem.id,
      text: elem.textContent || '',
      level: parseInt(elem.tagName.charAt(1)),
    }))

    setHeadings(headingData)

    // Set up intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '0px 0px -80% 0px',
        threshold: 1.0,
      }
    )

    elements.forEach((elem) => observer.observe(elem))

    return () => {
      elements.forEach((elem) => observer.unobserve(elem))
    }
  }, [])

  if (headings.length === 0) return null

  return (
    <nav className="sticky top-24">
      <h4 className="text-sm font-semibold mb-4 text-gray-900 dark:text-gray-100">
        On This Page
      </h4>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }}
              className={cn(
                'text-sm block py-1 transition-colors hover:text-primary-600 dark:hover:text-primary-400',
                activeId === heading.id
                  ? 'text-primary-600 dark:text-primary-400 font-medium'
                  : 'text-gray-600 dark:text-gray-400'
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
