'use client'

import Link from 'next/link'

interface LogoProps {
  showIcon?: boolean
}

export default function Logo({ showIcon = false }: LogoProps) {
  return (
    <Link href="/" className="group flex items-center gap-3">
      {showIcon && (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      )}
      <div className="flex flex-col items-start leading-none">
        <span className="text-2xl font-black tracking-tight text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-400 transition-all duration-300">
          AeroDev
        </span>
        <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400 tracking-widest uppercase group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
          by Gading Satrio
        </span>
      </div>
    </Link>
  )
}
