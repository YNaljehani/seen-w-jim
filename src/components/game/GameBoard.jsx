import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '../../stores/gameStore'
import { useThemeStore } from '../../stores/themeStore'
import Scoreboard from './Scoreboard'
import Timer from './Timer'
import QuestionCard from './QuestionCard'
import PowerUpPanel from './PowerUpPanel'
import CallFriendOverlay from './CallFriendOverlay'
import Button from '../ui/Button'

export default function GameBoard() {
  const {
    currentTeam,
    teamA,
    teamB,
    questions,
    currentQuestionIndex,
    isStealMode,
    isTimerRunning,
    startTimer,
    stopTimer,
    markAnswer,
    nextQuestion,
    activePowerUp
  } = useGameStore()
  const { isDark } = useThemeStore()

  const [showAnswer, setShowAnswer] = useState(false)
  const [questionReady, setQuestionReady] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const team = currentTeam === 'A' ? teamA : teamB
  const teamColor = currentTeam === 'A' ? 'teamA' : 'teamB'

  // Reset state when question changes
  useEffect(() => {
    setShowAnswer(false)
    setQuestionReady(false)
    stopTimer()
  }, [currentQuestionIndex, stopTimer])

  const handleStartQuestion = () => {
    setQuestionReady(true)
    startTimer()
  }

  const handleRevealAnswer = () => {
    setShowAnswer(true)
    stopTimer()
  }

  const handleMarkCorrect = () => {
    markAnswer(true)
  }

  const handleMarkWrong = () => {
    markAnswer(false)
  }

  // Progress indicator
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  return (
    <div className="min-h-screen flex flex-col p-4">
      {/* Call Friend Overlay */}
      <CallFriendOverlay />

      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 left-0 right-0 h-1 bg-dark-elevated z-30"
      >
        <motion.div
          className="h-full bg-primary-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* Header with Scoreboard */}
      <div className="mb-4">
        <Scoreboard />
      </div>

      {/* Question Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-4"
      >
        <span className={`px-4 py-2 rounded-full ${isDark ? 'bg-dark-card' : 'bg-white shadow'}`}>
          السؤال <span className="font-bold text-primary-500">{currentQuestionIndex + 1}</span> من <span className="font-bold">{questions.length}</span>
        </span>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-6">
        {/* Power-ups Panel (left side on desktop) */}
        <div className="lg:w-48 order-2 lg:order-1">
          <PowerUpPanel />
        </div>

        {/* Question Card and Timer */}
        <div className="flex-1 flex flex-col items-center order-1 lg:order-2">
          {/* Current Team Indicator */}
          <motion.div
            key={`${currentTeam}-${isStealMode}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-4 px-6 py-2 rounded-full flex items-center gap-2 ${
              isStealMode
                ? 'bg-accent-500 text-black'
                : isDark ? 'bg-dark-card' : 'bg-white shadow'
            }`}
          >
            <span className={`w-3 h-3 rounded-full bg-${teamColor}`} />
            <span className="font-bold">
              {isStealMode ? `${team.name} يسرق!` : `دور ${team.name}`}
            </span>
          </motion.div>

          {/* Timer */}
          <div className="mb-6">
            <Timer />
          </div>

          {/* Active Power-up Indicator */}
          <AnimatePresence>
            {activePowerUp && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="mb-4 px-4 py-2 rounded-full bg-accent-500/20 border border-accent-500 text-accent-500"
              >
                {activePowerUp === 'pit' && '🕳️ الحفرة مفعلة!'}
                {activePowerUp === 'doubleAnswer' && '✌️ جاوب جوابين مفعل!'}
                {activePowerUp === 'rest' && '😴 استريح مفعل!'}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Question Card or Start Button */}
          <AnimatePresence mode="wait">
            {!questionReady ? (
              <motion.div
                key="start"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center"
              >
                <div className={`p-8 rounded-2xl mb-6 ${isDark ? 'bg-dark-card' : 'bg-white shadow-xl'}`}>
                  <span className="text-6xl mb-4 block">{currentQuestion?.categoryIcon}</span>
                  <h3 className="text-2xl font-bold mb-2">{currentQuestion?.categoryName}</h3>
                  <p className="text-4xl font-bold text-primary-500 mb-2">
                    {currentQuestion?.points} نقطة
                  </p>
                  <p className="text-gray-400">
                    {currentQuestion?.difficulty === 'easy' && 'سهل'}
                    {currentQuestion?.difficulty === 'medium' && 'متوسط'}
                    {currentQuestion?.difficulty === 'hard' && 'صعب'}
                    {currentQuestion?.difficulty === 'expert' && 'خبير'}
                  </p>
                </div>
                <Button
                  variant="primary"
                  size="xl"
                  onClick={handleStartQuestion}
                >
                  عرض السؤال
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="question"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="w-full max-w-2xl"
              >
                <QuestionCard
                  question={currentQuestion}
                  showAnswer={showAnswer}
                  onReveal={handleRevealAnswer}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Answer Controls (right side on desktop) */}
        <div className="lg:w-48 order-3">
          {showAnswer && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`p-4 rounded-xl ${isDark ? 'bg-dark-card' : 'bg-white shadow-lg'}`}
            >
              <p className="text-center text-gray-400 mb-4">من أجاب صح؟</p>
              <div className="space-y-3">
                <Button
                  variant="teamA"
                  className="w-full"
                  onClick={() => {
                    if (currentTeam === 'A' || (currentTeam === 'B' && isStealMode)) {
                      handleMarkCorrect()
                    }
                  }}
                  disabled={currentTeam === 'B' && !isStealMode}
                >
                  ✅ {teamA.name}
                </Button>
                <Button
                  variant="teamB"
                  className="w-full"
                  onClick={() => {
                    if (currentTeam === 'B' || (currentTeam === 'A' && isStealMode)) {
                      handleMarkCorrect()
                    }
                  }}
                  disabled={currentTeam === 'A' && !isStealMode}
                >
                  ✅ {teamB.name}
                </Button>
                <Button
                  variant="danger"
                  className="w-full"
                  onClick={handleMarkWrong}
                >
                  ❌ إجابة خاطئة
                </Button>
                <Button
                  variant="ghost"
                  className="w-full border border-gray-700"
                  onClick={nextQuestion}
                >
                  ⏭️ تخطي
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
