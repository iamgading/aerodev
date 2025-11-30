import Link from 'next/link'
import { Lock } from 'lucide-react'

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-900 dark:bg-white rounded-2xl mb-6 shadow-xl">
          <svg className="w-10 h-10 text-white dark:text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L4 20H8L12 12L16 20H20L12 4Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-black tracking-tighter mb-4 text-gray-900 dark:text-white">
          ADMIN PANEL
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Content Management System
        </p>

        {/* Login Button */}
        <Link
          href="/admin/login"
          className="inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-xl hover:scale-[1.02] active:scale-[0.98]"
        >
          <Lock className="w-5 h-5" />
          Login to Dashboard
        </Link>

        {/* Info */}
        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          Authorized access only
        </p>
      </div>
    </div>
  )
}
