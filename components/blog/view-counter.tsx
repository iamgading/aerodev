'use client'

import { useEffect, useState } from 'react'

interface ViewCounterProps {
  slug: string
  increment?: boolean
}

export function ViewCounter({ slug, increment = false }: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch(`/api/views/${slug}`, {
          method: increment ? 'POST' : 'GET',
        })
        const data = await response.json()
        setViews(data.views)
      } catch (error) {
        console.error('Error fetching views:', error)
      }
    }

    fetchViews()
  }, [slug, increment])

  if (views === null) {
    return <span className="text-sm text-muted-foreground">--- views</span>
  }

  return (
    <span className="text-sm text-muted-foreground">
      {views.toLocaleString()} {views === 1 ? 'view' : 'views'}
    </span>
  )
}
