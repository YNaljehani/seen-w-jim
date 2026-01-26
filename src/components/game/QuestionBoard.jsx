import { motion } from 'framer-motion'
import { useGameStore } from '../../stores/gameStore'
import { useThemeStore } from '../../stores/themeStore'
import Scoreboard from './Scoreboard'
import PowerUpPanel from './PowerUpPanel'

const POINT_VALUES = [100, 200, 300, 500]

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
        <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
          isDark ? 'bg-dark-card' : 'bg-white shadow-lg'
        }`}>
          <span className={`w-4 h-4 rounded-full bg-${teamColor}`} />
          <span className="text-xl font-bold">
            دور <span className={`text-${teamColor}`}>{team.name}</span> - اختر سؤالاً
          </span>
        </div>
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
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-3 rounded-xl text-center ${
                    isDark ? 'bg-primary-600' : 'bg-primary-500'
                  }`}
                >
                  <span className="text-2xl block mb-1">{category.icon}</span>
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

                  return (
                    <motion.button
                      key={`${category.id}-${points}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (rowIndex * categories.length + colIndex) * 0.03 }}
                      whileHover={!isAnswered ? { scale: 1.05, zIndex: 10 } : {}}
                      whileTap={!isAnswered ? { scale: 0.95 } : {}}
                      onClick={() => !isAnswered && question && onSelectQuestion(category.id, question)}
                      disabled={isAnswered || !question}
                      className={`
                        p-4 md:p-6 rounded-xl font-bold text-2xl md:text-3xl
                        transition-all duration-300 relative
                        ${isAnswered
                          ? 'bg-gray-800/50 text-gray-600 cursor-not-allowed'
                          : isDark
                            ? 'bg-dark-card hover:bg-dark-elevated border-2 border-transparent hover:border-accent-500 text-accent-500 hover:shadow-lg hover:shadow-accent-500/20'
                            : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-xl text-accent-600 border-2 border-transparent hover:border-accent-500'
                        }
                      `}
                    >
                      {isAnswered ? (
                        <span className="opacity-30">—</span>
                      ) : (
                        <span className="score-number">{points}</span>
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
        <span className={`px-4 py-2 rounded-full text-sm ${
          isDark ? 'bg-dark-card text-gray-400' : 'bg-white shadow text-gray-600'
        }`}>
          الأسئلة المتبقية: {' '}
          <span className="font-bold text-primary-500">
            {categories.length * POINT_VALUES.length - (answeredQuestions?.length || 0)}
          </span>
          {' '} من {' '}
          <span className="font-bold">{categories.length * POINT_VALUES.length}</span>
        </span>
      </motion.div>
    </div>
  )
}
