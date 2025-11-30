'use client'

import Link from 'next/link'

export default function AboutSection() {
  return (
    <section id="about" className="section relative bg-gray-50 dark:bg-gray-900 scroll-mt-20 !pt-12 md:!pt-16 !pb-32 md:!pb-40">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Title - First on Mobile, Hidden on Desktop */}
          <div className="lg:hidden order-1">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              A SPACE FOR<br />
              <span className="text-gray-600 dark:text-gray-400">CREATIVE EXPLORATION</span>
            </h2>
          </div>

          {/* Logo Card - Second on Mobile, Last on Desktop */}
          <div className="relative aspect-square lg:aspect-[4/3] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg order-2 lg:order-2">
            {/* Logo and Brand */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-6">
                {/* Logo Icon */}
                <div className="flex justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center shadow-xl border border-gray-200 dark:border-gray-600">
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4L4 20H8L12 12L16 20H20L12 4Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                
                {/* Brand Text */}
                <div className="space-y-1">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                    Aerodev
                  </div>
                  <div className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    by Gading Satrio
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content & Button - Third on Mobile, First on Desktop */}
          <div className="space-y-4 order-3 lg:order-1">
            {/* Title - Hidden on Mobile, Shown on Desktop */}
            <h2 className="hidden lg:block text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              A SPACE FOR<br />
              <span className="text-gray-600 dark:text-gray-400">CREATIVE EXPLORATION</span>
            </h2>
            
            <div className="space-y-4 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Aerodev is my creative space where I document my journey of building, learning, and experimenting with technology.
              </p>
              <p>
                I&apos;m a developer passionate about web development, design, and sharing what I learn along the way. This isn&apos;t about perfection—it&apos;s about progress, curiosity, and honest exploration.
              </p>
              <p>
                Here you&apos;ll find articles, project showcases, experiments, and reflections from my journey. I believe in learning in public and growing together with the community.
              </p>
            </div>

            <div className="pt-2">
              <Link href="/about" className="inline-flex items-center gap-2 text-base font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors group">
                <span className="border-b-2 border-gray-900 dark:border-white pb-0.5 group-hover:border-gray-600 dark:group-hover:border-gray-300 transition-colors">
                  More About Me
                </span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
