import { motion } from 'framer-motion'
import { useThemeStore } from '../../stores/themeStore'

// Base skeleton element with shimmer animation
export function Skeleton({ className = '', variant = 'rect', width, height }) {
  const { isDark } = useThemeStore()

  const baseStyles = isDark
    ? 'bg-dark-elevated'
    : 'bg-gray-200'

  const variantStyles = {
    rect: 'rounded-lg',
    circle: 'rounded-full',
    text: 'rounded h-4',
    title: 'rounded h-6',
    button: 'rounded-xl h-12'
  }

  return (
    <motion.div
      className={`relative overflow-hidden ${baseStyles} ${variantStyles[variant]} ${className}`}
      style={{ width, height }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </motion.div>
  )
}

// Category card skeleton
export function CategorySkeleton() {
  const { isDark } = useThemeStore()

  return (
    <div className={`p-6 rounded-xl ${isDark ? 'bg-dark-card' : 'bg-white shadow-lg'}`}>
      <div className="flex flex-col items-center gap-3">
        <Skeleton variant="circle" width={48} height={48} />
        <Skeleton variant="text" width={80} />
      </div>
    </div>
  )
}

// Question card skeleton
export function QuestionSkeleton() {
  const { isDark } = useThemeStore()

  return (
    <div className={`w-full max-w-2xl rounded-2xl overflow-hidden ${isDark ? 'bg-dark-card' : 'bg-white shadow-xl'}`}>
      {/* Header */}
      <div className={`p-4 flex items-center justify-between ${isDark ? 'bg-dark-elevated' : 'bg-gray-100'}`}>
        <div className="flex items-center gap-3">
          <Skeleton variant="circle" width={40} height={40} />
          <Skeleton variant="text" width={100} />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton variant="rect" width={60} height={24} className="rounded-full" />
          <Skeleton variant="rect" width={80} height={24} className="rounded-full" />
        </div>
      </div>

      {/* Question body */}
      <div className="p-8">
        <div className="space-y-3 mb-8">
          <Skeleton variant="text" className="w-full" />
          <Skeleton variant="text" className="w-4/5" />
          <Skeleton variant="text" className="w-3/5" />
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} variant="button" className="w-full" />
          ))}
        </div>
      </div>
    </div>
  )
}

// Scoreboard skeleton
export function ScoreboardSkeleton() {
  const { isDark } = useThemeStore()

  return (
    <div className={`w-full flex items-center justify-between p-4 rounded-xl ${isDark ? 'bg-dark-card' : 'bg-white shadow-lg'}`}>
      <div className="flex-1 flex flex-col items-center gap-2">
        <Skeleton variant="text" width={80} />
        <Skeleton variant="title" width={60} />
      </div>
      <Skeleton variant="text" width={30} />
      <div className="flex-1 flex flex-col items-center gap-2">
        <Skeleton variant="text" width={80} />
        <Skeleton variant="title" width={60} />
      </div>
    </div>
  )
}

// Grid of category skeletons
export function CategoryGridSkeleton({ count = 8 }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
        >
          <CategorySkeleton />
        </motion.div>
      ))}
    </div>
  )
}

// Loading overlay with spinner
export function LoadingOverlay({ message = 'جاري التحميل...' }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="bg-dark-card p-8 rounded-2xl flex flex-col items-center gap-4"
      >
        <motion.div
          className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <p className="text-lg">{message}</p>
      </motion.div>
    </motion.div>
  )
}

export default Skeleton
