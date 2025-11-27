import Link from 'next/link'
import { formatDate } from '@/lib/utils'

interface Post {
  slug: string
  title: string
  description: string
  date: string
  tags?: string[]
}

interface RelatedPostsProps {
  currentSlug: string
  posts: Post[]
  tags?: string[]
}

export function RelatedPosts({ currentSlug, posts, tags = [] }: RelatedPostsProps) {
  // Find related posts based on shared tags
  const relatedPosts = posts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const sharedTags = post.tags?.filter((tag) => tags.includes(tag)) || []
      return {
        ...post,
        relevance: sharedTags.length,
      }
    })
    .filter((post) => post.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 3)

  // If no related posts by tags, show latest posts
  const displayPosts = relatedPosts.length > 0
    ? relatedPosts
    : posts
        .filter((post) => post.slug !== currentSlug)
        .slice(0, 3)

  if (displayPosts.length === 0) return null

  return (
    <section className="mt-16 pt-8 border-t">
      <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {displayPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group"
          >
            <article className="h-full p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-colors">
              <time className="text-xs text-gray-500 dark:text-gray-400">
                {formatDate(post.date)}
              </time>
              <h3 className="mt-2 text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                {post.description}
              </p>
              {post.tags && post.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
