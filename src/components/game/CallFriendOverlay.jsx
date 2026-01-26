import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '../../stores/gameStore'

export default function CallFriendOverlay() {
  const {
    showCallOverlay,
    callTimerSeconds,
    tickCallTimer,
    endCallFriend
  } = useGameStore()

  // Call timer tick effect
  useEffect(() => {
    if (!showCallOverlay) return

    const interval = setInterval(() => {
      tickCallTimer()
    }, 1000)

    return () => clearInterval(interval)
  }, [showCallOverlay, tickCallTimer])

  return (
    <AnimatePresence>
      {showCallOverlay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-dark-card p-8 rounded-2xl text-center max-w-md mx-4"
          >
            {/* Phone Icon */}
            <motion.div
              animate={{
                rotate: [0, -10, 10, -10, 10, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="text-7xl mb-6"
            >
              📞
            </motion.div>

            <h2 className="text-3xl font-bold mb-2">اتصال بصديق</h2>
            <p className="text-gray-400 mb-6">المؤقت الأساسي متوقف</p>

            {/* Call Timer */}
            <div className="mb-8">
              <div className="text-6xl font-mono font-bold text-primary-500 score-number">
                {callTimerSeconds}
              </div>
              <p className="text-gray-500 mt-2">ثانية متبقية</p>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 bg-dark-elevated rounded-full overflow-hidden mb-8">
              <motion.div
                className="h-full bg-primary-500"
                initial={{ width: '100%' }}
                animate={{ width: `${(callTimerSeconds / 60) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* End Call Button */}
            <button
              onClick={endCallFriend}
              className="w-full py-4 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-xl transition-colors"
            >
              إنهاء المكالمة
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
