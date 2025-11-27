import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  author?: string
  tags?: string[]
  readingTime?: string
  image?: string
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx?$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  // Process markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()
  
  // Calculate reading time (rough estimate: 200 words per minute)
  const wordCount = content.split(/\s+/).length
  const readingTime = `${Math.ceil(wordCount / 200)} min read`
  
  return {
    slug: realSlug,
    content: contentHtml,
    ...data,
    readingTime,
  } as PostMeta & { content: string }
}

export async function getAllPosts(): Promise<PostMeta[]> {
  // Create posts directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
    return []
  }
  
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames
      .filter((fileName) => /\.(md|mdx)$/.test(fileName))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.(md|mdx)$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)
        
        // Calculate reading time
        const wordCount = content.split(/\s+/).length
        const readingTime = `${Math.ceil(wordCount / 200)} min read`
        
        return {
          slug,
          ...data,
          readingTime,
        } as PostMeta
      })
  )
  
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => /\.(md|mdx)$/.test(fileName))
    .map((fileName) => fileName.replace(/\.(md|mdx)$/, ''))
}
