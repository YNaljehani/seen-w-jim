import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useThemeStore } from '../../stores/themeStore'
import { useSoundEffect } from '../../lib/sounds'
import { useHaptic } from '../../hooks/useHaptic'

// Shake animation variants
const shakeAnimation = {
  shake: {
    x: [0, -15, 15, -15, 15, -10, 10, -5, 5, 0],
    transition: { duration: 0.6 }
  }
}

// Glow animation for correct answer
const glowAnimation = {
  glow: {
    boxShadow: [
      '0 0 0px rgba(34, 197, 94, 0)',
      '0 0 30px rgba(34, 197, 94, 0.8)',
      '0 0 60px rgba(34, 197, 94, 0.6)',
      '0 0 30px rgba(34, 197, 94, 0.8)',
      '0 0 0px rgba(34, 197, 94, 0)'
    ],
    transition: { duration: 1.5 }
  }
}

export default function QuestionCard({ question, showAnswer, onReveal, feedbackState }) {
  const { isDark } = useThemeStore()
  const { playClick } = useSoundEffect()
  const { lightTap } = useHaptic()
  const [selectedOption, setSelectedOption] = useState(null)

  if (!question) return null

  const difficultyColors = {
    easy: 'bg-green-500',
    medium: 'bg-yellow-500',
    hard: 'bg-orange-500',
    expert: 'bg-red-500'
  }

  const difficultyLabels = {
    easy: 'سهل',
    medium: 'متوسط',
    hard: 'صعب',
    expert: 'خبير'
  }

  const handleOptionClick = (index) => {
    if (showAnswer) return
    setSelectedOption(index)
    playClick()
    lightTap()
  }

  const handleRevealClick = () => {
    onReveal()
  }

  // Determine card animation based on feedback state
  const getCardAnimation = () => {
    if (feedbackState === 'wrong') return 'shake'
    if (feedbackState === 'correct') return 'glow'
    return ''
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        ...(feedbackState === 'wrong' ? shakeAnimation.shake : {}),
        ...(feedbackState === 'correct' ? glowAnimation.glow : {})
      }}
      className={`w-full max-w-2xl rounded-2xl overflow-hidden ${
        isDark ? 'bg-dark-card' : 'bg-white shadow-xl'
      } ${
        feedbackState === 'correct' ? 'ring-4 ring-green-500' : ''
      } ${
        feedbackState === 'wrong' ? 'ring-4 ring-red-500' : ''
      }`}
    >
      {/* Header */}
      <div className={`p-4 flex items-center justify-between ${
        isDark ? 'bg-dark-elevated' : 'bg-gray-100'
      }`}>
        <div className="flex items-center gap-3">
          <span className="text-3xl">{question.categoryIcon}</span>
          <span className="font-bold text-lg">{question.categoryName}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-sm text-white ${difficultyColors[question.difficulty]}`}>
            {difficultyLabels[question.difficulty]}
          </span>
          <span className="px-3 py-1 rounded-full bg-primary-500 text-white font-bold">
            {question.points} نقطة
          </span>
        </div>
      </div>

      {/* Question */}
      <div className="p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center leading-relaxed mb-8">
          {question.questionText}
        </h2>

        {/* MCQ Options */}
        {question.questionType === 'mcq' && question.options && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options.map((option, index) => {
              const isCorrect = option === question.correctAnswer
              const isSelected = selectedOption === index

              return (
                <motion.button
                  key={index}
                  whileHover={!showAnswer ? { scale: 1.02 } : {}}
                  whileTap={!showAnswer ? { scale: 0.98 } : {}}
                  animate={
                    showAnswer && isCorrect
                      ? {
                          scale: [1, 1.05, 1],
                          transition: { duration: 0.3 }
                        }
                      : {}
                  }
                  onClick={() => handleOptionClick(index)}
                  className={`
                    p-4 rounded-xl text-lg font-medium text-right transition-all duration-300
                    ${showAnswer
                      ? isCorrect
                        ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                        : isSelected
                          ? 'bg-red-500 text-white'
                          : isDark ? 'bg-dark-elevated' : 'bg-gray-100'
                      : isSelected
                        ? 'bg-primary-500 text-white'
                        : isDark
                          ? 'bg-dark-elevated hover:bg-dark-bg border border-gray-700'
                          : 'bg-gray-100 hover:bg-gray-200 border border-gray-200'
                    }
                  `}
                >
                  <span className="ml-2 opacity-60">{['أ', 'ب', 'ج', 'د'][index]}.</span>
                  {option}
                  {showAnswer && isCorrect && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="mr-2 inline-block"
                    >
                      ✓
                    </motion.span>
                  )}
                </motion.button>
              )
            })}
          </div>
        )}

        {/* Open Question */}
        {question.questionType === 'open' && (
          <div className={`p-6 rounded-xl text-center ${
            isDark ? 'bg-dark-elevated' : 'bg-gray-100'
          } ${showAnswer ? 'ring-2 ring-green-500' : ''}`}>
            <AnimatePresence mode="wait">
              {showAnswer ? (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <p className="text-sm text-gray-400 mb-2">الإجابة الصحيحة</p>
                  <motion.p
                    className="text-3xl font-bold text-green-500"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                  >
                    {question.correctAnswer}
                  </motion.p>
                </motion.div>
              ) : (
                <motion.p
                  key="prompt"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-gray-400"
                >
                  سؤال مفتوح - الفريق يجيب شفهياً
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Feedback Overlay */}
      <AnimatePresence>
        {feedbackState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 flex items-center justify-center pointer-events-none ${
              feedbackState === 'correct' ? 'bg-green-500/20' : 'bg-red-500/20'
            }`}
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="text-8xl"
            >
              {feedbackState === 'correct' ? '✓' : '✗'}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reveal Button */}
      {!showAnswer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-4 border-t border-gray-800"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleRevealClick}
            className="w-full py-3 rounded-xl bg-accent-500 text-black font-bold text-lg hover:bg-accent-600 transition-colors"
          >
            كشف الإجابة
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  )
}
