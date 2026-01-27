import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useGameStore } from '../../stores/gameStore'
import { useSoundEffect } from '../../lib/sounds'
import { useHaptic } from '../../hooks/useHaptic'

export default function Timer() {
  const {
    timerSeconds,
    isTimerRunning,
    timerPaused,
    tickTimer,
    settings
  } = useGameStore()

  const { playTick, playUrgentTick, playTimeout } = useSoundEffect()
  const { warning } = useHaptic()
  const prevSeconds = useRef(timerSeconds)

  // Timer tick effect
  useEffect(() => {
    if (!isTimerRunning || timerPaused) return

    const interval = setInterval(() => {
      tickTimer()
    }, 1000)

    return () => clearInterval(interval)
  }, [isTimerRunning, timerPaused, tickTimer])

  // Sound effects on tick
  useEffect(() => {
    if (!isTimerRunning || timerPaused) return
    if (prevSeconds.current === timerSeconds) return

    prevSeconds.current = timerSeconds

    // Play sounds based on time remaining
    if (timerSeconds <= 0) {
      playTimeout()
      warning()
    } else if (timerSeconds <= 5) {
      playUrgentTick()
      warning()
    } else if (timerSeconds <= 10) {
      playUrgentTick()
    }
  }, [timerSeconds, isTimerRunning, timerPaused, playTick, playUrgentTick, playTimeout, warning])

  // Calculate percentage for circular progress
  const maxTime = settings.timerA
  const percentage = (timerSeconds / maxTime) * 100

  // Determine color based on time remaining
  const getColor = () => {
    if (timerSeconds > 20) return '#00C853' // Green
    if (timerSeconds > 10) return '#FFC107' // Yellow
    return '#FF6B6B' // Red
  }

  const isUrgent = timerSeconds <= 10
  const isCritical = timerSeconds <= 5

  // Circle dimensions
  const size = 120
  const strokeWidth = 8
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (percentage / 100) * circumference

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: isCritical ? [1, 1.05, 1] : 1
      }}
      transition={{
        scale: {
          duration: 0.5,
          repeat: isCritical ? Infinity : 0,
          repeatType: 'reverse'
        }
      }}
      className="relative"
    >
      {/* Glow effect for urgent state */}
      {isUrgent && (
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              `0 0 20px ${getColor()}40`,
              `0 0 40px ${getColor()}60`,
              `0 0 20px ${getColor()}40`
            ]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      )}

      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#1A1A25"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={getColor()}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          initial={false}
          animate={{
            strokeDashoffset: offset,
            strokeWidth: isCritical ? [8, 10, 8] : 8
          }}
          transition={{
            strokeDashoffset: { duration: 0.3 },
            strokeWidth: { duration: 0.3, repeat: isCritical ? Infinity : 0 }
          }}
          style={{
            filter: isUrgent ? `drop-shadow(0 0 10px ${getColor()})` : 'none'
          }}
        />
      </svg>

      {/* Time display */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          key={timerSeconds}
          initial={{ scale: 1.3, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`text-3xl font-mono font-bold score-number ${
            isCritical ? 'text-red-500' : isUrgent ? 'text-yellow-500' : ''
          }`}
          style={{ color: !isUrgent ? getColor() : undefined }}
        >
          {timerSeconds}
        </motion.span>
      </div>

      {/* Paused indicator */}
      {timerPaused && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full"
        >
          <span className="text-2xl">⏸️</span>
        </motion.div>
      )}

      {/* Critical warning ring */}
      {isCritical && !timerPaused && (
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-red-500"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [1, 0, 1]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity
          }}
        />
      )}
    </motion.div>
  )
}
