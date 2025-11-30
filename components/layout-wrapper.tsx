'use client'

import { usePathname } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdminPage = pathname?.startsWith('/admin')

  if (isAdminPage) {
    // Admin pages: no navbar/footer, just children
    return <>{children}</>
  }

  // Regular pages: with navbar and footer
  return (
    <div className="min-h-screen flex flex-col relative z-10">
      <Navigation />
      <main id="main-content" className="flex-1" role="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}
