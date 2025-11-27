import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

export const metadata = {
  title: 'About - AeroDev',
  description: 'Learn more about AeroDev and our mission to elevate digital experiences.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gray-50 dark:bg-slate-900/50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              About <span className="gradient-text">AeroDev</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We are a digital development studio dedicated to building fast, modern, and scalable web solutions for businesses that want to stand out.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                At AeroDev, we believe that every business deserves a digital presence that not only looks good but performs exceptionally well. Our mission is to bridge the gap between complex technology and user-friendly experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We don't just write code; we craft digital solutions that solve real business problems and drive growth. Whether you're a startup looking for an MVP or an established business needing a revamp, we're here to help you soar.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <div className="text-4xl font-bold text-primary-500 mb-2">100%</div>
                  <div className="text-sm text-gray-500">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-500 mb-2">Fast</div>
                  <div className="text-sm text-gray-500">Delivery Time</div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent opacity-20" />
              {/* Placeholder for office/team image */}
              <div className="absolute inset-0 bg-gray-200 dark:bg-slate-800 flex items-center justify-center">
                <span className="text-gray-400">Team/Office Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section bg-gray-50 dark:bg-slate-900/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Meet the Founder</h2>
              <p className="text-gray-600 dark:text-gray-400">
                The mind behind AeroDev
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700 animate-slide-up">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Founder Image */}
                <div className="w-32 h-32 md:w-48 md:h-48 relative rounded-full overflow-hidden border-4 border-primary-100 dark:border-primary-900/50 flex-shrink-0">
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  {/* Uncomment when you have an image */}
                  {/* <Image src={siteConfig.founder.image} alt={siteConfig.founder.name} fill className="object-cover" /> */}
                </div>

                <div className="text-center md:text-left space-y-4 flex-1">
                  <div>
                    <h3 className="text-2xl font-bold">{siteConfig.founder.name}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {siteConfig.founder.role}
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {siteConfig.founder.bio}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Currently an IT student with a passion for combining technical expertise with business strategy. I started AeroDev to help businesses leverage modern technology to achieve their goals.
                  </p>

                  <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                    <Link href={siteConfig.links.linkedin} target="_blank" className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-primary-500 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </Link>
                    <Link href={siteConfig.links.github} target="_blank" className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-primary-500 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </Link>
                    <Link href={siteConfig.links.instagram} target="_blank" className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-primary-500 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section">
        <div className="container-custom text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-12">Our Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Tech Icons - Using text for now, can be replaced with SVGs */}
            <TechBadge name="Next.js" />
            <TechBadge name="React" />
            <TechBadge name="TypeScript" />
            <TechBadge name="Tailwind CSS" />
            <TechBadge name="Node.js" />
            <TechBadge name="Supabase" />
            <TechBadge name="PostgreSQL" />
            <TechBadge name="Vercel" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work with us?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's turn your ideas into reality. Contact us today for a free consultation.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

function TechBadge({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center gap-2 group cursor-default">
      <div className="w-16 h-16 rounded-xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-2xl font-bold text-gray-400 group-hover:text-primary-500 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-all duration-300">
        {name[0]}
      </div>
      <span className="text-sm font-medium text-gray-500 group-hover:text-primary-500 transition-colors">{name}</span>
    </div>
  )
}
