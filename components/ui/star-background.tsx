'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let stars: { x: number; y: number; radius: number; alpha: number; speed: number }[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 3000) // Density
      stars = []
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          alpha: Math.random(),
          speed: Math.random() * 0.05 + 0.01
        })
      }
    }

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Set color based on theme (though stars are usually white/gray)
      // In light mode, we might want them to be dark gray or barely visible
      // In dark mode, white/gray
      const isDark = document.documentElement.classList.contains('dark')
      ctx.fillStyle = isDark ? '#ffffff' : '#111111'

      stars.forEach(star => {
        ctx.globalAlpha = star.alpha
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()

        // Update star for next frame (twinkle/move)
        star.alpha += star.speed * (Math.random() > 0.5 ? 1 : -1)
        
        // Clamp alpha
        if (star.alpha < 0.1) star.alpha = 0.1
        if (star.alpha > 0.8) star.alpha = 0.8
      })

      animationFrameId = requestAnimationFrame(drawStars)
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    drawStars()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-30 dark:opacity-50"
    />
  )
}
