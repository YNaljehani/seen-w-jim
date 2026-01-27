import { useEffect, useRef } from 'react'
import { motion, AnimatePresence, useDragControls } from 'framer-motion'
import { useThemeStore } from '../../stores/themeStore'

export default function BottomSheet({
  isOpen,
  onClose,
  title,
  children,
  snapPoints = [0.5, 0.9], // Percentage of screen height
  initialSnap = 0
}) {
  const { isDark } = useThemeStore()
  const dragControls = useDragControls()
  const sheetRef = useRef(null)
  const currentSnapIndex = useRef(initialSnap)

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleDragEnd = (event, info) => {
    const velocity = info.velocity.y
    const offset = info.offset.y

    // If dragged down fast or far enough, close
    if (velocity > 500 || offset > 150) {
      onClose()
      return
    }

    // If dragged up fast, go to higher snap point
    if (velocity < -500 && currentSnapIndex.current < snapPoints.length - 1) {
      currentSnapIndex.current += 1
      return
    }

    // Otherwise, snap to nearest point based on position
    // This is simplified - in production you'd calculate actual positions
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Sheet */}
          <motion.div
            ref={sheetRef}
            initial={{ y: '100%' }}
            animate={{ y: `${(1 - snapPoints[currentSnapIndex.current]) * 100}%` }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            drag="y"
            dragControls={dragControls}
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className={`fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl ${
              isDark ? 'bg-dark-card' : 'bg-white'
            } shadow-2xl`}
            style={{ maxHeight: '90vh', touchAction: 'none' }}
          >
            {/* Drag Handle */}
            <div
              className="flex justify-center py-3 cursor-grab active:cursor-grabbing"
              onPointerDown={(e) => dragControls.start(e)}
            >
              <motion.div
                className={`w-12 h-1.5 rounded-full ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`}
                whileHover={{ scaleX: 1.2 }}
              />
            </div>

            {/* Header */}
            {title && (
              <div className="px-6 pb-4 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">{title}</h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="text-2xl text-gray-400 hover:text-white transition-colors p-2"
                  >
                    ✕
                  </motion.button>
                </div>
              </div>
            )}

            {/* Content */}
            <div className="px-6 py-4 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 100px)' }}>
              {children}
            </div>

            {/* Safe area padding for iOS */}
            <div className="h-safe-area-inset-bottom" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// Simple bottom sheet for actions
export function ActionSheet({ isOpen, onClose, actions }) {
  const { isDark } = useThemeStore()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className={`fixed bottom-0 left-0 right-0 z-50 p-4 ${
              isDark ? 'bg-dark-card' : 'bg-white'
            } rounded-t-3xl shadow-2xl`}
          >
            {/* Drag Handle */}
            <div className="flex justify-center mb-4">
              <div className={`w-12 h-1.5 rounded-full ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`} />
            </div>

            {/* Actions */}
            <div className="space-y-2 mb-4">
              {actions.map((action, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    action.onClick()
                    onClose()
                  }}
                  className={`w-full p-4 rounded-xl flex items-center gap-3 transition-colors ${
                    action.variant === 'danger'
                      ? 'text-red-500 hover:bg-red-500/10'
                      : isDark
                        ? 'hover:bg-dark-elevated'
                        : 'hover:bg-gray-100'
                  }`}
                >
                  {action.icon && <span className="text-2xl">{action.icon}</span>}
                  <span className="font-medium">{action.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Cancel Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className={`w-full p-4 rounded-xl font-bold ${
                isDark ? 'bg-dark-elevated hover:bg-dark-bg' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              إلغاء
            </motion.button>

            {/* Safe area */}
            <div className="h-6" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
