import { NextRequest, NextResponse } from 'next/server'

// In production, you'd use a database like PostgreSQL or Redis
// For demo, we'll use in-memory storage (resets on server restart)
const viewCounts = new Map<string, number>()

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug
  const views = viewCounts.get(slug) || 0
  
  return NextResponse.json({ views })
}

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug
  const currentViews = viewCounts.get(slug) || 0
  const newViews = currentViews + 1
  
  viewCounts.set(slug, newViews)
  
  // In production, save to database:
  // await db.views.upsert({
  //   where: { slug },
  //   update: { count: { increment: 1 } },
  //   create: { slug, count: 1 }
  // })
  
  return NextResponse.json({ views: newViews })
}
