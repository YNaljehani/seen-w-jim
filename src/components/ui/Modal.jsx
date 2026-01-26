import { motion, AnimatePresence } from 'framer-motion'
import { useThemeStore } from '../../stores/themeStore'

export default function Modal({ isOpen, onClose, title, children }) {
  const { isDark } = useThemeStore()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div
              className={`w-full max-w-md rounded-2xl p-6 ${
                isDark ? 'bg-dark-card' : 'bg-white'
              }`}
            >
              {/* Header */}
              {title && (
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">{title}</h2>
                  <button
                    onClick={onClose}
                    className="text-2xl text-gray-400 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>
              )}

              {/* Content */}
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
