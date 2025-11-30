'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { LayoutDashboard, FileText, Briefcase, LogOut, Menu, X, Home, User, Sun, Moon } from 'lucide-react'
import { Logo } from '@/components/ui/logo'
import { useTheme } from 'next-themes'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user && !pathname?.includes('/login')) {
        router.push('/admin/login')
      } else {
        setUser(user)
      }
      setLoading(false)
    }

    checkAuth()
  }, [router, pathname])

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-gray-300 dark:border-gray-700 border-t-gray-900 dark:border-t-white rounded-full animate-spin" />
          <p className="text-sm text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user && pathname?.includes('/login')) {
    return <>{children}</>
  }

  if (!user) {
    return null
  }

  const navItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Projects', href: '/admin/projects', icon: Briefcase },
    { name: 'Blog Posts', href: '/admin/posts', icon: FileText },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/70 dark:bg-black/70 backdrop-blur-2xl border-b border-gray-200/50 dark:border-gray-800/50 flex items-center justify-between px-4 z-50">
        {/* Logo */}
        <Logo 
          iconClassName="w-8 h-8" 
          textClassName="text-base font-bold tracking-tight font-manrope"
          showSubtext={true}
        />
        
        {/* Right Side: Toggle + Hamburger */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl transition-all"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          )}
          
          {/* Hamburger Menu */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl transition-all"
            aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
          >
            {sidebarOpen ? (
              <X className="w-6 h-6 text-gray-900 dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Header - Theme Toggle */}
      <div className="hidden lg:block fixed top-0 right-0 z-50 p-6">
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-3 bg-white/70 dark:bg-black/70 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-800/50 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl transition-all shadow-lg"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        )}
      </div>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-72 bg-white/70 dark:bg-black/70 backdrop-blur-2xl border-r border-gray-200/50 dark:border-gray-800/50 transition-all duration-300 z-40 flex flex-col ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        {/* Logo Section - Desktop Only */}
        <div className="hidden lg:block p-6 border-b border-gray-200/50 dark:border-gray-800/50">
          <Logo 
            iconClassName="w-12 h-12" 
            textClassName="text-xl font-bold tracking-tight font-manrope"
            showSubtext={true}
          />
        </div>

        {/* Mobile Header in Sidebar */}
        <div className="lg:hidden p-6 border-b border-gray-200/50 dark:border-gray-800/50">
          <div className="flex items-center justify-between mb-4">
            <Logo 
              iconClassName="w-10 h-10" 
              textClassName="text-lg font-bold tracking-tight font-manrope"
              showSubtext={true}
            />
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl transition-all lg:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all group ${
                  isActive
                    ? 'bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 shadow-lg shadow-gray-900/20 dark:shadow-white/20'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <item.icon className={`w-5 h-5 transition-transform ${isActive ? '' : 'group-hover:scale-110'}`} />
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Footer Section */}
        <div className="p-6 border-t border-gray-200/50 dark:border-gray-800/50 space-y-3">
          {/* User Info */}
          <div className="flex items-center gap-3 px-4 py-3 bg-gray-50/50 dark:bg-gray-900/50 rounded-xl backdrop-blur-sm">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white dark:text-gray-900" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{user?.email}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Administrator</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <Link
              href="/"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl transition-all group"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Back to Home
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50/50 dark:hover:bg-red-900/20 rounded-xl transition-all group"
            >
              <LogOut className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 pt-16 lg:pt-0 min-h-screen">
        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
