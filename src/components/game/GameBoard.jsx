import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '../../stores/gameStore'
import { useThemeStore } from '../../stores/themeStore'
import { useSoundEffect } from '../../lib/sounds'
import { useHaptic } from '../../hooks/useHaptic'
import Scoreboard from './Scoreboard'
import Timer from './Timer'
import QuestionCard from './QuestionCard'
import PowerUpPanel from './PowerUpPanel'
import TeamBanner from './TeamBanner'
import CallFriendOverlay from './CallFriendOverlay'
import Button from '../ui/Button'
import Confetti from '../ui/Confetti'
import { CorrectParticles, AmbientParticles } from '../ui/Particles'

export default function GameBoard() {
  const {
    currentTeam,
    teamA,
    teamB,
    currentQuestion,
    isStealMode,
    isTimerRunning,
    startTimer,
    stopTimer,
    markAnswer,
    finishQuestion,
    activePowerUp,
    answeredQuestions,
    selectedCategories
  } = useGameStore()
  const { isDark } = useThemeStore()
  const { playCorrect, playWrong, playClick, playPowerUp, playSteal, playReveal, playGameStart } = useSoundEffect()
  const { success, error, mediumTap } = useHaptic()

  const [showAnswer, setShowAnswer] = useState(false)
  const [questionReady, setQuestionReady] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showParticles, setShowParticles] = useState(false)
  const [feedbackState, setFeedbackState] = useState(null) // 'correct' | 'wrong' | null

  const team = currentTeam === 'A' ? teamA : teamB
  const teamColor = currentTeam === 'A' ? 'teamA' : 'teamB'

  // Calculate progress
  const totalQuestions = selectedCategories.length * 4
  const answeredCount = answeredQuestions?.length || 0
  const progress = (answeredCount / totalQuestions) * 100

  // Reset state when question changes
  useEffect(() => {
    setShowAnswer(false)
    setQuestionReady(false)
    setFeedbackState(null)
    setShowConfetti(false)
    setShowParticles(false)
    stopTimer()
  }, [currentQuestion?.id, stopTimer])

  // Play steal sound when entering steal mode
  useEffect(() => {
    if (isStealMode) {
      playSteal()
    }
  }, [isStealMode, playSteal])

  const handleStartQuestion = () => {
    setQuestionReady(true)
    startTimer()
    playGameStart()
    mediumTap()
  }

  const handleRevealAnswer = () => {
    setShowAnswer(true)
    stopTimer()
    playReveal()
    mediumTap()
  }

  const handleMarkCorrect = () => {
    setFeedbackState('correct')
    playCorrect()
    success()
    setShowConfetti(true)
    setShowParticles(true)
    setTimeout(() => {
      setShowConfetti(false)
      setShowParticles(false)
      markAnswer(true)
    }, 1500)
  }

  const handleMarkWrong = () => {
    setFeedbackState('wrong')
    playWrong()
    error()
    setTimeout(() => {
      setFeedbackState(null)
      markAnswer(false)
    }, 800)
  }

  const handleSkip = () => {
    playClick()
    finishQuestion(false)
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>لا يوجد سؤال محدد</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col p-4 relative">
      {/* Ambient background particles */}
      <AmbientParticles count={15} color={isDark ? 'rgba(0, 217, 255, 0.2)' : 'rgba(0, 217, 255, 0.15)'} />

      {/* Confetti on correct answer */}
      {showConfetti && <Confetti />}

      {/* Correct answer particles */}
      <CorrectParticles show={showParticles} />

      {/* Call Friend Overlay */}
      <CallFriendOverlay />

      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 left-0 right-0 h-1.5 bg-dark-elevated z-30"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
        {/* Progress percentage indicator */}
        <motion.div
          className="absolute top-2 right-4 text-xs text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {Math.round(progress)}%
        </motion.div>
      </motion.div>

      {/* Header with Scoreboard */}
      <div className="mb-4 mt-2">
        <Scoreboard />
      </div>

      {/* Question Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-2"
      >
        <motion.span
          key={answeredCount}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className={`px-4 py-2 rounded-full text-sm ${isDark ? 'bg-dark-card' : 'bg-white shadow'}`}
        >
          السؤال <motion.span
            key={answeredCount + 1}
            initial={{ scale: 1.5, color: '#00D9FF' }}
            animate={{ scale: 1, color: '#00D9FF' }}
            className="font-bold text-primary-500"
          >{answeredCount + 1}</motion.span> من <span className="font-bold">{totalQuestions}</span>
        </motion.span>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-6">
        {/* Power-ups Panel (left side on desktop) */}
        <div className="lg:w-48 order-2 lg:order-1">
          <PowerUpPanel />
        </div>

        {/* Question Card and Timer */}
        <div className="flex-1 flex flex-col items-center order-1 lg:order-2">
          {/* Team Banner with streak */}
          <div className="mb-4">
            <TeamBanner />
          </div>

          {/* Timer */}
          <div className="mb-6">
            <Timer />
          </div>

          {/* Active Power-up Indicator */}
          <AnimatePresence>
            {activePowerUp && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                className="mb-4 px-6 py-3 rounded-full bg-gradient-to-r from-accent-500/20 to-accent-600/20 border border-accent-500"
              >
                <motion.span
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-accent-500 font-bold"
                >
                  {activePowerUp === 'pit' && '🕳️ الحفرة مفعلة!'}
                  {activePowerUp === 'doubleAnswer' && '✌️ جاوب جوابين مفعل!'}
                  {activePowerUp === 'rest' && '😴 استريح مفعل!'}
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Question Card or Start Button */}
          <AnimatePresence mode="wait">
            {!questionReady ? (
              <motion.div
                key="start"
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`p-8 rounded-2xl mb-6 ${isDark ? 'bg-dark-card' : 'bg-white shadow-xl'}`}
                >
                  <motion.span
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-6xl mb-4 block"
                  >
                    {currentQuestion.categoryIcon}
                  </motion.span>
                  <h3 className="text-2xl font-bold mb-2">{currentQuestion.categoryName}</h3>
                  <motion.p
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-4xl font-bold text-primary-500 mb-2"
                  >
                    {currentQuestion.points} نقطة
                  </motion.p>
                  <p className={`inline-block px-3 py-1 rounded-full text-sm ${
                    currentQuestion.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                    currentQuestion.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    currentQuestion.difficulty === 'hard' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {currentQuestion.difficulty === 'easy' && 'سهل'}
                    {currentQuestion.difficulty === 'medium' && 'متوسط'}
                    {currentQuestion.difficulty === 'hard' && 'صعب'}
                    {currentQuestion.difficulty === 'expert' && 'خبير'}
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="primary"
                    size="xl"
                    onClick={handleStartQuestion}
                  >
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      ◀
                    </motion.span>
                    عرض السؤال
                  </Button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="question"
                initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="w-full max-w-2xl"
              >
                <QuestionCard
                  question={currentQuestion}
                  showAnswer={showAnswer}
                  onReveal={handleRevealAnswer}
                  feedbackState={feedbackState}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Answer Controls (right side on desktop) */}
        <div className="lg:w-48 order-3">
          <AnimatePresence>
            {showAnswer && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className={`p-4 rounded-xl ${isDark ? 'bg-dark-card' : 'bg-white shadow-lg'}`}
              >
                <p className="text-center text-gray-400 mb-4">من أجاب صح؟</p>
                <div className="space-y-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="teamA"
                      className="w-full"
                      onClick={() => {
                        if (currentTeam === 'A' || isStealMode) {
                          handleMarkCorrect()
                        }
                      }}
                      disabled={currentTeam === 'B' && !isStealMode}
                    >
                      ✅ {teamA.name}
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="teamB"
                      className="w-full"
                      onClick={() => {
                        if (currentTeam === 'B' || isStealMode) {
                          handleMarkCorrect()
                        }
                      }}
                      disabled={currentTeam === 'A' && !isStealMode}
                    >
                      ✅ {teamB.name}
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="danger"
                      className="w-full"
                      onClick={handleMarkWrong}
                    >
                      ❌ إجابة خاطئة
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="ghost"
                      className="w-full border border-gray-700"
                      onClick={handleSkip}
                    >
                      ⏭️ تخطي
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
