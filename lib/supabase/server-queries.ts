import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import type { Project, Post } from './types'

// Create a public client that doesn't rely on cookies/request scope
// This is safe for generateStaticParams and public data fetching
const createPublicClient = () => {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

// =============================================
// PROJECTS (SERVER SIDE)
// =============================================

export async function getProjects(featured?: boolean) {
  const supabase = createPublicClient()
  
  let query = supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (featured !== undefined) {
    query = query.eq('featured', featured)
  }
  
  const { data, error } = await query
  
  if (error) throw error
  return data as Project[]
}

export async function getProjectBySlug(slug: string) {
  const supabase = createPublicClient()
  
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single()
  
  // Return null if project not found, instead of throwing error
  if (error) {
    if (error.code === 'PGRST116') {
      // PGRST116 = "The result contains 0 rows" - project not found
      return null
    }
    throw error
  }
  return data as Project
}

// =============================================
// BLOG POSTS (SERVER SIDE)
// =============================================

export async function getPosts(published?: boolean) {
  const supabase = createPublicClient()
  
  let query = supabase
    .from('posts')
    .select('*')
    .order('published_at', { ascending: false, nullsFirst: false })
  
  if (published !== undefined) {
    query = query.eq('published', published)
  }
  
  const { data, error } = await query
  
  if (error) throw error
  return data as Post[]
}

export async function getPostBySlug(slug: string) {
  const supabase = createPublicClient()
  
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single()
  
  if (error) throw error
  return data as Post
}
