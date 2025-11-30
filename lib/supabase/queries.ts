import { createClient } from './client'
import type { Project, Post } from './types'

// =============================================
// PROJECTS
// =============================================

export async function getProjects(featured?: boolean) {
  const supabase = createClient()
  
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
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single()
  
  if (error) throw error
  return data as Project
}

export async function getProjectById(id: string) {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) throw error
  return data as Project
}

export async function createProject(project: Omit<Project, 'id' | 'created_at' | 'updated_at'>) {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('projects')
    .insert(project)
    .select()
    .single()
  
  if (error) throw error
  return data as Project
}

export async function updateProject(id: string, updates: Partial<Project>) {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('projects')
    .update(updates)
    .eq('id', id)
    .select()
    .single()
  
  if (error) throw error
  return data as Project
}

export async function deleteProject(id: string) {
  const supabase = createClient()
  
  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id)
  
  if (error) throw error
}

// =============================================
// BLOG POSTS
// =============================================

export async function getPosts(published?: boolean) {
  const supabase = createClient()
  
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
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single()
  
  if (error) throw error
  return data as Post
}

export async function getPostById(id: string) {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) throw error
  return data as Post
}

export async function createPost(post: Omit<Post, 'id' | 'created_at' | 'updated_at'>) {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('posts')
    .insert(post)
    .select()
    .single()
  
  if (error) throw error
  return data as Post
}

export async function updatePost(id: string, updates: Partial<Post>) {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('posts')
    .update(updates)
    .eq('id', id)
    .select()
    .single()
  
  if (error) throw error
  return data as Post
}

export async function deletePost(id: string) {
  const supabase = createClient()
  
  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id)
  
  if (error) throw error
}

// =============================================
// IMAGE UPLOAD
// =============================================

export async function uploadImage(file: File, folder: 'projects' | 'posts') {
  const supabase = createClient()
  
  const fileExt = file.name.split('.').pop()
  const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
  
  const { data, error } = await supabase.storage
    .from('images')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false
    })
  
  if (error) throw error
  
  const { data: { publicUrl } } = supabase.storage
    .from('images')
    .getPublicUrl(data.path)
  
  return publicUrl
}

export async function deleteImage(url: string) {
  const supabase = createClient()
  
  // Extract path from URL
  const path = url.split('/storage/v1/object/public/images/')[1]
  
  if (!path) return
  
  const { error } = await supabase.storage
    .from('images')
    .remove([path])
  
  if (error) throw error
}
