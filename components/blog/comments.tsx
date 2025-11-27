'use client'

import { useTheme } from 'next-themes'
import { useEffect, useRef } from 'react'

interface CommentsProps {
  slug: string
}

export function Comments({ slug }: CommentsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', 'yourusername/your-blog-repo') // Change this
    script.setAttribute('data-repo-id', 'YOUR_REPO_ID') // Change this
    script.setAttribute('data-category', 'General')
    script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID') // Change this
    script.setAttribute('data-mapping', 'pathname')
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'bottom')
    script.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light')
    script.setAttribute('data-lang', 'en')
    script.setAttribute('data-loading', 'lazy')
    script.crossOrigin = 'anonymous'
    script.async = true

    ref.current.appendChild(script)
  }, [theme])

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Comments</h2>
      <div ref={ref} />
      <noscript>
        <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          Please enable JavaScript to view comments.
        </div>
      </noscript>
    </div>
  )
}
