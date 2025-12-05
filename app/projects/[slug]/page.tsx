import DOMPurify from 'isomorphic-dompurify'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { getProjectBySlug, getProjects } from '@/lib/supabase/server-queries'
import CTASection from '@/components/home/cta-section'

// Allow dynamic rendering for slugs not generated at build time
export const dynamicParams = true

// Revalidate every 60 seconds for ISR (Incremental Static Regeneration)
export const revalidate = 60

export async function generateStaticParams() {
  try {
    const projects = await getProjects()
    return projects.map((project) => ({
      slug: project.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const project = await getProjectBySlug(params.slug)
    
    if (!project) {
      return {
        title: 'Project Not Found',
      }
    }

    return {
      title: `${project.title} - Aerodev`,
      description: project.description,
    }
  } catch (error) {
    console.error('Error fetching project metadata:', error)
    return {
      title: 'Project - Aerodev',
    }
  }
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  let project;
  try {
    project = await getProjectBySlug(params.slug)
  } catch (error) {
    console.error('Error fetching project:', error)
    notFound()
  }

  if (!project) {
    notFound()
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
                  Featured
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
              {project.tags.map((tag: string) => (
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


            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.content) }} />
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
