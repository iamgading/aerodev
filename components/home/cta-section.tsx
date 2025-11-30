'use client'

import Link from 'next/link'

export default function CTASection() {
  return (
    <section id="cta" className="section relative bg-white dark:bg-black scroll-mt-20 !pb-40 md:!pb-56">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Element */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-gray-900 dark:bg-white rounded-full" />
          </div>

          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
              LET&apos;S BUILD <br />
              <span className="text-gray-600 dark:text-gray-400">SOMETHING AMAZING</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s collaborate and bring your ideas to life. I&apos;m always excited to work on new challenges.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-base font-semibold bg-gray-900 dark:bg-white text-white dark:text-black rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-xl shadow-gray-900/10 dark:shadow-white/10 hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact Me
              </Link>
              <Link 
                href="/projects" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-base font-semibold border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-2xl hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
              >
                View My Work
              </Link>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full" />
              <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full" />
              <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
