// Haptic Feedback Hook for mobile devices
import { useCallback } from 'react'

export function useHaptic() {
  // Check if vibration API is supported
  const isSupported = typeof navigator !== 'undefined' && 'vibrate' in navigator

  // Light tap feedback
  const lightTap = useCallback(() => {
    if (isSupported) {
      navigator.vibrate(10)
    }
  }, [isSupported])

  // Medium tap feedback
  const mediumTap = useCallback(() => {
    if (isSupported) {
      navigator.vibrate(25)
    }
  }, [isSupported])

  // Heavy tap feedback
  const heavyTap = useCallback(() => {
    if (isSupported) {
      navigator.vibrate(50)
    }
  }, [isSupported])

  // Success pattern - two short pulses
  const success = useCallback(() => {
    if (isSupported) {
      navigator.vibrate([30, 50, 30])
    }
  }, [isSupported])

  // Error pattern - one long pulse
  const error = useCallback(() => {
    if (isSupported) {
      navigator.vibrate(100)
    }
  }, [isSupported])

  // Warning pattern - three quick pulses
  const warning = useCallback(() => {
    if (isSupported) {
      navigator.vibrate([20, 30, 20, 30, 20])
    }
  }, [isSupported])

  // Notification pattern
  const notification = useCallback(() => {
    if (isSupported) {
      navigator.vibrate([50, 100, 50])
    }
  }, [isSupported])

  // Custom pattern
  const pattern = useCallback((vibrationPattern) => {
    if (isSupported) {
      navigator.vibrate(vibrationPattern)
    }
  }, [isSupported])

  // Stop any ongoing vibration
  const stop = useCallback(() => {
    if (isSupported) {
      navigator.vibrate(0)
    }
  }, [isSupported])

  return {
    isSupported,
    lightTap,
    mediumTap,
    heavyTap,
    success,
    error,
    warning,
    notification,
    pattern,
    stop
  }
}
