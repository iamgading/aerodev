'use client'

import { useEffect, useState } from 'react'
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react'
import { getPosts, deletePost, updatePost } from '@/lib/supabase/queries'
import type { Post } from '@/lib/supabase/types'
import Link from 'next/link'

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      const data = await getPosts()
      setPosts(data)
    } catch (error) {
      console.error('Error loading posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return

    try {
      await deletePost(id)
      setPosts(posts.filter(p => p.id !== id))
    } catch (error) {
      console.error('Error deleting post:', error)
      alert('Failed to delete post')
    }
  }

  const togglePublished = async (post: Post) => {
    try {
      await updatePost(post.id, { 
        published: !post.published,
        published_at: !post.published ? new Date().toISOString() : undefined
      })
      setPosts(posts.map(p => 
        p.id === post.id ? { ...p, published: !p.published } : p
      ))
    } catch (error) {
      console.error('Error updating post:', error)
      alert('Failed to update post')
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-gray-300 dark:border-gray-700 border-t-gray-900 dark:border-t-white rounded-full animate-spin" />
          <p className="text-sm text-gray-600 dark:text-gray-400">Loading posts...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Blog Posts</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Manage your blog articles</p>
        </div>
        <Link
          href="/admin/posts/new"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          <Plus className="w-5 h-5" />
          New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16 bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-6">No posts yet. Start sharing your thoughts!</p>
            <Link
              href="/admin/posts/new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Plus className="w-5 h-5" />
              Write Your First Post
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-b border-gray-200 dark:border-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                    Post
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all duration-200">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white line-clamp-1">{post.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">{post.excerpt}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {new Date(post.created_at).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => togglePublished(post)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                          post.published
                            ? 'bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/20 dark:to-green-800/20 text-green-600 dark:text-green-400 shadow-md'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                      >
                        {post.published ? 'Published' : 'Draft'}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/posts/${post.id}`}
                          className="p-2 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-xl transition-all duration-200 group"
                        >
                          <Edit className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all duration-200 group"
                        >
                          <Trash2 className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
