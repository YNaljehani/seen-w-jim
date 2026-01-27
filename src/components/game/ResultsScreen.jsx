import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '../../stores/gameStore'
import { useThemeStore } from '../../stores/themeStore'
import { useSoundEffect } from '../../lib/sounds'
import { useHaptic } from '../../hooks/useHaptic'
import Button from '../ui/Button'
import Confetti from '../ui/Confetti'
import { AmbientParticles } from '../ui/Particles'

// Stat card component
function StatCard({ icon, label, valueA, valueB, winner }) {
  const { isDark } = useThemeStore()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-xl ${isDark ? 'bg-dark-elevated' : 'bg-gray-100'}`}
    >
      <div className="text-center mb-2">
        <span className="text-2xl">{icon}</span>
        <p className="text-sm text-gray-400">{label}</p>
      </div>
      <div className="flex items-center justify-between">
        <motion.div
          className={`text-center flex-1 ${winner === 'A' ? 'text-teamA' : ''}`}
          animate={winner === 'A' ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-2xl font-bold font-mono">{valueA}</span>
          {winner === 'A' && <span className="text-yellow-500 mr-1">👑</span>}
        </motion.div>
        <span className="text-gray-600 px-2">-</span>
        <motion.div
          className={`text-center flex-1 ${winner === 'B' ? 'text-teamB' : ''}`}
          animate={winner === 'B' ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-2xl font-bold font-mono">{valueB}</span>
          {winner === 'B' && <span className="text-yellow-500 mr-1">👑</span>}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function ResultsScreen() {
  const { teamA, teamB, resetGame, newGame } = useGameStore()
  const { isDark } = useThemeStore()
  const { playWin, playClick } = useSoundEffect()
  const { success, mediumTap } = useHaptic()
  const [showConfetti, setShowConfetti] = useState(true)
  const [showStats, setShowStats] = useState(false)

  const winner = teamA.score > teamB.score ? 'A' : teamB.score > teamA.score ? 'B' : 'tie'
  const winningTeam = winner === 'A' ? teamA : winner === 'B' ? teamB : null
  const losingTeam = winner === 'A' ? teamB : winner === 'B' ? teamA : null

  // Determine stat winners
  const streakWinner = teamA.maxStreak > teamB.maxStreak ? 'A' : teamB.maxStreak > teamA.maxStreak ? 'B' : null
  const correctWinner = teamA.correctAnswers > teamB.correctAnswers ? 'A' : teamB.correctAnswers > teamA.correctAnswers ? 'B' : null

  // Play win sound on mount
  useEffect(() => {
    if (winner !== 'tie') {
      playWin()
      success()
    }
    // Show stats after a delay
    const statsTimer = setTimeout(() => setShowStats(true), 1500)
    return () => clearTimeout(statsTimer)
  }, [])

  useEffect(() => {
    // Stop confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      {/* Background particles */}
      <AmbientParticles count={25} color={winner === 'A' ? 'rgba(0, 217, 255, 0.3)' : winner === 'B' ? 'rgba(0, 200, 83, 0.3)' : 'rgba(255, 193, 7, 0.3)'} />

      {/* Confetti */}
      {showConfetti && winner !== 'tie' && <Confetti />}

      {/* Trophy and Winner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="text-center mb-8"
      >
        {winner !== 'tie' ? (
          <>
            <motion.div
              animate={{
                rotate: [0, -10, 10, -10, 10, 0],
                scale: [1, 1.1, 1],
                y: [0, -10, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: 2,
                repeatDelay: 0.5
              }}
              className="text-8xl mb-4"
            >
              🏆
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl text-gray-400 mb-2"
            >
              الفائز
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`text-5xl font-bold mb-4 ${
                winner === 'A' ? 'text-teamA' : 'text-teamB'
              }`}
            >
              {winningTeam?.name}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="text-6xl font-mono font-bold text-primary-500 score-number"
            >
              {winningTeam?.score}
              <span className="text-2xl text-gray-400 mr-2">نقطة</span>
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-8xl mb-4"
            >
              🤝
            </motion.div>
            <motion.h1 className="text-4xl font-bold mb-2">تعادل!</motion.h1>
            <motion.div className="text-4xl font-mono font-bold text-primary-500 score-number">
              {teamA.score} - {teamB.score}
            </motion.div>
          </>
        )}
      </motion.div>

      {/* Score Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className={`w-full max-w-md p-6 rounded-2xl mb-6 ${
          isDark ? 'bg-dark-card' : 'bg-white shadow-xl'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Team A */}
          <div className={`text-center ${winner === 'A' ? '' : 'opacity-60'}`}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <motion.span
                animate={winner === 'A' ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-3 h-3 rounded-full bg-teamA"
              />
              <span className="font-bold text-teamA">{teamA.name}</span>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: 'spring' }}
              className="text-4xl font-mono font-bold score-number"
            >
              {teamA.score}
            </motion.div>
            {winner === 'A' && <span className="text-yellow-500">👑</span>}
          </div>

          {/* Divider */}
          <div className="text-2xl text-gray-600">-</div>

          {/* Team B */}
          <div className={`text-center ${winner === 'B' ? '' : 'opacity-60'}`}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <motion.span
                animate={winner === 'B' ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-3 h-3 rounded-full bg-teamB"
              />
              <span className="font-bold text-teamB">{teamB.name}</span>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: 'spring' }}
              className="text-4xl font-mono font-bold score-number"
            >
              {teamB.score}
            </motion.div>
            {winner === 'B' && <span className="text-yellow-500">👑</span>}
          </div>
        </div>

        {/* Score Difference */}
        {winner !== 'tie' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center text-gray-400 mt-4"
          >
            فارق النقاط: <span className="text-primary-500 font-bold">{Math.abs(teamA.score - teamB.score)}</span>
          </motion.p>
        )}
      </motion.div>

      {/* Game Stats */}
      <AnimatePresence>
        {showStats && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full max-w-md mb-6"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-400 mb-4"
            >
              إحصائيات المباراة
            </motion.h3>
            <div className="grid grid-cols-2 gap-3">
              <StatCard
                icon="🔥"
                label="أفضل سلسلة"
                valueA={teamA.maxStreak}
                valueB={teamB.maxStreak}
                winner={streakWinner}
              />
              <StatCard
                icon="✅"
                label="إجابات صحيحة"
                valueA={teamA.correctAnswers}
                valueB={teamB.correctAnswers}
                winner={correctWinner}
              />
              <StatCard
                icon="❌"
                label="إجابات خاطئة"
                valueA={teamA.wrongAnswers}
                valueB={teamB.wrongAnswers}
                winner={teamA.wrongAnswers < teamB.wrongAnswers ? 'A' : teamB.wrongAnswers < teamA.wrongAnswers ? 'B' : null}
              />
              <StatCard
                icon="📊"
                label="نسبة الصحة"
                valueA={teamA.correctAnswers + teamA.wrongAnswers > 0
                  ? Math.round((teamA.correctAnswers / (teamA.correctAnswers + teamA.wrongAnswers)) * 100) + '%'
                  : '0%'}
                valueB={teamB.correctAnswers + teamB.wrongAnswers > 0
                  ? Math.round((teamB.correctAnswers / (teamB.correctAnswers + teamB.wrongAnswers)) * 100) + '%'
                  : '0%'}
                winner={null}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            variant="primary"
            size="xl"
            className="w-full"
            onClick={() => {
              playClick()
              mediumTap()
              newGame()
            }}
          >
            <span>🔄</span>
            لعبة جديدة
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            variant="outline"
            size="lg"
            className="w-full"
            onClick={() => {
              playClick()
              mediumTap()
              resetGame()
            }}
          >
            <span>🏠</span>
            الرئيسية
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            variant="ghost"
            size="lg"
            className="w-full border border-gray-700"
            onClick={() => {
              const statsText = `
🔥 أفضل سلسلة: ${teamA.name} (${teamA.maxStreak}) - ${teamB.name} (${teamB.maxStreak})
✅ إجابات صحيحة: ${teamA.name} (${teamA.correctAnswers}) - ${teamB.name} (${teamB.correctAnswers})`

              const text = `🏆 نتيجة سين وجيم!
${teamA.name}: ${teamA.score}
${teamB.name}: ${teamB.score}
${winner !== 'tie' ? `الفائز: ${winningTeam?.name}` : 'تعادل!'}
${statsText}`
              if (navigator.share) {
                navigator.share({ text })
              } else {
                navigator.clipboard.writeText(text)
              }
              playClick()
              mediumTap()
            }}
          >
            <span>📸</span>
            مشاركة النتيجة
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
