import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useGameStore } from '../../stores/gameStore'

export default function Timer() {
  const {
    timerSeconds,
    isTimerRunning,
    timerPaused,
    tickTimer,
    settings
  } = useGameStore()

  // Timer tick effect
  useEffect(() => {
    if (!isTimerRunning || timerPaused) return

    const interval = setInterval(() => {
      tickTimer()
    }, 1000)

    return () => clearInterval(interval)
  }, [isTimerRunning, timerPaused, tickTimer])

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

  // Circle dimensions
  const size = 120
  const strokeWidth = 8
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (percentage / 100) * circumference

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`relative ${isUrgent ? 'animate-pulse' : ''}`}
    >
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
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.3 }}
          style={{
            filter: isUrgent ? `drop-shadow(0 0 10px ${getColor()})` : 'none'
          }}
        />
      </svg>

      {/* Time display */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          key={timerSeconds}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          className={`text-3xl font-mono font-bold score-number ${
            isUrgent ? 'text-red-500' : ''
          }`}
          style={{ color: isUrgent ? undefined : getColor() }}
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
    </motion.div>
  )
}
