'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { debounce } from '@/lib/utils'

interface SearchResult {
  slug: string
  title: string
  description: string
  tags: string[]
}

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const searchPosts = useCallback(
    debounce(async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults([])
        setIsLoading(false)
        return
      }

      setIsLoading(true)
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
        const data = await response.json()
        setResults(data.results || [])
      } catch (error) {
        console.error('Search error:', error)
        setResults([])
      } finally {
        setIsLoading(false)
      }
    }, 300),
    []
  )

  useEffect(() => {
    if (query) {
      searchPosts(query)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query, searchPosts])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setQuery('')
      setIsOpen(false)
    }
  }

  return (
    <div ref={searchRef} className="relative w-full">
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search articles..."
          className="w-full px-5 py-4 pl-12 pr-12 text-base bg-white dark:bg-black border-2 border-gray-100 dark:border-gray-800 rounded-2xl focus:outline-none focus:border-gray-900 dark:focus:border-white transition-all shadow-sm group-hover:shadow-md text-gray-900 dark:text-white placeholder-gray-400"
          aria-label="Search"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-gray-900 dark:group-focus-within:text-white transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {isOpen && (
        <div className="absolute top-full mt-4 w-full bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-2xl shadow-xl z-50 max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-muted-foreground">
              <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-primary-500"></div>
              <span className="ml-2">Searching...</span>
            </div>
          ) : results.length > 0 ? (
            <div className="py-2">
              {results.map((result) => (
                <Link
                  key={result.slug}
                  href={`/blog/${result.slug}`}
                  onClick={() => {
                    setQuery('')
                    setIsOpen(false)
                  }}
                  className="block px-4 py-3 hover:bg-muted transition-colors"
                >
                  <div className="font-medium">{result.title}</div>
                  <div className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {result.description}
                  </div>
                  {result.tags && result.tags.length > 0 && (
                    <div className="flex gap-1 mt-2">
                      {result.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          ) : query.trim() ? (
            <div className="p-4 text-center text-muted-foreground">
                No results found for &quot;{query}&quot;
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}
