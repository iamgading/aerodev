import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import type { Project, Post } from './types'

// Create a public client that doesn't rely on cookies/request scope
const createPublicClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase environment variables:', {
      hasUrl: !!supabaseUrl,
      hasKey: !!supabaseKey
    })
    throw new Error('Missing Supabase environment variables')
  }

  return createSupabaseClient(supabaseUrl, supabaseKey)
}

// =============================================
// PROJECTS (SERVER SIDE)
// =============================================

export async function getProjects(featured?: boolean) {
  try {
    const supabase = createPublicClient()
    
    let query = supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (featured !== undefined) {
      query = query.eq('featured', featured)
    }
    
    const { data, error } = await query
    
    if (error) {
      console.error('Error fetching projects:', error)
      throw error
    }
    return data as Project[]
  } catch (error) {
    console.error('getProjects failed:', error)
    return []
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    console.log('Fetching project with slug:', slug)
    const supabase = createPublicClient()
    
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single()
    
    if (error) {
      console.error('Error fetching project by slug:', error.code, error.message)
      // PGRST116 = "The result contains 0 rows" - project not found
      if (error.code === 'PGRST116') {
        return null
      }
      return null
    }
    
    console.log('Project found:', data?.title)
    return data as Project
  } catch (error) {
    console.error('getProjectBySlug failed:', error)
    return null
  }
}

// =============================================
// BLOG POSTS (SERVER SIDE)
// =============================================

export async function getPosts(published?: boolean) {
  try {
    const supabase = createPublicClient()
    
    let query = supabase
      .from('posts')
      .select('*')
      .order('published_at', { ascending: false, nullsFirst: false })
    
    if (published !== undefined) {
      query = query.eq('published', published)
    }
    
    const { data, error } = await query
    
    if (error) {
      console.error('Error fetching posts:', error)
      throw error
    }
    return data as Post[]
  } catch (error) {
    console.error('getPosts failed:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    console.log('Fetching post with slug:', slug)
    const supabase = createPublicClient()
    
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .single()
    
    if (error) {
      console.error('Error fetching post by slug:', error.code, error.message)
      // PGRST116 = "The result contains 0 rows" - post not found
      if (error.code === 'PGRST116') {
        return null
      }
      return null
    }
    
    console.log('Post found:', data?.title)
    return data as Post
  } catch (error) {
    console.error('getPostBySlug failed:', error)
    return null
  }
}

