import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '../../stores/gameStore'
import { useThemeStore } from '../../stores/themeStore'
import { useSoundEffect } from '../../lib/sounds'
import { useHaptic } from '../../hooks/useHaptic'
import { CategoryGridSkeleton } from '../ui/Skeleton'

// Stagger animation for grid items
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20
    }
  }
}

export default function CategorySelection() {
  const {
    gameState,
    currentTeam,
    teamA,
    teamB,
    availableCategories,
    selectedCategories,
    selectCategory,
    isLoading
  } = useGameStore()
  const { isDark } = useThemeStore()
  const { playClick } = useSoundEffect()
  const { mediumTap, success } = useHaptic()

  const team = currentTeam === 'A' ? teamA : teamB
  const teamColor = currentTeam === 'A' ? 'teamA' : 'teamB'
  const selectionsRemaining = 3 - team.selectedCategories.length

  const handleCategorySelect = (categoryId) => {
    playClick()
    mediumTap()
    selectCategory(categoryId)
    if (selectionsRemaining === 1) {
      success()
    }
  }

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
          <motion.span
            animate={{
              scale: [1, 1.3, 1],
              boxShadow: currentTeam === 'A'
                ? ['0 0 0 rgba(0, 217, 255, 0)', '0 0 20px rgba(0, 217, 255, 0.8)', '0 0 0 rgba(0, 217, 255, 0)']
                : ['0 0 0 rgba(0, 200, 83, 0)', '0 0 20px rgba(0, 200, 83, 0.8)', '0 0 0 rgba(0, 200, 83, 0)']
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-3 h-3 rounded-full bg-${teamColor}`}
          />
          <span className={`text-${teamColor} font-bold text-xl`}>{team.name}</span>
          <span className="text-gray-400">يختار</span>
        </div>
        <motion.div
          animate={{ scale: selectionsRemaining === 1 ? [1, 1.05, 1] : 1 }}
          transition={{ duration: 0.5, repeat: selectionsRemaining === 1 ? Infinity : 0 }}
          className={`inline-block px-4 py-2 rounded-full ${
            isDark ? 'bg-dark-card' : 'bg-white shadow'
          }`}
        >
          <span className="text-gray-400">متبقي: </span>
          <motion.span
            key={selectionsRemaining}
            initial={{ scale: 1.5, color: '#00D9FF' }}
            animate={{ scale: 1, color: '#00D9FF' }}
            className="font-bold text-primary-500"
          >
            {selectionsRemaining}
          </motion.span>
          <span className="text-gray-400"> فئات</span>
        </motion.div>
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
                <motion.div
                  key={i}
                  initial={false}
                  animate={cat ? {
                    scale: [0, 1.2, 1],
                    rotate: [0, 10, 0]
                  } : {}}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl transition-all duration-300 ${
                    cat ? 'bg-teamA/20 border-2 border-teamA' : isDark ? 'bg-dark-elevated' : 'bg-gray-200'
                  }`}
                >
                  {cat ? (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500 }}
                    >
                      {cat.icon}
                    </motion.span>
                  ) : '?'}
                </motion.div>
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
                <motion.div
                  key={i}
                  initial={false}
                  animate={cat ? {
                    scale: [0, 1.2, 1],
                    rotate: [0, -10, 0]
                  } : {}}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl transition-all duration-300 ${
                    cat ? 'bg-teamB/20 border-2 border-teamB' : isDark ? 'bg-dark-elevated' : 'bg-gray-200'
                  }`}
                >
                  {cat ? (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500 }}
                    >
                      {cat.icon}
                    </motion.span>
                  ) : '?'}
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* Categories Grid */}
      {isLoading ? (
        <div className="flex-1 max-w-4xl mx-auto w-full">
          <CategoryGridSkeleton count={12} />
        </div>
      ) : (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto w-full"
      >
        {availableCategories.map((category) => {
          const isSelected = selectedCategories.includes(category.id)
          const isDisabled = isSelected || selectionsRemaining === 0

          return (
            <motion.button
              key={category.id}
              variants={itemVariants}
              whileHover={!isDisabled ? {
                scale: 1.08,
                y: -5,
                transition: { type: 'spring', stiffness: 400 }
              } : {}}
              whileTap={!isDisabled ? { scale: 0.95 } : {}}
              onClick={() => !isDisabled && handleCategorySelect(category.id)}
              disabled={isDisabled}
              className={`
                relative p-6 rounded-xl flex flex-col items-center justify-center gap-2
                transition-all duration-300
                ${isSelected
                  ? 'bg-gray-800 opacity-50 cursor-not-allowed'
                  : isDark
                    ? 'bg-dark-card hover:bg-dark-elevated border border-gray-800 hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/20'
                    : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-primary-500'
                }
              `}
            >
              <motion.span
                className="text-4xl"
                animate={!isSelected ? {
                  y: [0, -3, 0]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 2
                }}
              >
                {category.icon}
              </motion.span>
              <span className="font-bold text-lg">{category.name}</span>
              {isSelected && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                  className="absolute top-2 left-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    ✓
                  </motion.span>
                </motion.div>
              )}
              {/* Hover glow effect */}
              {!isDisabled && (
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    boxShadow: isDark
                      ? '0 0 30px rgba(0, 217, 255, 0.3), inset 0 0 20px rgba(0, 217, 255, 0.1)'
                      : '0 0 20px rgba(0, 217, 255, 0.2)'
                  }}
                />
              )}
            </motion.button>
          )
        })}
      </motion.div>
      )}
    </div>
  )
}
