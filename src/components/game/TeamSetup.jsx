import { useState } from 'react'
import { motion } from 'framer-motion'
import { useGameStore } from '../../stores/gameStore'
import { useThemeStore } from '../../stores/themeStore'
import Button from '../ui/Button'

export default function TeamSetup() {
  const { teamA, teamB, setTeamName, startCategorySelection, roomCode, setGameState } = useGameStore()
  const { isDark } = useThemeStore()
  const [teamAName, setTeamAName] = useState(teamA.name)
  const [teamBName, setTeamBName] = useState(teamB.name)

  const handleStart = () => {
    setTeamName('A', teamAName || 'الفريق الأول')
    setTeamName('B', teamBName || 'الفريق الثاني')
    startCategorySelection()
  }

  const copyRoomCode = () => {
    navigator.clipboard.writeText(roomCode)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => setGameState('home')}
        className="fixed top-6 right-6 text-xl p-2 hover:bg-dark-elevated rounded-lg transition-colors"
      >
        ← رجوع
      </motion.button>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
      >
        إعداد الفرق
      </motion.h1>

      {/* Room Code */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className={`mb-8 p-4 rounded-xl text-center ${
          isDark ? 'bg-dark-card' : 'bg-white shadow-lg'
        }`}
      >
        <p className="text-sm text-gray-400 mb-2">كود الغرفة</p>
        <div className="flex items-center justify-center gap-3">
          <span className="text-3xl font-mono font-bold tracking-widest text-primary-500">
            {roomCode}
          </span>
          <button
            onClick={copyRoomCode}
            className="p-2 hover:bg-dark-elevated rounded-lg transition-colors"
            title="نسخ الكود"
          >
            📋
          </button>
        </div>
      </motion.div>

      {/* Team Inputs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-md space-y-6"
      >
        {/* Team A */}
        <div className={`p-6 rounded-xl ${isDark ? 'bg-dark-card' : 'bg-white shadow-lg'}`}>
          <label className="flex items-center gap-2 text-teamA font-bold mb-3">
            <span className="w-4 h-4 rounded-full bg-teamA" />
            الفريق الأول
          </label>
          <input
            type="text"
            value={teamAName}
            onChange={(e) => setTeamAName(e.target.value)}
            placeholder="أدخل اسم الفريق..."
            className={`w-full p-4 rounded-lg text-lg ${
              isDark
                ? 'bg-dark-elevated border border-gray-700 focus:border-teamA'
                : 'bg-gray-100 border border-gray-200 focus:border-teamA'
            } outline-none transition-colors`}
          />
        </div>

        {/* VS Divider */}
        <div className="flex items-center justify-center">
          <div className={`px-4 py-2 rounded-full font-bold text-lg ${
            isDark ? 'bg-dark-elevated' : 'bg-gray-200'
          }`}>
            VS
          </div>
        </div>

        {/* Team B */}
        <div className={`p-6 rounded-xl ${isDark ? 'bg-dark-card' : 'bg-white shadow-lg'}`}>
          <label className="flex items-center gap-2 text-teamB font-bold mb-3">
            <span className="w-4 h-4 rounded-full bg-teamB" />
            الفريق الثاني
          </label>
          <input
            type="text"
            value={teamBName}
            onChange={(e) => setTeamBName(e.target.value)}
            placeholder="أدخل اسم الفريق..."
            className={`w-full p-4 rounded-lg text-lg ${
              isDark
                ? 'bg-dark-elevated border border-gray-700 focus:border-teamB'
                : 'bg-gray-100 border border-gray-200 focus:border-teamB'
            } outline-none transition-colors`}
          />
        </div>
      </motion.div>

      {/* Start Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 w-full max-w-md"
      >
        <Button
          variant="primary"
          size="xl"
          className="w-full"
          onClick={handleStart}
        >
          <span>🚀</span>
          ابدأ اختيار الفئات
        </Button>
      </motion.div>
    </div>
  )
}
