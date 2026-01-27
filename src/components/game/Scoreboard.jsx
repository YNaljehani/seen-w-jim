import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '../../stores/gameStore'
import { useThemeStore } from '../../stores/themeStore'

// Floating score component
function FloatingScore({ score, show }) {
  if (!show || score === 0) return null

  const isPositive = score > 0

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [0, -20, -40, -60],
            scale: [0.5, 1.3, 1.1, 0.8]
          }}
          transition={{
            duration: 1.2,
            times: [0, 0.15, 0.5, 1],
            ease: "easeOut"
          }}
          className="absolute -top-2 left-1/2 -translate-x-1/2 pointer-events-none z-50"
        >
          <span className={`text-3xl font-bold font-mono whitespace-nowrap ${
            isPositive ? 'text-green-400' : 'text-red-400'
          }`}
          style={{
            textShadow: isPositive
              ? '0 0 15px rgba(74, 222, 128, 0.8), 0 0 30px rgba(74, 222, 128, 0.5)'
              : '0 0 15px rgba(248, 113, 113, 0.8), 0 0 30px rgba(248, 113, 113, 0.5)'
          }}>
            {isPositive ? '+' : ''}{score}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Scoreboard() {
  const { teamA, teamB, currentTeam, isStealMode } = useGameStore()
  const { isDark } = useThemeStore()

  // Track previous scores to show floating animation
  const prevScoreA = useRef(teamA.score)
  const prevScoreB = useRef(teamB.score)
  const [floatingA, setFloatingA] = useState({ show: false, score: 0 })
  const [floatingB, setFloatingB] = useState({ show: false, score: 0 })

  useEffect(() => {
    if (teamA.score !== prevScoreA.current) {
      const diff = teamA.score - prevScoreA.current
      setFloatingA({ show: true, score: diff })
      prevScoreA.current = teamA.score
      setTimeout(() => setFloatingA({ show: false, score: 0 }), 1300)
    }
  }, [teamA.score])

  useEffect(() => {
    if (teamB.score !== prevScoreB.current) {
      const diff = teamB.score - prevScoreB.current
      setFloatingB({ show: true, score: diff })
      prevScoreB.current = teamB.score
      setTimeout(() => setFloatingB({ show: false, score: 0 }), 1300)
    }
  }, [teamB.score])

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full flex items-center justify-between p-4 rounded-xl ${
        isDark ? 'bg-dark-card' : 'bg-white shadow-lg'
      }`}
    >
      {/* Team A */}
      <div className={`flex-1 text-center transition-all duration-300 relative ${
        currentTeam === 'A' && !isStealMode ? 'scale-105' : 'opacity-70'
      }`}>
        <div className="flex items-center justify-center gap-2 mb-1">
          <motion.span
            animate={currentTeam === 'A' && !isStealMode ? {
              scale: [1, 1.2, 1],
              boxShadow: ['0 0 0 rgba(0, 217, 255, 0)', '0 0 15px rgba(0, 217, 255, 0.8)', '0 0 0 rgba(0, 217, 255, 0)']
            } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-3 h-3 rounded-full bg-teamA"
          />
          <span className="font-bold text-teamA truncate max-w-[100px]">{teamA.name}</span>
        </div>
        <div className="relative inline-block">
          <FloatingScore score={floatingA.score} show={floatingA.show} />
          <motion.div
            key={teamA.score}
            initial={{ scale: 1.5, color: '#4ade80' }}
            animate={{ scale: 1, color: isDark ? '#ffffff' : '#1a1a2e' }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="text-4xl font-mono font-bold score-number"
          >
            {teamA.score}
          </motion.div>
        </div>
        {/* Power-ups remaining */}
        <div className="flex justify-center gap-1 mt-2 text-lg">
          {!teamA.powerUps.pit.used && (
            <motion.span
              whileHover={{ scale: 1.2, rotate: 10 }}
              title="الحفرة"
            >🕳️</motion.span>
          )}
          {!teamA.powerUps.callFriend.used && (
            <motion.span
              whileHover={{ scale: 1.2, rotate: -10 }}
              title="اتصال بصديق"
            >📞</motion.span>
          )}
          {!teamA.powerUps.doubleAnswer.used && (
            <motion.span
              whileHover={{ scale: 1.2, rotate: 10 }}
              title="جاوب جوابين"
            >✌️</motion.span>
          )}
          {!teamA.powerUps.rest.used && (
            <motion.span
              whileHover={{ scale: 1.2, rotate: -10 }}
              title="استريح"
            >😴</motion.span>
          )}
        </div>
      </div>

      {/* VS / Steal indicator */}
      <div className="px-4">
        {isStealMode ? (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 500 }}
            className="px-3 py-1 bg-accent-500 text-black rounded-full font-bold text-sm"
          >
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              سرقة!
            </motion.span>
          </motion.div>
        ) : (
          <span className={`text-2xl font-bold ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            VS
          </span>
        )}
      </div>

      {/* Team B */}
      <div className={`flex-1 text-center transition-all duration-300 relative ${
        currentTeam === 'B' && !isStealMode ? 'scale-105' : currentTeam === 'B' && isStealMode ? 'scale-105' : 'opacity-70'
      }`}>
        <div className="flex items-center justify-center gap-2 mb-1">
          <motion.span
            animate={currentTeam === 'B' ? {
              scale: [1, 1.2, 1],
              boxShadow: ['0 0 0 rgba(0, 200, 83, 0)', '0 0 15px rgba(0, 200, 83, 0.8)', '0 0 0 rgba(0, 200, 83, 0)']
            } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-3 h-3 rounded-full bg-teamB"
          />
          <span className="font-bold text-teamB truncate max-w-[100px]">{teamB.name}</span>
        </div>
        <div className="relative inline-block">
          <FloatingScore score={floatingB.score} show={floatingB.show} />
          <motion.div
            key={teamB.score}
            initial={{ scale: 1.5, color: '#4ade80' }}
            animate={{ scale: 1, color: isDark ? '#ffffff' : '#1a1a2e' }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="text-4xl font-mono font-bold score-number"
          >
            {teamB.score}
          </motion.div>
        </div>
        {/* Power-ups remaining */}
        <div className="flex justify-center gap-1 mt-2 text-lg">
          {!teamB.powerUps.pit.used && (
            <motion.span
              whileHover={{ scale: 1.2, rotate: 10 }}
              title="الحفرة"
            >🕳️</motion.span>
          )}
          {!teamB.powerUps.callFriend.used && (
            <motion.span
              whileHover={{ scale: 1.2, rotate: -10 }}
              title="اتصال بصديق"
            >📞</motion.span>
          )}
          {!teamB.powerUps.doubleAnswer.used && (
            <motion.span
              whileHover={{ scale: 1.2, rotate: 10 }}
              title="جاوب جوابين"
            >✌️</motion.span>
          )}
          {!teamB.powerUps.rest.used && (
            <motion.span
              whileHover={{ scale: 1.2, rotate: -10 }}
              title="استريح"
            >😴</motion.span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
