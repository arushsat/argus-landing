'use client'

import { useEffect, useRef } from 'react'

export default function PerformanceOptimizer() {
  const frameCountRef = useRef(0)
  const lastTimeRef = useRef(0)
  const fpsRef = useRef(0)

  useEffect(() => {
    let animationId: number

    const measureFPS = (currentTime: number) => {
      frameCountRef.current++
      
      if (currentTime - lastTimeRef.current >= 1000) {
        fpsRef.current = frameCountRef.current
        frameCountRef.current = 0
        lastTimeRef.current = currentTime
        
        // Log FPS for debugging (remove in production)
        if (process.env.NODE_ENV === 'development') {
          console.log(`FPS: ${fpsRef.current}`)
        }
      }
      
      animationId = requestAnimationFrame(measureFPS)
    }

    animationId = requestAnimationFrame(measureFPS)

    // Performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'measure') {
          // Monitor animation performance
          if (entry.duration > 16.67) { // 60fps threshold
            console.warn('Animation frame took too long:', entry.duration, 'ms')
          }
        }
      }
    })

    observer.observe({ entryTypes: ['measure'] })

    // Throttle scroll events for better performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Handle scroll-based animations here
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Optimize animations based on device capability
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4

    if (prefersReducedMotion || isLowEndDevice) {
      // Reduce animation complexity for accessibility and performance
      document.documentElement.style.setProperty('--animation-duration', '0.3s')
      document.documentElement.style.setProperty('--particle-count', '50')
      document.documentElement.style.setProperty('--neural-node-count', '10')
    }

    return () => {
      cancelAnimationFrame(animationId)
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null // This component doesn't render anything
}
