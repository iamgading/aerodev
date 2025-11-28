'use client'

import Link from 'next/link'

interface LogoProps {
  showIcon?: boolean
}

export default function Logo({ showIcon = true }: LogoProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <Link href="/" onClick={handleClick} className="group flex items-center gap-2.5">
      {/* Icon */}
      <div className="relative w-8 h-8 flex items-center justify-center bg-gray-900 dark:bg-white rounded-lg group-hover:scale-105 transition-transform duration-300">
        <svg className="w-5 h-5 text-white dark:text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L4 20H8L12 12L16 20H20L12 4Z" fill="currentColor"/>
        </svg>
      </div>
      
      {/* Text */}
      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white font-manrope">
          Aerodev
        </span>
        <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400 tracking-wide uppercase">
          by Gading Satrio
        </span>
      </div>
    </Link>
  )
}
