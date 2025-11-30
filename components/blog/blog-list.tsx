import Link from 'next/link'
import { formatDate } from '@/lib/utils'

interface Post {
  slug: string
  title: string
  description: string
  date: string
  readingTime?: string
  tags?: string[]
}

interface BlogListProps {
  posts: Post[]
}

export function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">No posts yet. Check back soon!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link 
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-300"
        >
          {/* Date & Reading Time */}
          <div className="flex items-center gap-3 mb-4 text-xs text-gray-500 dark:text-gray-400">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.readingTime && (
              <>
                <span>•</span>
                <span>{post.readingTime}</span>
              </>
            )}
          </div>
          
          {/* Title */}
          <h2 className="text-lg font-bold leading-tight mb-3 text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors line-clamp-2">
            {post.title}
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">
            {post.description}
          </p>
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </Link>
      ))}
    </div>
  )
}
