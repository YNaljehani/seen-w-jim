import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '../../stores/gameStore'
import { useThemeStore } from '../../stores/themeStore'
import { useSoundEffect } from '../../lib/sounds'
import { useHaptic } from '../../hooks/useHaptic'
import Modal from '../ui/Modal'

const POWERUPS = {
  pit: {
    nameAr: 'الحفرة',
    icon: '🕳️',
    description: 'إذا جاوبت صح، النقاط تنخصم من الفريق الثاني',
    timing: 'قبل السؤال',
    color: 'from-purple-500 to-purple-700',
    glowColor: 'rgba(168, 85, 247, 0.5)'
  },
  callFriend: {
    nameAr: 'اتصال بصديق',
    icon: '📞',
    description: 'اتصل بصديق للمساعدة - يوقف المؤقت',
    timing: 'أثناء السؤال',
    color: 'from-blue-500 to-blue-700',
    glowColor: 'rgba(59, 130, 246, 0.5)'
  },
  doubleAnswer: {
    nameAr: 'جاوب جوابين',
    icon: '✌️',
    description: 'جاوب مرتين على نفس السؤال',
    timing: 'أثناء السؤال',
    color: 'from-green-500 to-green-700',
    glowColor: 'rgba(34, 197, 94, 0.5)'
  },
  rest: {
    nameAr: 'استريح',
    icon: '😴',
    description: 'امنع لاعب من الفريق الثاني من المشاركة',
    timing: 'أثناء السؤال',
    color: 'from-orange-500 to-orange-700',
    glowColor: 'rgba(249, 115, 22, 0.5)'
  }
}

export default function PowerUpPanel() {
  const { currentTeam, teamA, teamB, usePowerUp, isStealMode, activePowerUp } = useGameStore()
  const { isDark } = useThemeStore()
  const { playPowerUp, playClick } = useSoundEffect()
  const { mediumTap, success } = useHaptic()
  const [showConfirm, setShowConfirm] = useState(null)
  const [hoveredPowerUp, setHoveredPowerUp] = useState(null)

  const team = currentTeam === 'A' ? teamA : teamB
  const teamColor = currentTeam === 'A' ? 'teamA' : 'teamB'

  const handleUsePowerUp = (powerUpKey) => {
    playClick()
    mediumTap()
    setShowConfirm(powerUpKey)
  }

  const confirmPowerUp = () => {
    if (showConfirm) {
      playPowerUp()
      success()
      usePowerUp(showConfirm)
      setShowConfirm(null)
    }
  }

  if (isStealMode) {
    return null // No power-ups during steal mode
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className={`p-4 rounded-xl ${isDark ? 'bg-dark-card' : 'bg-white shadow-lg'}`}
      >
        <h3 className={`text-${teamColor} font-bold mb-3 text-center`}>
          وسائل المساعدة
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {Object.entries(POWERUPS).map(([key, powerUp]) => {
            const isUsed = team.powerUps[key].used
            const isActive = activePowerUp === key
            const isHovered = hoveredPowerUp === key

            return (
              <div key={key} className="relative">
                <motion.button
                  whileHover={!isUsed ? {
                    scale: 1.15,
                    rotate: [0, -5, 5, 0]
                  } : {}}
                  whileTap={!isUsed ? { scale: 0.9 } : {}}
                  onClick={() => !isUsed && handleUsePowerUp(key)}
                  onHoverStart={() => setHoveredPowerUp(key)}
                  onHoverEnd={() => setHoveredPowerUp(null)}
                  disabled={isUsed}
                  animate={isActive ? {
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      `0 0 0 ${powerUp.glowColor}`,
                      `0 0 30px ${powerUp.glowColor}`,
                      `0 0 0 ${powerUp.glowColor}`
                    ]
                  } : {}}
                  transition={isActive ? {
                    duration: 1,
                    repeat: Infinity
                  } : {
                    type: 'spring',
                    stiffness: 400
                  }}
                  className={`
                    w-14 h-14 rounded-xl flex items-center justify-center text-2xl
                    transition-all duration-300 relative overflow-hidden
                    ${isUsed
                      ? 'bg-gray-800 opacity-30 cursor-not-allowed'
                      : isActive
                        ? `bg-gradient-to-br ${powerUp.color}`
                        : isDark
                          ? 'bg-dark-elevated hover:bg-primary-500/20 border border-gray-700 hover:border-primary-500'
                          : 'bg-gray-100 hover:bg-primary-100 border-2 border-gray-200 hover:border-primary-500'
                    }
                  `}
                >
                  {/* Shine effect on hover */}
                  {!isUsed && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={isHovered ? { x: '100%' } : { x: '-100%' }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                  <motion.span
                    animate={!isUsed ? {
                      y: [0, -2, 0]
                    } : {}}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: Math.random() * 2
                    }}
                  >
                    {powerUp.icon}
                  </motion.span>
                  {/* Used X mark */}
                  {isUsed && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/50"
                    >
                      <span className="text-red-500 text-3xl">✗</span>
                    </motion.div>
                  )}
                </motion.button>

                {/* Tooltip on hover */}
                <AnimatePresence>
                  {isHovered && !isUsed && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.9 }}
                      className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-2 rounded-lg whitespace-nowrap z-50 ${
                        isDark ? 'bg-dark-elevated' : 'bg-gray-800'
                      } text-white text-sm`}
                    >
                      {powerUp.nameAr}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-dark-elevated" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* Confirmation Modal with enhanced animations */}
      <Modal
        isOpen={!!showConfirm}
        onClose={() => setShowConfirm(null)}
        title="تأكيد استخدام الوسيلة"
      >
        {showConfirm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
              className="text-6xl mb-4"
            >
              {POWERUPS[showConfirm].icon}
            </motion.div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-bold mb-2"
            >
              {POWERUPS[showConfirm].nameAr}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 mb-2"
            >
              {POWERUPS[showConfirm].description}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-yellow-500 mb-6"
            >
              التوقيت: {POWERUPS[showConfirm].timing}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              <button
                onClick={() => setShowConfirm(null)}
                className={`flex-1 py-3 rounded-xl font-bold ${
                  isDark ? 'bg-dark-elevated hover:bg-dark-bg' : 'bg-gray-200 hover:bg-gray-300'
                } transition-colors`}
              >
                إلغاء
              </button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={confirmPowerUp}
                className={`flex-1 py-3 rounded-xl font-bold bg-gradient-to-r ${POWERUPS[showConfirm].color} text-white`}
              >
                استخدم
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </Modal>
    </>
  )
}
