import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '../../stores/gameStore'
import { useThemeStore } from '../../stores/themeStore'

export default function CategorySelection() {
  const {
    gameState,
    currentTeam,
    teamA,
    teamB,
    availableCategories,
    selectedCategories,
    selectCategory
  } = useGameStore()
  const { isDark } = useThemeStore()

  const team = currentTeam === 'A' ? teamA : teamB
  const teamColor = currentTeam === 'A' ? 'teamA' : 'teamB'
  const selectionsRemaining = 3 - team.selectedCategories.length

  return (
    <div className="min-h-screen flex flex-col p-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-6"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-2">اختيار الفئات</h1>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className={`w-3 h-3 rounded-full bg-${teamColor}`} />
          <span className={`text-${teamColor} font-bold text-xl`}>{team.name}</span>
          <span className="text-gray-400">يختار</span>
        </div>
        <div className={`inline-block px-4 py-2 rounded-full ${
          isDark ? 'bg-dark-card' : 'bg-white shadow'
        }`}>
          <span className="text-gray-400">متبقي: </span>
          <span className="font-bold text-primary-500">{selectionsRemaining}</span>
          <span className="text-gray-400"> فئات</span>
        </div>
      </motion.div>

      {/* Selected Categories Display */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex justify-center gap-4 mb-6"
      >
        {/* Team A selections */}
        <div className="text-center">
          <p className="text-teamA text-sm mb-2">{teamA.name}</p>
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => {
              const catId = teamA.selectedCategories[i]
              const cat = catId ? availableCategories.find(c => c.id === catId) : null
              return (
                <div
                  key={i}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${
                    cat ? 'bg-teamA/20 border-2 border-teamA' : isDark ? 'bg-dark-elevated' : 'bg-gray-200'
                  }`}
                >
                  {cat ? cat.icon : '?'}
                </div>
              )
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center px-4">
          <span className="text-gray-500">VS</span>
        </div>

        {/* Team B selections */}
        <div className="text-center">
          <p className="text-teamB text-sm mb-2">{teamB.name}</p>
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => {
              const catId = teamB.selectedCategories[i]
              const cat = catId ? availableCategories.find(c => c.id === catId) : null
              return (
                <div
                  key={i}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${
                    cat ? 'bg-teamB/20 border-2 border-teamB' : isDark ? 'bg-dark-elevated' : 'bg-gray-200'
                  }`}
                >
                  {cat ? cat.icon : '?'}
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* Categories Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto w-full"
      >
        <AnimatePresence>
          {availableCategories.map((category, index) => {
            const isSelected = selectedCategories.includes(category.id)
            const isDisabled = isSelected || selectionsRemaining === 0

            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={!isDisabled ? { scale: 1.05 } : {}}
                whileTap={!isDisabled ? { scale: 0.95 } : {}}
                onClick={() => !isDisabled && selectCategory(category.id)}
                disabled={isDisabled}
                className={`
                  relative p-6 rounded-xl flex flex-col items-center justify-center gap-2
                  transition-all duration-300
                  ${isSelected
                    ? 'bg-gray-800 opacity-50 cursor-not-allowed'
                    : isDark
                      ? 'bg-dark-card hover:bg-dark-elevated border border-gray-800 hover:border-primary-500'
                      : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-primary-500'
                  }
                `}
              >
                <span className="text-4xl">{category.icon}</span>
                <span className="font-bold text-lg">{category.name}</span>
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 left-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"
                  >
                    ✓
                  </motion.div>
                )}
              </motion.button>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
