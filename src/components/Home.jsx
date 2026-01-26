import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '../stores/gameStore'
import { useThemeStore } from '../stores/themeStore'
import { useAudioStore } from '../stores/audioStore'

export default function Home() {
  const { setGameState, generateRoomCode, joinRoomCode, setJoinRoomCode, joinGame } = useGameStore()
  const { isDark, toggleTheme } = useThemeStore()
  const { sfxEnabled, toggleSfx } = useAudioStore()

  const [showJoinModal, setShowJoinModal] = useState(false)
  const [joinCode, setJoinCode] = useState('')

  const handleCreateGame = () => {
    generateRoomCode()
    setGameState('team_setup')
  }

  const handleJoinGame = () => {
    setShowJoinModal(true)
  }

  const handleSubmitJoin = () => {
    if (joinCode.trim().length >= 4) {
      setJoinRoomCode(joinCode.toUpperCase())
      // For now, go to team setup as a second device would
      // In future, this would connect to an existing game
      setGameState('team_setup')
      setShowJoinModal(false)
    }
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
          onClick={handleJoinGame}
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
        v1.1.0
      </motion.p>

      {/* Join Game Modal */}
      <AnimatePresence>
        {showJoinModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowJoinModal(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <div className={`w-full max-w-md rounded-2xl p-6 ${isDark ? 'bg-dark-card' : 'bg-white'}`}>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">انضم للعبة</h2>
                  <button
                    onClick={() => setShowJoinModal(false)}
                    className="text-2xl text-gray-400 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* Room Code Input */}
                <div className="mb-6">
                  <label className="block text-sm text-gray-400 mb-2">أدخل كود الغرفة</label>
                  <input
                    type="text"
                    value={joinCode}
                    onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                    placeholder="مثال: ABC123"
                    maxLength={6}
                    className={`w-full p-4 rounded-xl text-2xl text-center font-mono tracking-widest ${
                      isDark
                        ? 'bg-dark-elevated border border-gray-700 focus:border-primary-500'
                        : 'bg-gray-100 border border-gray-200 focus:border-primary-500'
                    } outline-none transition-colors`}
                    autoFocus
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={() => setShowJoinModal(false)}
                    className={`flex-1 py-3 rounded-xl font-bold ${
                      isDark ? 'bg-dark-elevated hover:bg-dark-bg' : 'bg-gray-200 hover:bg-gray-300'
                    } transition-colors`}
                  >
                    إلغاء
                  </button>
                  <button
                    onClick={handleSubmitJoin}
                    disabled={joinCode.trim().length < 4}
                    className={`flex-1 py-3 rounded-xl font-bold transition-colors ${
                      joinCode.trim().length >= 4
                        ? 'bg-primary-500 hover:bg-primary-600 text-white'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    انضم
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
