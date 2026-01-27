import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useThemeStore } from '../../stores/themeStore'
import { useSoundEffect } from '../../lib/sounds'
import { useHaptic } from '../../hooks/useHaptic'

const TUTORIAL_STEPS = [
  {
    id: 'welcome',
    title: 'أهلاً بك في سين وجيم! 🎮',
    description: 'لعبة الثقافة والتحدي للعائلة والأصدقاء',
    icon: '🏆',
    tip: 'اسحب لليسار للمتابعة'
  },
  {
    id: 'teams',
    title: 'فريقان يتنافسان',
    description: 'أنشئ فريقين وسمّهما. كل فريق يختار 3 فئات من أصل 16 فئة متنوعة.',
    icon: '👥',
    tip: 'يمكنك تعديل أسماء الفرق'
  },
  {
    id: 'categories',
    title: 'اختر فئاتك بعناية',
    description: 'اختر الفئات التي تتقنها! رياضة، تاريخ، جغرافيا، تقنية، وأكثر...',
    icon: '📚',
    tip: '6 فئات إجمالاً (3 لكل فريق)'
  },
  {
    id: 'gameplay',
    title: 'طريقة اللعب',
    description: 'اختر سؤالاً من اللوحة. لكل سؤال نقاط مختلفة (100، 200، 300، 500) حسب الصعوبة.',
    icon: '🎯',
    tip: 'الأسئلة الأصعب = نقاط أكثر'
  },
  {
    id: 'timer',
    title: 'الوقت محدود!',
    description: '60 ثانية للإجابة. إذا انتهى الوقت أو أخطأت، الفريق الآخر يحاول سرقة النقاط!',
    icon: '⏱️',
    tip: 'استغل وقتك بحكمة'
  },
  {
    id: 'powerups',
    title: 'وسائل المساعدة',
    description: '4 وسائل لكل فريق:\n🕳️ الحفرة - خصم نقاط من الخصم\n📞 اتصال بصديق\n✌️ جاوب جوابين\n😴 استريح',
    icon: '🎁',
    tip: 'استخدمها بذكاء!'
  },
  {
    id: 'ready',
    title: 'جاهز للتحدي؟',
    description: 'حان وقت اللعب! من سيكون البطل اليوم؟',
    icon: '🚀',
    tip: 'اضغط "ابدأ اللعب" للبدء'
  }
]

export default function Tutorial({ onComplete, onSkip }) {
  const { isDark } = useThemeStore()
  const { playClick } = useSoundEffect()
  const { lightTap, mediumTap } = useHaptic()
  const [currentStep, setCurrentStep] = useState(0)
  const [direction, setDirection] = useState(1) // 1 = forward, -1 = backward

  const step = TUTORIAL_STEPS[currentStep]
  const isLastStep = currentStep === TUTORIAL_STEPS.length - 1
  const isFirstStep = currentStep === 0

  const handleNext = () => {
    if (isLastStep) {
      onComplete()
      mediumTap()
    } else {
      setDirection(1)
      setCurrentStep(prev => prev + 1)
      playClick()
      lightTap()
    }
  }

  const handlePrev = () => {
    if (!isFirstStep) {
      setDirection(-1)
      setCurrentStep(prev => prev - 1)
      playClick()
      lightTap()
    }
  }

  const handleSkip = () => {
    playClick()
    onSkip()
  }

  // Swipe handling for mobile
  const handleTouchStart = (e) => {
    e.currentTarget.dataset.touchStartX = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const startX = parseFloat(e.currentTarget.dataset.touchStartX)
    const endX = e.changedTouches[0].clientX
    const diff = startX - endX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left - next
        handleNext()
      } else {
        // Swiped right - prev
        handlePrev()
      }
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        handleNext()
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        handlePrev()
      } else if (e.key === 'Escape') {
        handleSkip()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentStep])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-dark-bg/95 to-secondary-900/90 backdrop-blur-md" />

      {/* Content */}
      <div
        className="relative w-full max-w-md"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Skip button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={handleSkip}
          className="absolute -top-12 left-0 text-gray-400 hover:text-white transition-colors"
        >
          تخطي ←
        </motion.button>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-6">
          {TUTORIAL_STEPS.map((_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? 'w-8 bg-primary-500'
                  : index < currentStep
                    ? 'w-2 bg-primary-500/50'
                    : 'w-2 bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Card */}
        <div className={`rounded-3xl overflow-hidden ${isDark ? 'bg-dark-card' : 'bg-white'} shadow-2xl`}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="p-8"
            >
              {/* Icon */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className="text-7xl text-center mb-6"
              >
                {step.icon}
              </motion.div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-center mb-4">
                {step.title}
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-center leading-relaxed whitespace-pre-line mb-6">
                {step.description}
              </p>

              {/* Tip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`text-center p-3 rounded-xl ${isDark ? 'bg-dark-elevated' : 'bg-gray-100'}`}
              >
                <span className="text-sm text-primary-500">💡 {step.tip}</span>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className={`p-6 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="flex gap-4">
              {/* Back button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePrev}
                disabled={isFirstStep}
                className={`flex-1 py-4 rounded-xl font-bold transition-all ${
                  isFirstStep
                    ? 'opacity-30 cursor-not-allowed'
                    : isDark
                      ? 'bg-dark-elevated hover:bg-dark-bg'
                      : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                ← السابق
              </motion.button>

              {/* Next/Start button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNext}
                className={`flex-1 py-4 rounded-xl font-bold text-white transition-all ${
                  isLastStep
                    ? 'bg-gradient-to-r from-secondary-500 to-secondary-600'
                    : 'bg-gradient-to-r from-primary-500 to-primary-600'
                }`}
              >
                {isLastStep ? 'ابدأ اللعب 🎮' : 'التالي →'}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Swipe hint for mobile */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1 }}
          className="text-center text-gray-500 text-sm mt-4"
        >
          اسحب يميناً أو يساراً للتنقل
        </motion.p>
      </div>
    </motion.div>
  )
}

// Tooltip highlight component for in-game tutorials
export function TutorialHighlight({ target, message, position = 'bottom', onDismiss }) {
  const { isDark } = useThemeStore()

  const positionStyles = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2'
  }

  const arrowStyles = {
    top: 'top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent',
    left: 'left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent',
    right: 'right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent'
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`absolute ${positionStyles[position]} z-50`}
    >
      <div className={`relative px-4 py-3 rounded-xl ${
        isDark ? 'bg-primary-600' : 'bg-primary-500'
      } text-white shadow-lg max-w-xs`}>
        <p className="text-sm">{message}</p>
        <button
          onClick={onDismiss}
          className="mt-2 text-xs opacity-80 hover:opacity-100"
        >
          فهمت ✓
        </button>
        {/* Arrow */}
        <div
          className={`absolute w-0 h-0 border-8 ${arrowStyles[position]} ${
            isDark ? 'border-primary-600' : 'border-primary-500'
          }`}
        />
      </div>
    </motion.div>
  )
}

// First-time user check hook
export function useFirstTimeUser() {
  const [isFirstTime, setIsFirstTime] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem('seen-jeem-tutorial-v1')
    setIsFirstTime(!hasSeenTutorial)
    setIsLoading(false)
  }, [])

  const markTutorialComplete = () => {
    localStorage.setItem('seen-jeem-tutorial-v1', 'true')
    setIsFirstTime(false)
  }

  const resetTutorial = () => {
    localStorage.removeItem('seen-jeem-tutorial-v1')
    setIsFirstTime(true)
  }

  return { isFirstTime, isLoading, markTutorialComplete, resetTutorial }
}
