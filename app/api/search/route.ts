import { NextRequest, NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/mdx'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')?.toLowerCase() || ''

  if (!query) {
    return NextResponse.json({ results: [] })
  }

  try {
    const posts = await getAllPosts()
    
    // Search in title, description, tags, and content
    const results = posts
      .filter((post) => {
        const searchableText = [
          post.title,
          post.description,
          ...(post.tags || []),
        ].join(' ').toLowerCase()
        
        return searchableText.includes(query)
      })
      .slice(0, 5) // Limit to 5 results
      .map((post) => ({
        slug: post.slug,
        title: post.title,
        description: post.description,
        tags: post.tags || [],
      }))

    return NextResponse.json({ results })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json({ results: [] }, { status: 500 })
  }
}
