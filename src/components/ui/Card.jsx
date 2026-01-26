import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { useThemeStore } from '../../stores/themeStore'

export default function Card({
  children,
  className = '',
  animate = true,
  glow = false,
  ...props
}) {
  const { isDark } = useThemeStore()

  const Component = animate ? motion.div : 'div'

  return (
    <Component
      initial={animate ? { opacity: 0, y: 20 } : undefined}
      animate={animate ? { opacity: 1, y: 0 } : undefined}
      className={clsx(
        'rounded-2xl p-6',
        isDark ? 'bg-dark-card' : 'bg-white shadow-lg',
        glow && 'animate-glow',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
