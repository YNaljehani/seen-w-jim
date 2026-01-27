import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '../../stores/gameStore'
import { useThemeStore } from '../../stores/themeStore'
import { useSoundEffect } from '../../lib/sounds'
import { useHaptic } from '../../hooks/useHaptic'
import Scoreboard from './Scoreboard'
import PowerUpPanel from './PowerUpPanel'

const POINT_VALUES = [100, 200, 300, 500]

// Difficulty colors for point values
const POINT_COLORS = {
  100: { bg: 'from-green-500/20 to-green-600/20', border: 'border-green-500', text: 'text-green-400', glow: 'rgba(34, 197, 94, 0.3)' },
  200: { bg: 'from-yellow-500/20 to-yellow-600/20', border: 'border-yellow-500', text: 'text-yellow-400', glow: 'rgba(234, 179, 8, 0.3)' },
  300: { bg: 'from-orange-500/20 to-orange-600/20', border: 'border-orange-500', text: 'text-orange-400', glow: 'rgba(249, 115, 22, 0.3)' },
  500: { bg: 'from-red-500/20 to-red-600/20', border: 'border-red-500', text: 'text-red-400', glow: 'rgba(239, 68, 68, 0.3)' }
}

export default function QuestionBoard({ onSelectQuestion }) {
  const {
    selectedCategories,
    availableCategories,
    answeredQuestions,
    currentTeam,
    teamA,
    teamB
  } = useGameStore()
  const { isDark } = useThemeStore()
  const { playClick } = useSoundEffect()
  const { lightTap } = useHaptic()

  const team = currentTeam === 'A' ? teamA : teamB
  const teamColor = currentTeam === 'A' ? 'teamA' : 'teamB'

  // Get selected category objects
  const categories = selectedCategories.map(catId =>
    availableCategories.find(c => c.id === catId)
  ).filter(Boolean)

  const isQuestionAnswered = (categoryId, points) => {
    return answeredQuestions?.some(
      q => q.categoryId === categoryId && q.points === points
    )
  }

  const getQuestionForCell = (categoryId, points) => {
    const category = availableCategories.find(c => c.id === categoryId)
    if (!category) return null
    return category.questions.find(q => q.points === points)
  }

  const handleSelectQuestion = (categoryId, question) => {
    playClick()
    lightTap()
    onSelectQuestion(categoryId, question)
  }

  return (
    <div className="min-h-screen flex flex-col p-4">
      {/* Header with Scoreboard */}
      <div className="mb-6">
        <Scoreboard />
      </div>

      {/* Current Team Turn */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <motion.div
          animate={{
            boxShadow: currentTeam === 'A'
              ? ['0 0 0 rgba(0, 217, 255, 0)', '0 0 20px rgba(0, 217, 255, 0.4)', '0 0 0 rgba(0, 217, 255, 0)']
              : ['0 0 0 rgba(0, 200, 83, 0)', '0 0 20px rgba(0, 200, 83, 0.4)', '0 0 0 rgba(0, 200, 83, 0)']
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
            isDark ? 'bg-dark-card' : 'bg-white shadow-lg'
          }`}
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className={`w-4 h-4 rounded-full bg-${teamColor}`}
          />
          <span className="text-xl font-bold">
            دور <span className={`text-${teamColor}`}>{team.name}</span> - اختر سؤالاً
          </span>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row gap-6">
        {/* Power-ups Panel */}
        <div className="lg:w-48 order-2 lg:order-1">
          <PowerUpPanel />
        </div>

        {/* Question Board Grid */}
        <div className="flex-1 order-1 lg:order-2">
          <div className="max-w-5xl mx-auto">
            {/* Category Headers */}
            <div className="grid gap-2 mb-2" style={{ gridTemplateColumns: `repeat(${categories.length}, 1fr)` }}>
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: -20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 200
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)'
                  }}
                  className={`p-3 rounded-xl text-center ${
                    isDark ? 'bg-primary-600' : 'bg-primary-500'
                  }`}
                >
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="text-2xl block mb-1"
                  >
                    {category.icon}
                  </motion.span>
                  <span className="font-bold text-white text-sm md:text-base">{category.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Point Value Rows */}
            {POINT_VALUES.map((points, rowIndex) => (
              <div
                key={points}
                className="grid gap-2 mb-2"
                style={{ gridTemplateColumns: `repeat(${categories.length}, 1fr)` }}
              >
                {categories.map((category, colIndex) => {
                  const isAnswered = isQuestionAnswered(category.id, points)
                  const question = getQuestionForCell(category.id, points)
                  const colors = POINT_COLORS[points]

                  return (
                    <motion.button
                      key={`${category.id}-${points}`}
                      initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{
                        delay: (rowIndex * categories.length + colIndex) * 0.04,
                        type: 'spring',
                        stiffness: 200,
                        damping: 15
                      }}
                      whileHover={!isAnswered ? {
                        scale: 1.1,
                        zIndex: 10,
                        boxShadow: `0 0 30px ${colors.glow}`,
                        transition: { type: 'spring', stiffness: 400 }
                      } : {}}
                      whileTap={!isAnswered ? { scale: 0.95 } : {}}
                      onClick={() => !isAnswered && question && handleSelectQuestion(category.id, question)}
                      disabled={isAnswered || !question}
                      className={`
                        p-4 md:p-6 rounded-xl font-bold text-2xl md:text-3xl
                        transition-all duration-300 relative overflow-hidden
                        ${isAnswered
                          ? 'bg-gray-800/50 text-gray-600 cursor-not-allowed'
                          : isDark
                            ? `bg-gradient-to-br ${colors.bg} border-2 ${colors.border} ${colors.text} hover:shadow-lg`
                            : `bg-white hover:bg-gray-50 shadow-md hover:shadow-xl ${colors.text} border-2 border-transparent hover:${colors.border}`
                        }
                      `}
                    >
                      <AnimatePresence mode="wait">
                        {isAnswered ? (
                          <motion.span
                            key="answered"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="opacity-30"
                          >
                            ✓
                          </motion.span>
                        ) : (
                          <motion.span
                            key="points"
                            className="score-number relative z-10"
                            animate={{
                              textShadow: [
                                '0 0 0 rgba(255,255,255,0)',
                                `0 0 10px ${colors.glow}`,
                                '0 0 0 rgba(255,255,255,0)'
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: colIndex * 0.3 }}
                          >
                            {points}
                          </motion.span>
                        )}
                      </AnimatePresence>
                      {/* Shine effect on hover */}
                      {!isAnswered && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                          whileHover={{ translateX: '200%' }}
                          transition={{ duration: 0.6 }}
                        />
                      )}
                    </motion.button>
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Empty space for balance */}
        <div className="lg:w-48 order-3 hidden lg:block" />
      </div>

      {/* Questions Remaining Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mt-6"
      >
        <motion.span
          key={answeredQuestions?.length || 0}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className={`px-4 py-2 rounded-full text-sm ${
            isDark ? 'bg-dark-card text-gray-400' : 'bg-white shadow text-gray-600'
          }`}
        >
          الأسئلة المتبقية: {' '}
          <motion.span
            key={categories.length * POINT_VALUES.length - (answeredQuestions?.length || 0)}
            initial={{ scale: 1.5, color: '#00D9FF' }}
            animate={{ scale: 1, color: '#00D9FF' }}
            className="font-bold text-primary-500"
          >
            {categories.length * POINT_VALUES.length - (answeredQuestions?.length || 0)}
          </motion.span>
          {' '} من {' '}
          <span className="font-bold">{categories.length * POINT_VALUES.length}</span>
        </motion.span>
      </motion.div>
    </div>
  )
}
