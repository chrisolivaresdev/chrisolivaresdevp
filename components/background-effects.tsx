"use client"

import { useEffect, useState } from "react"

type Particle = {
  left: string
  top: string
  animationDelay: string
  animationDuration: string
  scrollFactor: number
}

export function BackgroundEffects() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    // Generar partículas una sola vez en el cliente
    const generatedParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${3 + Math.random() * 2}s`,
      scrollFactor: 0.1 + Math.random() * 0.1,
    }))
    setParticles(generatedParticles)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Fondo animado con gradiente */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            oklch(0.55 0.15 ${200 + scrollY * 0.1}) 0%, 
            oklch(0.65 0.18 ${185 + scrollY * 0.05}) 25%, 
            transparent 50%)`,
        }}
      />

      {/* Partículas flotantes */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
              transform: `translateY(${scrollY * p.scrollFactor}px)`,
            }}
          />
        ))}
      </div>

      {/* Formas geométricas */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"
        style={{
          transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.1}px) rotate(${scrollY * 0.1}deg)`,
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-accent/5 to-primary/5 rounded-full blur-3xl"
        style={{
          transform: `translate(${-scrollY * 0.15}px, ${-scrollY * 0.08}px) rotate(${-scrollY * 0.05}deg)`,
        }}
      />
    </div>
  )
}