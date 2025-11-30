-- =============================================
-- AERODEV DATABASE SCHEMA
-- =============================================
-- Run this script in your Supabase SQL Editor
-- =============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- PROJECTS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  content TEXT, -- Optional: for detailed project view
  image_url TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  category TEXT NOT NULL,
  demo_link TEXT,
  repo_link TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- BLOG POSTS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL, -- Markdown content
  cover_image TEXT,
  tags TEXT[] DEFAULT '{}',
  category TEXT NOT NULL,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- STORAGE BUCKET FOR IMAGES
-- =============================================
INSERT INTO storage.buckets (id, name, public)
VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

-- =============================================
-- STORAGE POLICY: Allow public read access
-- =============================================
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'images' );

-- =============================================
-- STORAGE POLICY: Allow authenticated users to upload
-- =============================================
CREATE POLICY "Authenticated users can upload images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK ( bucket_id = 'images' );

-- =============================================
-- STORAGE POLICY: Allow authenticated users to update
-- =============================================
CREATE POLICY "Authenticated users can update images"
ON storage.objects FOR UPDATE
TO authenticated
USING ( bucket_id = 'images' );

-- =============================================
-- STORAGE POLICY: Allow authenticated users to delete
-- =============================================
CREATE POLICY "Authenticated users can delete images"
ON storage.objects FOR DELETE
TO authenticated
USING ( bucket_id = 'images' );

-- =============================================
-- ROW LEVEL SECURITY (RLS)
-- =============================================

-- Enable RLS on projects table
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Enable RLS on posts table
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- =============================================
-- PROJECTS POLICIES
-- =============================================

-- Allow anyone to read projects
CREATE POLICY "Anyone can view projects"
ON projects FOR SELECT
USING (true);

-- Allow authenticated users to insert projects
CREATE POLICY "Authenticated users can insert projects"
ON projects FOR INSERT
TO authenticated
WITH CHECK (true);

-- Allow authenticated users to update projects
CREATE POLICY "Authenticated users can update projects"
ON projects FOR UPDATE
TO authenticated
USING (true);

-- Allow authenticated users to delete projects
CREATE POLICY "Authenticated users can delete projects"
ON projects FOR DELETE
TO authenticated
USING (true);

-- =============================================
-- POSTS POLICIES
-- =============================================

-- Allow anyone to read published posts
CREATE POLICY "Anyone can view published posts"
ON posts FOR SELECT
USING (published = true OR auth.role() = 'authenticated');

-- Allow authenticated users to insert posts
CREATE POLICY "Authenticated users can insert posts"
ON posts FOR INSERT
TO authenticated
WITH CHECK (true);

-- Allow authenticated users to update posts
CREATE POLICY "Authenticated users can update posts"
ON posts FOR UPDATE
TO authenticated
USING (true);

-- Allow authenticated users to delete posts
CREATE POLICY "Authenticated users can delete posts"
ON posts FOR DELETE
TO authenticated
USING (true);

-- =============================================
-- TRIGGERS: Auto-update updated_at timestamp
-- =============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON projects
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_posts_updated_at
BEFORE UPDATE ON posts
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- INDEXES for better performance
-- =============================================

CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_published ON posts(published);
CREATE INDEX IF NOT EXISTS idx_posts_published_at ON posts(published_at DESC);

-- =============================================
-- DONE! Schema created successfully
-- =============================================
