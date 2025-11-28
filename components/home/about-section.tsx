'use client'

import Link from 'next/link'

export default function AboutSection() {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900 scroll-mt-20">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              A SPACE FOR<br />
              <span className="text-gray-600 dark:text-gray-400">CREATIVE EXPLORATION</span>
            </h2>
            
            <div className="space-y-4 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Aerodev is my creative space where I document my journey of building, learning, and experimenting with technology.
              </p>
              <p>
                I'm a developer passionate about web development, design, and sharing what I learn along the way. This isn't about perfection—it's about progress, curiosity, and honest exploration.
              </p>
              <p>
                Here you'll find articles, project showcases, experiments, and reflections from my journey. I believe in learning in public and growing together with the community.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">50+</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">Projects</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">5+</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">Years</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">100%</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">Satisfaction</div>
              </div>
            </div>

            <div className="pt-4">
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

          <div className="relative aspect-square lg:aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
            {/* Logo and Brand */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-6">
                {/* Logo Icon */}
                <div className="flex justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-xl border border-gray-200 dark:border-gray-700">
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
                
                <div className="text-xs font-mono text-gray-400 dark:text-gray-600 mt-4">Building & Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
