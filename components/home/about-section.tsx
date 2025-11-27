'use client'

import Link from 'next/link'

export default function AboutSection() {
  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Years Experience', value: '3+' },
    { label: 'Technologies', value: '15+' },
  ]

  return (
    <section id="about" className="section bg-gray-50 dark:bg-[#0A0A0A] border-y border-gray-200 dark:border-white/5 scroll-mt-20">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-16">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              WE BUILD <br />
              <span className="gradient-text">WHAT MATTERS</span>
            </h2>
            
            <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Founded by Gading Satrio, AeroDev is more than just a development agency. We are your strategic partner in the digital age.
              </p>
              <p>
                We believe that great software is born at the intersection of engineering and design. Our approach is simple: we listen, we strategize, and we execute with pixel-perfect precision.
              </p>
              <p>
                From startups to established businesses, we've helped companies transform their digital presence and achieve their goals through innovative web solutions.
              </p>
            </div>

            <Link href="/about" className="accent-link text-base group">
              Read Our Story
              <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="relative aspect-square lg:aspect-[4/3] bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-500/5 dark:to-cyan-500/5 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/5">
            {/* Abstract Visual / Image Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-black text-black/5 dark:text-white/5">AERODEV</div>
                <div className="text-sm font-mono text-gray-400 dark:text-gray-600 mt-4">EST. 2024</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl md:text-4xl font-black gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
