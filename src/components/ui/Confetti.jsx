import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CONFETTI_COLORS = [
  '#FF6B6B', // Red
  '#4ECDC4', // Teal
  '#FFD700', // Gold
  '#00D9FF', // Cyan
  '#00C853', // Green
  '#FF69B4', // Pink
  '#9B59B6', // Purple
]

function ConfettiPiece({ color, delay, startX }) {
  const randomRotation = Math.random() * 360
  const randomSize = 8 + Math.random() * 8
  const randomDuration = 2 + Math.random() * 2

  return (
    <motion.div
      initial={{
        x: startX,
        y: -20,
        rotate: 0,
        opacity: 1
      }}
      animate={{
        y: window.innerHeight + 50,
        rotate: randomRotation + 720,
        opacity: [1, 1, 0]
      }}
      transition={{
        duration: randomDuration,
        delay: delay,
        ease: 'linear'
      }}
      style={{
        position: 'fixed',
        top: 0,
        width: randomSize,
        height: randomSize * 0.6,
        backgroundColor: color,
        borderRadius: 2,
        zIndex: 100,
        pointerEvents: 'none'
      }}
    />
  )
}

export default function Confetti({ count = 100 }) {
  const [pieces, setPieces] = useState([])

  useEffect(() => {
    const newPieces = []
    for (let i = 0; i < count; i++) {
      newPieces.push({
        id: i,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        delay: Math.random() * 2,
        startX: Math.random() * window.innerWidth
      })
    }
    setPieces(newPieces)
  }, [count])

  return (
    <div className="confetti-container">
      {pieces.map((piece) => (
        <ConfettiPiece
          key={piece.id}
          color={piece.color}
          delay={piece.delay}
          startX={piece.startX}
        />
      ))}
    </div>
  )
}
