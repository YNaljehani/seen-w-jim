import { motion } from 'framer-motion'
import { clsx } from 'clsx'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  ...props
}) {
  const baseClasses = 'font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2'

  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white btn-glow shadow-lg',
    secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white shadow-lg',
    teamA: 'bg-gradient-to-r from-teamA to-teamA-dark text-white shadow-lg',
    teamB: 'bg-gradient-to-r from-teamB to-teamB-dark text-white shadow-lg',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
    ghost: 'hover:bg-dark-elevated text-white',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={disabled ? undefined : onClick}
      className={clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  )
}
