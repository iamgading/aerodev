export type Project = {
  id: string
  title: string
  slug: string
  description: string
  content?: string
  image_url: string
  tags: string[]
  category: string
  demo_link?: string
  repo_link?: string
  featured: boolean
  created_at: string
  updated_at: string
}

export type Post = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  cover_image?: string
  tags: string[]
  category: string
  published: boolean
  published_at?: string
  created_at: string
  updated_at: string
}

export type Database = {
  public: {
    Tables: {
      projects: {
        Row: Project
        Insert: Omit<Project, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Project, 'id' | 'created_at' | 'updated_at'>>
      }
      posts: {
        Row: Post
        Insert: Omit<Post, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Post, 'id' | 'created_at' | 'updated_at'>>
      }
    }
  }
}
