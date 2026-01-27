import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '../stores/gameStore'
import { useThemeStore } from '../stores/themeStore'
import { useAudioStore } from '../stores/audioStore'

export default function Home() {
  const setGameState = useGameStore((state) => state.setGameState)
  const generateRoomCode = useGameStore((state) => state.generateRoomCode)
  const isLoading = useGameStore((state) => state.isLoading)
  const isUsingSupabase = useGameStore((state) => state.isUsingSupabase)
  const availableCategories = useGameStore((state) => state.availableCategories)
  const generateMoreQuestions = useGameStore((state) => state.generateMoreQuestions)
  const isDark = useThemeStore((state) => state.isDark)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)
  const sfxEnabled = useAudioStore((state) => state.sfxEnabled)
  const toggleSfx = useAudioStore((state) => state.toggleSfx)

  const [showJoinModal, setShowJoinModal] = useState(false)
  const [joinCode, setJoinCode] = useState('')
  const [showAdminModal, setShowAdminModal] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('medium')
  const [questionCount, setQuestionCount] = useState(1)
  const [generating, setGenerating] = useState(false)
  const [genResult, setGenResult] = useState(null)

  const handleCreateGame = () => {
    generateRoomCode()
    setGameState('team_setup')
  }

  const handleJoinGame = () => {
    setShowJoinModal(true)
  }

  const handleSubmitJoin = () => {
    if (joinCode.trim().length >= 4) {
      generateRoomCode()
      setGameState('team_setup')
      setShowJoinModal(false)
    }
  }

  const handleGenerateQuestions = async () => {
    if (!selectedCategory) return
    setGenerating(true)
    setGenResult(null)
    try {
      const questions = await generateMoreQuestions(selectedCategory, selectedDifficulty, questionCount)
      setGenResult({ success: true, count: questions.length })
    } catch (error) {
      setGenResult({ success: false, error: error.message })
    }
    setGenerating(false)
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
        className="text-center mb-12 relative z-10"
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
        className="flex flex-col gap-4 w-full max-w-md relative z-10"
      >
        {/* Create Game Button */}
        <button
          onClick={handleCreateGame}
          className="btn-glow w-full py-5 px-8 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="text-2xl">🎮</span>
          إنشاء لعبة
        </button>

        {/* Join Game Button */}
        <button
          onClick={handleJoinGame}
          className={`w-full py-5 px-8 rounded-xl font-bold text-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-[0.98] ${
            isDark
              ? 'bg-dark-elevated border border-gray-700 text-white hover:bg-dark-card'
              : 'bg-white border border-gray-200 text-gray-800 hover:bg-gray-50'
          }`}
        >
          <span className="text-2xl">🚪</span>
          انضم للعبة
        </button>

        {/* Spectator Button */}
        <button
          className={`w-full py-5 px-8 rounded-xl font-bold text-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-[0.98] ${
            isDark
              ? 'bg-dark-elevated border border-gray-700 text-white hover:bg-dark-card'
              : 'bg-white border border-gray-200 text-gray-800 hover:bg-gray-50'
          }`}
        >
          <span className="text-2xl">👁️</span>
          متفرج
        </button>
      </motion.div>

      {/* Settings Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="fixed bottom-8 flex items-center gap-4 z-10"
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

        {/* Admin/AI Generate Button - Only show if Supabase connected */}
        {isUsingSupabase && (
          <button
            onClick={() => setShowAdminModal(true)}
            className={`p-3 rounded-full transition-all duration-300 ${
              isDark ? 'bg-dark-elevated hover:bg-dark-card' : 'bg-white hover:bg-gray-100 shadow-md'
            }`}
            title="إنشاء أسئلة بالذكاء الاصطناعي"
          >
            ✨
          </button>
        )}
      </motion.div>

      {/* Version and Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="fixed bottom-2 text-sm text-gray-500 z-10 flex items-center gap-2"
      >
        <span>v1.3.0</span>
        {isLoading && (
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
            جاري التحميل...
          </span>
        )}
        {!isLoading && isUsingSupabase && (
          <span className="flex items-center gap-1" title="متصل بقاعدة البيانات">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full" />
          </span>
        )}
      </motion.div>

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

      {/* AI Generate Questions Modal */}
      <AnimatePresence>
        {showAdminModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAdminModal(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <div className={`w-full max-w-md rounded-2xl p-6 ${isDark ? 'bg-dark-card' : 'bg-white'}`}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">✨ إنشاء أسئلة بالذكاء الاصطناعي</h2>
                  <button
                    onClick={() => setShowAdminModal(false)}
                    className="text-2xl text-gray-400 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* Category Selection */}
                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-2">اختر الفئة</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className={`w-full p-3 rounded-xl ${
                      isDark
                        ? 'bg-dark-elevated border border-gray-700'
                        : 'bg-gray-100 border border-gray-200'
                    } outline-none`}
                  >
                    <option value="">-- اختر فئة --</option>
                    {availableCategories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.icon} {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Difficulty Selection */}
                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-2">مستوى الصعوبة</label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className={`w-full p-3 rounded-xl ${
                      isDark
                        ? 'bg-dark-elevated border border-gray-700'
                        : 'bg-gray-100 border border-gray-200'
                    } outline-none`}
                  >
                    <option value="easy">سهل (100 نقطة)</option>
                    <option value="medium">متوسط (200 نقطة)</option>
                    <option value="hard">صعب (300 نقطة)</option>
                    <option value="expert">خبير (500 نقطة)</option>
                  </select>
                </div>

                {/* Question Count */}
                <div className="mb-6">
                  <label className="block text-sm text-gray-400 mb-2">عدد الأسئلة</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={questionCount}
                    onChange={(e) => setQuestionCount(Math.min(5, Math.max(1, parseInt(e.target.value) || 1)))}
                    className={`w-full p-3 rounded-xl ${
                      isDark
                        ? 'bg-dark-elevated border border-gray-700'
                        : 'bg-gray-100 border border-gray-200'
                    } outline-none`}
                  />
                </div>

                {/* Result Message */}
                {genResult && (
                  <div className={`mb-4 p-3 rounded-xl ${
                    genResult.success
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {genResult.success
                      ? `تم إنشاء ${genResult.count} سؤال بنجاح!`
                      : `خطأ: ${genResult.error}`
                    }
                  </div>
                )}

                {/* Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={() => setShowAdminModal(false)}
                    className={`flex-1 py-3 rounded-xl font-bold ${
                      isDark ? 'bg-dark-elevated hover:bg-dark-bg' : 'bg-gray-200 hover:bg-gray-300'
                    } transition-colors`}
                  >
                    إغلاق
                  </button>
                  <button
                    onClick={handleGenerateQuestions}
                    disabled={!selectedCategory || generating}
                    className={`flex-1 py-3 rounded-xl font-bold transition-colors ${
                      selectedCategory && !generating
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {generating ? 'جاري الإنشاء...' : 'إنشاء'}
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
