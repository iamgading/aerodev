import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import CTASection from '@/components/home/cta-section'

import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'About - AeroDev',
  description: 'Learn more about AeroDev and our mission to elevate digital experiences.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-24 md:py-32 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 relative">
        <div className="container-wide text-center animate-fade-in relative">
          <div className="absolute left-0 top-0 hidden md:block">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
          <div className="md:hidden flex justify-start mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            ABOUT <span className="text-gray-500">AERODEV</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I am a digital developer dedicated to building fast, modern, and scalable web solutions for businesses that want to stand out.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Logo - First Column */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl animate-slide-up order-1 md:order-1">
              <div className="absolute inset-0 bg-gray-900 dark:bg-black" />
              {/* Abstract Pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                    <svg className="w-12 h-12 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4L4 20H8L12 12L16 20H20L12 4Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Aerodev</h3>
                  <p className="text-gray-400 text-sm uppercase tracking-wide">by Gading Satrio</p>
                </div>
              </div>
            </div>

            {/* Text Content - Second Column */}
            <div className="space-y-8 animate-slide-up order-2 md:order-2" style={{ animationDelay: '200ms' }}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                The Journey
              </h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I&apos;m a passionate Full Stack Developer based in Indonesia. My journey in tech started with a curiosity about how things work on the web, which quickly turned into a career building digital products.
                </p>
                <p>
                  I specialize in building modern web applications using the latest technologies. I&apos;m always learning and exploring new tools to deliver the best possible solutions for my clients.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new coffee shops, reading tech blogs, or working on personal projects. I believe in the power of technology to solve real-world problems and I&apos;m excited to be part of this ever-evolving industry.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="p-6 bg-white dark:bg-black rounded-2xl border border-gray-200 dark:border-gray-800">
                  <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">2+</div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Projects Launched</div>
                </div>
                <div className="p-6 bg-white dark:bg-black rounded-2xl border border-gray-200 dark:border-gray-800">
                  <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">∞</div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Learning Mode</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section bg-white dark:bg-black">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Meet the Developer</h2>
              <p className="text-gray-600 dark:text-gray-400">
                The mind behind Aerodev
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-800 animate-slide-up">
              <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                {/* Founder Image Placeholder */}
                <div className="w-40 h-40 md:w-56 md:h-56 relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl flex-shrink-0 bg-gray-200 dark:bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    👨‍💻
                  </div>
                  {/* <Image src={siteConfig.founder.image} alt={siteConfig.founder.name} fill className="object-cover" /> */}
                </div>

                <div className="text-center md:text-left space-y-6 flex-1">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{siteConfig.founder.name}</h3>
                    <p className="text-lg text-gray-500 font-medium mt-1">
                      {siteConfig.founder.role}
                    </p>
                  </div>

                  <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      {siteConfig.founder.bio}
                    </p>
                    <p>
                      I&apos;m still learning, still growing, and still figuring things out—and that&apos;s exactly what makes this journey exciting. Aerodev is where I document this process, share what works (and what doesn&apos;t), and connect with others who are on a similar path.
                    </p>
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
                    <SocialButton href={siteConfig.links.linkedin} icon="linkedin" />
                    <SocialButton href={siteConfig.links.github} icon="github" />
                    <SocialButton href={siteConfig.links.instagram} icon="instagram" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container-wide text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-12 tracking-tight">My Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <TechBadge name="Next.js" icon="nextjs" />
            <TechBadge name="React" icon="react" />
            <TechBadge name="TypeScript" icon="typescript" />
            <TechBadge name="Tailwind CSS" icon="tailwind" />
            <TechBadge name="Node.js" icon="nodejs" />
            <TechBadge name="Supabase" icon="supabase" />
            <TechBadge name="PostgreSQL" icon="postgresql" />
            <TechBadge name="Vercel" icon="vercel" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}

function SocialButton({ href, icon }: { href: string, icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    linkedin: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>,
    github: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>,
    instagram: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  }

  return (
    <Link 
      href={href} 
      target="_blank" 
      className="p-3 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        {icons[icon]}
      </svg>
    </Link>
  )
}

function TechBadge({ name, icon }: { name: string, icon: string }) {
  const logos: Record<string, JSX.Element> = {
    'nextjs': (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.0968-.0634c.8685-.5536 1.6827-1.2453 2.4007-2.0439 1.2513-1.3913 2.1226-3.0593 2.5768-4.9313.0962-.659.108-.8537.108-1.7474s-.012-1.0884-.108-1.7476c-.652-4.506-3.8591-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"/>
      </svg>
    ),
    'react': (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
      </svg>
    ),
    'typescript': (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
      </svg>
    ),
    'tailwind': (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
      </svg>
    ),
    'nodejs': (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
      </svg>
    ),
    'supabase': (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z"/>
      </svg>
    ),
    'postgresql': (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-.7122-.1795a.5686.5686 0 0 0-.2664.255c-.2354.5035-.7122 1.0908-1.4158 1.7632-.5825.5554-1.2862.9478-2.0912 1.2067-.8049.2588-1.5967.3557-2.3884.3557-.7917 0-1.5835-.0969-2.3884-.3557-.8049-.2588-1.5086-.6513-2.0912-1.2067-.7036-.6724-1.1804-1.2597-1.4158-1.7632a.5686.5686 0 0 0-.2664-.255c-.2354-.1623-.5732-.0837-.7122.1795a.5269.5269 0 0 0-.0563.1191c-.1795.6513-.1795 1.3791 0 2.1069.1795.7278.5554 1.4158 1.0908 2.0912.5354.6754 1.2067 1.2067 2.0108 1.5835.8041.3768 1.6961.5554 2.6764.5554s1.8723-.1786 2.6764-.5554c.8041-.3768 1.4754-.9081 2.0108-1.5835.5354-.6754.9113-1.3634 1.0908-2.0912.1795-.7278.1795-1.4556 0-2.1069z"/>
      </svg>
    ),
    'vercel': (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M24 22.525H0l12-21.05 12 21.05z"/>
      </svg>
    )
  }

  return (
    <div className="flex flex-col items-center gap-3 group cursor-default">
      <div className="w-20 h-20 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white group-hover:border-gray-400 dark:group-hover:border-gray-600 transition-all duration-300 shadow-sm hover:shadow-md">
        {logos[icon]}
      </div>
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{name}</span>
    </div>
  )
}
