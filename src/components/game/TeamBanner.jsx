import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '../../stores/gameStore'
import { useThemeStore } from '../../stores/themeStore'
import { StreakParticles } from '../ui/Particles'

// Fire emoji based on streak level
function getStreakEmoji(streak) {
  if (streak >= 5) return '🔥🔥🔥'
  if (streak >= 3) return '🔥🔥'
  if (streak >= 2) return '🔥'
  return ''
}

// Streak color based on level
function getStreakColor(streak) {
  if (streak >= 5) return 'text-yellow-400'
  if (streak >= 3) return 'text-orange-400'
  if (streak >= 2) return 'text-red-400'
  return 'text-gray-400'
}

export default function TeamBanner() {
  const { currentTeam, teamA, teamB, isStealMode } = useGameStore()
  const { isDark } = useThemeStore()

  const team = currentTeam === 'A' ? teamA : teamB
  const teamColor = currentTeam === 'A' ? 'teamA' : 'teamB'
  const bgGradient = currentTeam === 'A'
    ? 'from-teamA/20 to-teamA/5'
    : 'from-teamB/20 to-teamB/5'

  const streakEmoji = getStreakEmoji(team.streak)
  const streakColor = getStreakColor(team.streak)

  return (
    <motion.div
      key={`${currentTeam}-${isStealMode}`}
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="relative"
    >
      {/* Streak particles effect */}
      {team.streak >= 2 && (
        <StreakParticles streak={team.streak} />
      )}

      <motion.div
        animate={isStealMode ? {
          boxShadow: [
            '0 0 0 rgba(255, 193, 7, 0)',
            '0 0 30px rgba(255, 193, 7, 0.5)',
            '0 0 0 rgba(255, 193, 7, 0)'
          ]
        } : team.streak >= 2 ? {
          boxShadow: [
            '0 0 0 rgba(255, 100, 50, 0)',
            '0 0 20px rgba(255, 100, 50, 0.4)',
            '0 0 0 rgba(255, 100, 50, 0)'
          ]
        } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
        className={`
          relative overflow-hidden px-8 py-4 rounded-2xl
          ${isStealMode
            ? 'bg-gradient-to-r from-accent-500/30 to-accent-500/10 border-2 border-accent-500'
            : isDark
              ? `bg-gradient-to-r ${bgGradient} border border-${teamColor}/50`
              : `bg-gradient-to-r ${bgGradient} border border-${teamColor}/30 shadow-lg`
          }
        `}
      >
        {/* Animated background shine */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{ x: ['-200%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative flex items-center justify-center gap-4">
          {/* Team indicator dot with pulse */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              boxShadow: currentTeam === 'A'
                ? ['0 0 0 rgba(0, 217, 255, 0)', '0 0 20px rgba(0, 217, 255, 0.8)', '0 0 0 rgba(0, 217, 255, 0)']
                : ['0 0 0 rgba(0, 200, 83, 0)', '0 0 20px rgba(0, 200, 83, 0.8)', '0 0 0 rgba(0, 200, 83, 0)']
            }}
            transition={{ duration: 1, repeat: Infinity }}
            className={`w-4 h-4 rounded-full bg-${teamColor}`}
          />

          {/* Team name and status */}
          <div className="flex flex-col items-center">
            <AnimatePresence mode="wait">
              {isStealMode ? (
                <motion.div
                  key="steal"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex items-center gap-2"
                >
                  <motion.span
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="text-2xl"
                  >
                    ⚡
                  </motion.span>
                  <span className="text-xl font-bold text-accent-500">
                    {team.name} يسرق!
                  </span>
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="text-2xl"
                  >
                    ⚡
                  </motion.span>
                </motion.div>
              ) : (
                <motion.div
                  key="turn"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="text-center"
                >
                  <span className="text-sm text-gray-400">دور</span>
                  <h2 className={`text-2xl font-bold text-${teamColor}`}>
                    {team.name}
                  </h2>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Streak indicator */}
          <AnimatePresence>
            {team.streak >= 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0, x: 20 }}
                className="flex items-center gap-1"
              >
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 0.5
                  }}
                  className="text-2xl"
                >
                  {streakEmoji}
                </motion.span>
                <div className="flex flex-col items-center">
                  <motion.span
                    key={team.streak}
                    initial={{ scale: 1.5 }}
                    animate={{ scale: 1 }}
                    className={`text-2xl font-bold font-mono ${streakColor}`}
                  >
                    {team.streak}
                  </motion.span>
                  <span className="text-xs text-gray-400">سلسلة</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Streak bonus message */}
        <AnimatePresence>
          {team.streak >= 3 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-center mt-2"
            >
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
                className={`text-sm ${streakColor}`}
              >
                {team.streak >= 5 ? '🌟 سلسلة أسطورية! 🌟' : '⚡ سلسلة ممتازة!'}
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
