import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '../stores/gameStore'
import { useThemeStore } from '../stores/themeStore'
import { useAudioStore } from '../stores/audioStore'
import { useSoundEffect } from '../lib/sounds'
import { useHaptic } from '../hooks/useHaptic'
import Tutorial, { useFirstTimeUser } from './ui/Tutorial'
import BottomSheet from './ui/BottomSheet'
import { AmbientParticles } from './ui/Particles'

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
  const { playClick, playGameStart } = useSoundEffect()
  const { mediumTap, lightTap } = useHaptic()

  // Tutorial state
  const { isFirstTime, isLoading: tutorialLoading, markTutorialComplete, resetTutorial } = useFirstTimeUser()
  const [showTutorial, setShowTutorial] = useState(false)

  // Modal states
  const [showJoinModal, setShowJoinModal] = useState(false)
  const [joinCode, setJoinCode] = useState('')
  const [showAdminModal, setShowAdminModal] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('medium')
  const [questionCount, setQuestionCount] = useState(1)
  const [generating, setGenerating] = useState(false)
  const [genResult, setGenResult] = useState(null)

  // Detect if mobile
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Show tutorial for first-time users
  useEffect(() => {
    if (!tutorialLoading && isFirstTime) {
      setShowTutorial(true)
    }
  }, [isFirstTime, tutorialLoading])

  const handleTutorialComplete = () => {
    markTutorialComplete()
    setShowTutorial(false)
    playGameStart()
    mediumTap()
  }

  const handleTutorialSkip = () => {
    markTutorialComplete()
    setShowTutorial(false)
  }

  const handleShowTutorial = () => {
    playClick()
    lightTap()
    setShowTutorial(true)
  }

  const handleCreateGame = () => {
    playGameStart()
    mediumTap()
    generateRoomCode()
    setGameState('team_setup')
  }

  const handleJoinGame = () => {
    playClick()
    mediumTap()
    setShowJoinModal(true)
  }

  const handleSubmitJoin = () => {
    if (joinCode.trim().length >= 4) {
      playGameStart()
      mediumTap()
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
      const result = await generateMoreQuestions(selectedCategory, selectedDifficulty, questionCount)
      setGenResult({
        success: true,
        count: result.questions?.length || 1,
        warning: result.warning,
        isFallback: result.isFallback
      })
    } catch (error) {
      setGenResult({ success: false, error: error.message })
    }
    setGenerating(false)
  }

  // Join Modal Content (shared between modal and bottom sheet)
  const JoinModalContent = () => (
    <>
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
      <div className="flex gap-4">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowJoinModal(false)}
          className={`flex-1 py-4 rounded-xl font-bold ${
            isDark ? 'bg-dark-elevated hover:bg-dark-bg' : 'bg-gray-200 hover:bg-gray-300'
          } transition-colors`}
        >
          إلغاء
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmitJoin}
          disabled={joinCode.trim().length < 4}
          className={`flex-1 py-4 rounded-xl font-bold transition-colors ${
            joinCode.trim().length >= 4
              ? 'bg-primary-500 hover:bg-primary-600 text-white'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
        >
          انضم
        </motion.button>
      </div>
    </>
  )

  // Admin Modal Content
  const AdminModalContent = () => (
    <>
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

      {genResult && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-4 p-3 rounded-xl ${
            genResult.success
              ? genResult.isFallback
                ? 'bg-yellow-500/20 text-yellow-400'
                : 'bg-green-500/20 text-green-400'
              : 'bg-red-500/20 text-red-400'
          }`}
        >
          {genResult.success ? (
            <>
              <div>تم إنشاء {genResult.count} سؤال بنجاح!</div>
              {genResult.warning && (
                <div className="text-sm mt-1 opacity-80">{genResult.warning}</div>
              )}
            </>
          ) : (
            `خطأ: ${genResult.error}`
          )}
        </motion.div>
      )}

      <div className="flex gap-4">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowAdminModal(false)}
          className={`flex-1 py-4 rounded-xl font-bold ${
            isDark ? 'bg-dark-elevated hover:bg-dark-bg' : 'bg-gray-200 hover:bg-gray-300'
          } transition-colors`}
        >
          إغلاق
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleGenerateQuestions}
          disabled={!selectedCategory || generating}
          className={`flex-1 py-4 rounded-xl font-bold transition-colors ${
            selectedCategory && !generating
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
        >
          {generating ? (
            <span className="flex items-center justify-center gap-2">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                ⚙️
              </motion.span>
              جاري الإنشاء...
            </span>
          ) : 'إنشاء'}
        </motion.button>
      </div>
    </>
  )

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient background particles */}
      <AmbientParticles count={20} color={isDark ? 'rgba(0, 217, 255, 0.15)' : 'rgba(0, 217, 255, 0.1)'} />

      {/* Background gradient effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-secondary-600/20 pointer-events-none" />

      {/* Tutorial */}
      <AnimatePresence>
        {showTutorial && (
          <Tutorial
            onComplete={handleTutorialComplete}
            onSkip={handleTutorialSkip}
          />
        )}
      </AnimatePresence>

      {/* Logo and Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-display font-extrabold mb-4"
          animate={{
            textShadow: isDark
              ? ['0 0 20px rgba(0, 217, 255, 0.5)', '0 0 40px rgba(0, 217, 255, 0.8)', '0 0 20px rgba(0, 217, 255, 0.5)']
              : 'none'
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="neon-text text-primary-500">سين</span>
          <span className="mx-2 text-white">و</span>
          <span className="neon-text-green text-secondary-500">جيم</span>
        </motion.h1>
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
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCreateGame}
          className="btn-glow w-full py-5 px-8 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl"
          >
            🎮
          </motion.span>
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

        {/* How to Play Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleShowTutorial}
          className={`w-full py-5 px-8 rounded-xl font-bold text-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg ${
            isDark
              ? 'bg-dark-elevated border border-gray-700 text-white hover:bg-dark-card'
              : 'bg-white border border-gray-200 text-gray-800 hover:bg-gray-50'
          }`}
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-2xl"
          >
            ❓
          </motion.span>
          كيف تلعب؟
        </motion.button>
      </motion.div>

      {/* Settings Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="fixed bottom-8 flex items-center gap-4 z-10"
      >
        {/* Theme Toggle */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            playClick()
            mediumTap()
            toggleTheme()
          }}
          className={`p-3 rounded-full transition-all duration-300 ${
            isDark ? 'bg-dark-elevated hover:bg-dark-card' : 'bg-white hover:bg-gray-100 shadow-md'
          }`}
        >
          <motion.span
            key={isDark ? 'sun' : 'moon'}
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 90, scale: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {isDark ? '☀️' : '🌙'}
          </motion.span>
        </motion.button>

        {/* Sound Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            mediumTap()
            toggleSfx()
          }}
          className={`p-3 rounded-full transition-all duration-300 ${
            isDark ? 'bg-dark-elevated hover:bg-dark-card' : 'bg-white hover:bg-gray-100 shadow-md'
          }`}
        >
          <motion.span
            key={sfxEnabled ? 'on' : 'off'}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            {sfxEnabled ? '🔊' : '🔇'}
          </motion.span>
        </motion.button>

        {/* Admin/AI Generate Button */}
        {isUsingSupabase && (
          <motion.button
            whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              playClick()
              mediumTap()
              setShowAdminModal(true)
            }}
            className={`p-3 rounded-full transition-all duration-300 ${
              isDark ? 'bg-dark-elevated hover:bg-dark-card' : 'bg-white hover:bg-gray-100 shadow-md'
            }`}
            title="إنشاء أسئلة بالذكاء الاصطناعي"
          >
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              ✨
            </motion.span>
          </motion.button>
        )}
      </motion.div>

      {/* Version and Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="fixed bottom-2 text-sm text-gray-500 z-10 flex items-center gap-2"
      >
        <span>v1.4.0</span>
        {isLoading && (
          <span className="flex items-center gap-1">
            <motion.span
              className="inline-block w-2 h-2 bg-yellow-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
            جاري التحميل...
          </span>
        )}
        {!isLoading && isUsingSupabase && (
          <span className="flex items-center gap-1" title="متصل بقاعدة البيانات">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full" />
          </span>
        )}
      </motion.div>

      {/* Join Game - Bottom Sheet on Mobile, Modal on Desktop */}
      {isMobile ? (
        <BottomSheet
          isOpen={showJoinModal}
          onClose={() => setShowJoinModal(false)}
          title="انضم للعبة"
        >
          <JoinModalContent />
        </BottomSheet>
      ) : (
        <AnimatePresence>
          {showJoinModal && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowJoinModal(false)}
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
                    <h2 className="text-2xl font-bold">انضم للعبة</h2>
                    <button
                      onClick={() => setShowJoinModal(false)}
                      className="text-2xl text-gray-400 hover:text-white transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                  <JoinModalContent />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}

      {/* AI Generate Questions - Bottom Sheet on Mobile, Modal on Desktop */}
      {isMobile ? (
        <BottomSheet
          isOpen={showAdminModal}
          onClose={() => setShowAdminModal(false)}
          title="✨ إنشاء أسئلة بالذكاء الاصطناعي"
        >
          <AdminModalContent />
        </BottomSheet>
      ) : (
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
                  <AdminModalContent />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}
