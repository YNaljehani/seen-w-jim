import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useGameStore } from '../../stores/gameStore'
import { useThemeStore } from '../../stores/themeStore'
import Button from '../ui/Button'
import Confetti from '../ui/Confetti'

export default function ResultsScreen() {
  const { teamA, teamB, resetGame, newGame } = useGameStore()
  const { isDark } = useThemeStore()
  const [showConfetti, setShowConfetti] = useState(true)

  const winner = teamA.score > teamB.score ? 'A' : teamB.score > teamA.score ? 'B' : 'tie'
  const winningTeam = winner === 'A' ? teamA : winner === 'B' ? teamB : null
  const losingTeam = winner === 'A' ? teamB : winner === 'B' ? teamA : null

  useEffect(() => {
    // Stop confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
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
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 1,
                repeat: 2,
                repeatDelay: 1
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
            <motion.div className="text-8xl mb-4">🤝</motion.div>
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
        className={`w-full max-w-md p-6 rounded-2xl mb-8 ${
          isDark ? 'bg-dark-card' : 'bg-white shadow-xl'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Team A */}
          <div className={`text-center ${winner === 'A' ? '' : 'opacity-60'}`}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-full bg-teamA" />
              <span className="font-bold text-teamA">{teamA.name}</span>
            </div>
            <div className="text-4xl font-mono font-bold score-number">
              {teamA.score}
            </div>
            {winner === 'A' && <span className="text-yellow-500">👑</span>}
          </div>

          {/* Divider */}
          <div className="text-2xl text-gray-600">-</div>

          {/* Team B */}
          <div className={`text-center ${winner === 'B' ? '' : 'opacity-60'}`}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-full bg-teamB" />
              <span className="font-bold text-teamB">{teamB.name}</span>
            </div>
            <div className="text-4xl font-mono font-bold score-number">
              {teamB.score}
            </div>
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

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <Button
          variant="primary"
          size="xl"
          className="w-full"
          onClick={newGame}
        >
          <span>🔄</span>
          لعبة جديدة
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="w-full"
          onClick={resetGame}
        >
          <span>🏠</span>
          الرئيسية
        </Button>

        <Button
          variant="ghost"
          size="lg"
          className="w-full border border-gray-700"
          onClick={() => {
            // TODO: Share functionality
            const text = `🏆 نتيجة سين وجيم!\n${teamA.name}: ${teamA.score}\n${teamB.name}: ${teamB.score}\n${winner !== 'tie' ? `الفائز: ${winningTeam?.name}` : 'تعادل!'}`
            if (navigator.share) {
              navigator.share({ text })
            } else {
              navigator.clipboard.writeText(text)
            }
          }}
        >
          <span>📸</span>
          مشاركة النتيجة
        </Button>
      </motion.div>
    </div>
  )
}
