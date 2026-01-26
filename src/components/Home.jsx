import { motion } from 'framer-motion'
import { useGameStore } from '../stores/gameStore'
import { useThemeStore } from '../stores/themeStore'
import { useAudioStore } from '../stores/audioStore'

export default function Home() {
  const { setGameState, generateRoomCode } = useGameStore()
  const { isDark, toggleTheme } = useThemeStore()
  const { sfxEnabled, toggleSfx } = useAudioStore()

  const handleCreateGame = () => {
    generateRoomCode()
    setGameState('team_setup')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Background gradient effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-secondary-600/20 pointer-events-none" />

      {/* Logo and Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-6xl md:text-8xl font-display font-extrabold mb-4">
          <span className="neon-text text-primary-500">سين</span>
          <span className="mx-2 text-white">و</span>
          <span className="neon-text-green text-secondary-500">جيم</span>
        </h1>
        <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          لعبة الثقافة والتحدي
        </p>
      </motion.div>

      {/* Main Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        {/* Create Game Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCreateGame}
          className="btn-glow w-full py-5 px-8 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg"
        >
          <span className="text-2xl">🎮</span>
          إنشاء لعبة
        </motion.button>

        {/* Join Game Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-5 px-8 rounded-xl font-bold text-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg ${
            isDark
              ? 'bg-dark-elevated border border-gray-700 text-white hover:bg-dark-card'
              : 'bg-white border border-gray-200 text-gray-800 hover:bg-gray-50'
          }`}
        >
          <span className="text-2xl">🚪</span>
          انضم للعبة
        </motion.button>

        {/* Spectator Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-5 px-8 rounded-xl font-bold text-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg ${
            isDark
              ? 'bg-dark-elevated border border-gray-700 text-white hover:bg-dark-card'
              : 'bg-white border border-gray-200 text-gray-800 hover:bg-gray-50'
          }`}
        >
          <span className="text-2xl">👁️</span>
          متفرج
        </motion.button>
      </motion.div>

      {/* Settings Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="fixed bottom-8 flex items-center gap-4"
      >
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full transition-all duration-300 ${
            isDark ? 'bg-dark-elevated hover:bg-dark-card' : 'bg-white hover:bg-gray-100 shadow-md'
          }`}
        >
          {isDark ? '☀️' : '🌙'}
        </button>

        {/* Sound Toggle */}
        <button
          onClick={toggleSfx}
          className={`p-3 rounded-full transition-all duration-300 ${
            isDark ? 'bg-dark-elevated hover:bg-dark-card' : 'bg-white hover:bg-gray-100 shadow-md'
          }`}
        >
          {sfxEnabled ? '🔊' : '🔇'}
        </button>
      </motion.div>

      {/* Version */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="fixed bottom-2 text-sm text-gray-500"
      >
        v1.0.0
      </motion.p>
    </div>
  )
}
