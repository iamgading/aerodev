'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, Github, Loader2 } from 'lucide-react'
import { getProjectBySlug } from '@/lib/supabase/queries'
import CTASection from '@/components/home/cta-section'
import type { Project } from '@/lib/supabase/types'

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params?.slug as string
  
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    async function fetchProject() {
      if (!slug) {
        setNotFound(true)
        setLoading(false)
        return
      }

      try {
        const data = await getProjectBySlug(slug)
        if (!data) {
          setNotFound(true)
        } else {
          setProject(data)
        }
      } catch (err) {
        console.error('Error fetching project:', err)
        setNotFound(true)
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
      </div>
    )
  }

  if (notFound || !project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-24 md:py-32 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="container-wide">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="max-w-4xl">
            {/* Featured Badge */}
            {project.featured && (
              <div className="mb-6">
                <span className="px-4 py-1.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-bold rounded-full">
                  Eksklusif
                </span>
              </div>
            )}

            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-gray-900 dark:text-white">
              {project.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags?.map((tag: string) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.demo_link && (
                <a
                  href={project.demo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.repo_link && (
                <a
                  href={project.repo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl hover:border-gray-400 dark:hover:border-gray-600 transition-all"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-wide">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
            <Image
              src={project.image_url}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Project Content */}
      {project.content && (
        <section className="section bg-white dark:bg-black">
          <div className="container-wide max-w-4xl">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: project.content }}
            />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
