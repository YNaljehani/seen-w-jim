import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useThemeStore } from '../../stores/themeStore'

export default function QuestionCard({ question, showAnswer, onReveal }) {
  const { isDark } = useThemeStore()
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full max-w-2xl rounded-2xl overflow-hidden ${
        isDark ? 'bg-dark-card' : 'bg-white shadow-xl'
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
                  onClick={() => !showAnswer && setSelectedOption(index)}
                  className={`
                    p-4 rounded-xl text-lg font-medium text-right transition-all duration-300
                    ${showAnswer
                      ? isCorrect
                        ? 'bg-green-500 text-white'
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
                  {showAnswer && isCorrect && <span className="mr-2">✓</span>}
                </motion.button>
              )
            })}
          </div>
        )}

        {/* Open Question */}
        {question.questionType === 'open' && (
          <div className={`p-6 rounded-xl text-center ${
            isDark ? 'bg-dark-elevated' : 'bg-gray-100'
          }`}>
            <AnimatePresence mode="wait">
              {showAnswer ? (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <p className="text-sm text-gray-400 mb-2">الإجابة الصحيحة</p>
                  <p className="text-3xl font-bold text-green-500">{question.correctAnswer}</p>
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

      {/* Reveal Button */}
      {!showAnswer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-4 border-t border-gray-800"
        >
          <button
            onClick={onReveal}
            className="w-full py-3 rounded-xl bg-accent-500 text-black font-bold text-lg hover:bg-accent-600 transition-colors"
          >
            كشف الإجابة
          </button>
        </motion.div>
      )}
    </motion.div>
  )
}
