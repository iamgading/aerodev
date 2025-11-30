import type { Metadata } from 'next'
import { Manrope, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { siteConfig } from '@/lib/site-config'
import MouseSpotlight from '@/components/ui/mouse-spotlight'
import { Toaster } from 'sonner'
import { BackToTop } from '@/components/ui/back-to-top'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { ErrorBoundary } from '@/components/ui/error-boundary'
import { LayoutWrapper } from '@/components/layout-wrapper'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Web Development', 'Portfolio'],
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@aerodev',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${inter.variable} font-sans antialiased bg-white dark:bg-black text-gray-900 dark:text-gray-100`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>
            <ScrollProgress />
            <MouseSpotlight />
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
            <Toaster 
              position="bottom-right" 
              expand={false}
              richColors
              closeButton
            />
            <BackToTop />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}
