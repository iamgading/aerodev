import DOMPurify from 'isomorphic-dompurify'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar } from 'lucide-react'
import { getPostBySlug } from '@/lib/supabase/server-queries'
import CTASection from '@/components/home/cta-section'

// Force dynamic rendering for all blog post pages
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = await getPostBySlug(params.slug)
    
    if (!post) {
      return {
        title: 'Post Not Found',
      }
    }

    return {
      title: `${post.title} - Aerodev`,
      description: post.excerpt,
    }
  } catch (error) {
    console.error('Error generating metadata for post:', error)
    return {
      title: 'Blog - Aerodev',
    }
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = await getPostBySlug(params.slug)
  } catch (error) {
    console.error('Error fetching post:', error)
    notFound()
  }

  if (!post || !post.published) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-24 md:py-32 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="container-wide">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="max-w-4xl">
            {/* Date */}
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.published_at || post.created_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-gray-900 dark:text-white">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {post.cover_image && (
        <section className="section bg-gray-50 dark:bg-gray-900">
          <div className="container-wide">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
              <Image
                src={post.cover_image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Post Content */}
      <section className="section bg-white dark:bg-black">
        <div className="container-wide max-w-4xl">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} />
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
