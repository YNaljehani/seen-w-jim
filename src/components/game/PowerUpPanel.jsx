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
    timing: 'قبل السؤال'
  },
  callFriend: {
    nameAr: 'اتصال بصديق',
    icon: '📞',
    description: 'اتصل بصديق للمساعدة - يوقف المؤقت',
    timing: 'أثناء السؤال'
  },
  doubleAnswer: {
    nameAr: 'جاوب جوابين',
    icon: '✌️',
    description: 'جاوب مرتين على نفس السؤال',
    timing: 'أثناء السؤال'
  },
  rest: {
    nameAr: 'استريح',
    icon: '😴',
    description: 'امنع لاعب من الفريق الثاني من المشاركة',
    timing: 'أثناء السؤال'
  }
}

export default function PowerUpPanel() {
  const { currentTeam, teamA, teamB, usePowerUp, isStealMode } = useGameStore()
  const { isDark } = useThemeStore()
  const { playPowerUp, playClick } = useSoundEffect()
  const { mediumTap, success } = useHaptic()
  const [showConfirm, setShowConfirm] = useState(null)

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
        <div className="flex flex-wrap justify-center gap-2">
          {Object.entries(POWERUPS).map(([key, powerUp]) => {
            const isUsed = team.powerUps[key].used

            return (
              <motion.button
                key={key}
                whileHover={!isUsed ? { scale: 1.1 } : {}}
                whileTap={!isUsed ? { scale: 0.9 } : {}}
                onClick={() => !isUsed && handleUsePowerUp(key)}
                disabled={isUsed}
                className={`
                  w-14 h-14 rounded-xl flex items-center justify-center text-2xl
                  transition-all duration-300
                  ${isUsed
                    ? 'bg-gray-800 opacity-30 cursor-not-allowed'
                    : isDark
                      ? 'bg-dark-elevated hover:bg-primary-500/20 border border-gray-700 hover:border-primary-500'
                      : 'bg-gray-100 hover:bg-primary-100 border-2 border-gray-200 hover:border-primary-500'
                  }
                `}
                title={`${powerUp.nameAr} - ${powerUp.description}`}
              >
                {powerUp.icon}
              </motion.button>
            )
          })}
        </div>
      </motion.div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={!!showConfirm}
        onClose={() => setShowConfirm(null)}
        title="تأكيد استخدام الوسيلة"
      >
        {showConfirm && (
          <div className="text-center">
            <div className="text-5xl mb-4">{POWERUPS[showConfirm].icon}</div>
            <h3 className="text-2xl font-bold mb-2">{POWERUPS[showConfirm].nameAr}</h3>
            <p className="text-gray-400 mb-2">{POWERUPS[showConfirm].description}</p>
            <p className="text-sm text-yellow-500 mb-6">
              التوقيت: {POWERUPS[showConfirm].timing}
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowConfirm(null)}
                className={`flex-1 py-3 rounded-xl font-bold ${
                  isDark ? 'bg-dark-elevated hover:bg-dark-bg' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                إلغاء
              </button>
              <button
                onClick={confirmPowerUp}
                className="flex-1 py-3 rounded-xl font-bold bg-primary-500 hover:bg-primary-600 text-white"
              >
                استخدم
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}
