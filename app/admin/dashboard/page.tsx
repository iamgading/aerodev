import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getProjects, getPosts } from '@/lib/supabase/queries'
import { Briefcase, FileText, Eye, TrendingUp, Plus, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default async function AdminDashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  // Fetch stats
  let projectsCount = 0
  let postsCount = 0
  let publishedPostsCount = 0

  try {
    const projects = await getProjects()
    const posts = await getPosts()
    const publishedPosts = await getPosts(true)
    
    projectsCount = projects.length
    postsCount = posts.length
    publishedPostsCount = publishedPosts.length
  } catch (error) {
    console.error('Error fetching stats:', error)
  }

  const stats = [
    {
      name: 'Total Projects',
      value: projectsCount,
      icon: Briefcase,
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50',
      iconBg: 'bg-blue-500',
    },
    {
      name: 'Total Posts',
      value: postsCount,
      icon: FileText,
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50',
      iconBg: 'bg-purple-500',
    },
    {
      name: 'Published Posts',
      value: publishedPostsCount,
      icon: Eye,
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50',
      iconBg: 'bg-green-500',
    },
    {
      name: 'Draft Posts',
      value: postsCount - publishedPostsCount,
      icon: TrendingUp,
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100 dark:from-orange-950/50 dark:to-orange-900/50',
      iconBg: 'bg-orange-500',
    },
  ]

  const quickActions = [
    {
      title: 'Create New Project',
      description: 'Add a new project to your portfolio',
      href: '/admin/projects/new',
      icon: Briefcase,
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Write New Post',
      description: 'Start writing a new blog post',
      href: '/admin/posts/new',
      icon: FileText,
      gradient: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Welcome back! Here&apos;s an overview of your content.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className={`relative overflow-hidden bg-gradient-to-br ${stat.bgGradient} border border-gray-200 dark:border-gray-800 rounded-2xl p-6 group hover:shadow-xl transition-all duration-300`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
            </div>
            <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {stat.value}
            </p>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {stat.name}
            </p>
            
            {/* Decorative gradient overlay */}
            <div className={`absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Quick Actions
          </h2>
          <Plus className="w-6 h-6 text-gray-400" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${action.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {action.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-1 transition-all" />
              </div>
              
              {/* Decorative gradient overlay */}
              <div className={`absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br ${action.gradient} opacity-5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity Section - Placeholder for future enhancement */}
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Recent Activity
        </h2>
        <div className="flex items-center justify-center py-12">
            <p className="text-gray-500 dark:text-gray-400">Here&apos;s what&apos;s happening with your portfolio today.</p>
        </div>
      </div>
    </div>
  )
}

