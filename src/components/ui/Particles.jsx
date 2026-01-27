import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Single particle component
function Particle({ x, y, color, size, duration, delay, type }) {
  const variants = {
    sparkle: {
      initial: { opacity: 0, scale: 0, x, y },
      animate: {
        opacity: [0, 1, 1, 0],
        scale: [0, 1.5, 1, 0],
        x: x + (Math.random() - 0.5) * 100,
        y: y - Math.random() * 150 - 50,
        rotate: Math.random() * 360
      }
    },
    star: {
      initial: { opacity: 0, scale: 0, x, y },
      animate: {
        opacity: [0, 1, 0],
        scale: [0, 1.2, 0],
        x: x + (Math.random() - 0.5) * 80,
        y: y + (Math.random() - 0.5) * 80,
        rotate: [0, 180]
      }
    },
    burst: {
      initial: { opacity: 1, scale: 0, x, y },
      animate: {
        opacity: [1, 1, 0],
        scale: [0, 2, 2.5],
        x,
        y
      }
    },
    float: {
      initial: { opacity: 0, x, y },
      animate: {
        opacity: [0, 1, 1, 0],
        x: x + (Math.random() - 0.5) * 40,
        y: y - 100 - Math.random() * 50,
        scale: [0.5, 1, 0.8, 0]
      }
    }
  }

  return (
    <motion.div
      className="absolute pointer-events-none"
      initial={variants[type].initial}
      animate={variants[type].animate}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
      style={{ color }}
    >
      {type === 'sparkle' && (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,0 15,9 24,12 15,15 12,24 9,15 0,12 9,9" />
        </svg>
      )}
      {type === 'star' && (
        <span style={{ fontSize: size }}>⭐</span>
      )}
      {type === 'burst' && (
        <div
          className="rounded-full"
          style={{
            width: size,
            height: size,
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`
          }}
        />
      )}
      {type === 'float' && (
        <span style={{ fontSize: size }}>✨</span>
      )}
    </motion.div>
  )
}

// Streak fire particles
export function StreakParticles({ streak, x = '50%', y = '50%' }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    if (streak >= 2) {
      const newParticles = []
      const count = Math.min(streak * 3, 15)

      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: Date.now() + i,
          x: 0,
          y: 0,
          color: streak >= 5 ? '#FFD700' : streak >= 3 ? '#FF6B35' : '#00D9FF',
          size: 12 + Math.random() * 8,
          duration: 0.8 + Math.random() * 0.4,
          delay: i * 0.05,
          type: 'sparkle'
        })
      }

      setParticles(newParticles)

      const timer = setTimeout(() => {
        setParticles([])
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [streak])

  if (particles.length === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ left: x, top: y }}>
      <AnimatePresence>
        {particles.map((particle) => (
          <Particle key={particle.id} {...particle} />
        ))}
      </AnimatePresence>
    </div>
  )
}

// Correct answer celebration
export function CorrectParticles({ show, onComplete }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    if (show) {
      const newParticles = []
      const colors = ['#4ade80', '#22c55e', '#10b981', '#00D9FF', '#FFD700']

      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: Date.now() + i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * (window.innerHeight / 2),
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 16 + Math.random() * 12,
          duration: 1 + Math.random() * 0.5,
          delay: i * 0.03,
          type: Math.random() > 0.5 ? 'sparkle' : 'star'
        })
      }

      setParticles(newParticles)

      const timer = setTimeout(() => {
        setParticles([])
        onComplete?.()
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [show, onComplete])

  if (!show || particles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {particles.map((particle) => (
          <Particle key={particle.id} {...particle} />
        ))}
      </AnimatePresence>
    </div>
  )
}

// Power-up activation effect
export function PowerUpParticles({ active, color = '#FFD700' }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    if (active) {
      const newParticles = []

      for (let i = 0; i < 12; i++) {
        newParticles.push({
          id: Date.now() + i,
          x: 0,
          y: 0,
          color,
          size: 20 + Math.random() * 10,
          duration: 0.6 + Math.random() * 0.3,
          delay: i * 0.04,
          type: 'float'
        })
      }

      setParticles(newParticles)

      const timer = setTimeout(() => {
        setParticles([])
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [active, color])

  if (particles.length === 0) return null

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-visible pointer-events-none">
      <AnimatePresence>
        {particles.map((particle) => (
          <Particle key={particle.id} {...particle} />
        ))}
      </AnimatePresence>
    </div>
  )
}

// Burst effect on point scoring
export function ScoreBurstParticles({ show, x = 0, y = 0, color = '#00D9FF' }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    if (show) {
      const newParticles = [
        {
          id: Date.now(),
          x,
          y,
          color,
          size: 60,
          duration: 0.5,
          delay: 0,
          type: 'burst'
        }
      ]

      // Add sparkles around the burst
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2
        newParticles.push({
          id: Date.now() + i + 1,
          x: x + Math.cos(angle) * 30,
          y: y + Math.sin(angle) * 30,
          color,
          size: 8,
          duration: 0.6,
          delay: 0.1,
          type: 'sparkle'
        })
      }

      setParticles(newParticles)

      const timer = setTimeout(() => {
        setParticles([])
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [show, x, y, color])

  if (particles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <AnimatePresence>
        {particles.map((particle) => (
          <Particle key={particle.id} {...particle} />
        ))}
      </AnimatePresence>
    </div>
  )
}

// Background ambient particles
export function AmbientParticles({ count = 20, color = 'rgba(0, 217, 255, 0.3)' }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 2
    }))
    setParticles(newParticles)
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: color
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  )
}

export default Particle
