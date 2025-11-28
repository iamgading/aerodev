import Link from 'next/link'

export default function CTASection() {
  return (
    <section id="cta" className="section bg-white dark:bg-black scroll-mt-20">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            LET'S BUILD <br />
            <span className="text-gray-600 dark:text-gray-400">SOMETHING AMAZING</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            Have a project in mind? Let's collaborate and bring your ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
