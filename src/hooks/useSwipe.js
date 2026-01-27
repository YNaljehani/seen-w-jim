import { useState, useRef, useCallback } from 'react'

const SWIPE_THRESHOLD = 50 // Minimum distance for a swipe
const VELOCITY_THRESHOLD = 0.3 // Minimum velocity for a swipe

export function useSwipe({
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  threshold = SWIPE_THRESHOLD
}) {
  const touchStart = useRef({ x: 0, y: 0, time: 0 })
  const [swiping, setSwiping] = useState(false)

  const handleTouchStart = useCallback((e) => {
    const touch = e.touches[0]
    touchStart.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    }
    setSwiping(true)
  }, [])

  const handleTouchMove = useCallback((e) => {
    if (!swiping) return
    // Can add visual feedback here if needed
  }, [swiping])

  const handleTouchEnd = useCallback((e) => {
    if (!swiping) return
    setSwiping(false)

    const touch = e.changedTouches[0]
    const deltaX = touch.clientX - touchStart.current.x
    const deltaY = touch.clientY - touchStart.current.y
    const deltaTime = Date.now() - touchStart.current.time

    const absX = Math.abs(deltaX)
    const absY = Math.abs(deltaY)
    const velocity = Math.max(absX, absY) / deltaTime

    // Determine if it's a horizontal or vertical swipe
    if (absX > absY && absX > threshold) {
      // Horizontal swipe
      if (deltaX > 0 && onSwipeRight) {
        onSwipeRight({ deltaX, deltaY, velocity })
      } else if (deltaX < 0 && onSwipeLeft) {
        onSwipeLeft({ deltaX, deltaY, velocity })
      }
    } else if (absY > absX && absY > threshold) {
      // Vertical swipe
      if (deltaY > 0 && onSwipeDown) {
        onSwipeDown({ deltaX, deltaY, velocity })
      } else if (deltaY < 0 && onSwipeUp) {
        onSwipeUp({ deltaX, deltaY, velocity })
      }
    }
  }, [swiping, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, threshold])

  const swipeHandlers = {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd
  }

  return { swipeHandlers, swiping }
}

// Hook for swipeable cards (like Tinder-style)
export function useSwipeableCard({
  onSwipeLeft,
  onSwipeRight,
  onSwipeComplete
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const startPos = useRef({ x: 0, y: 0 })

  const handleDragStart = useCallback((e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    startPos.current = { x: clientX, y: clientY }
    setIsDragging(true)
  }, [])

  const handleDrag = useCallback((e) => {
    if (!isDragging) return

    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY

    const deltaX = clientX - startPos.current.x
    const deltaY = clientY - startPos.current.y

    setPosition({ x: deltaX, y: deltaY })
    setRotation(deltaX * 0.1) // Rotate based on horizontal movement
  }, [isDragging])

  const handleDragEnd = useCallback(() => {
    setIsDragging(false)

    const threshold = 100

    if (position.x > threshold) {
      // Swiped right
      onSwipeRight?.()
      onSwipeComplete?.('right')
    } else if (position.x < -threshold) {
      // Swiped left
      onSwipeLeft?.()
      onSwipeComplete?.('left')
    } else {
      // Return to center
      setPosition({ x: 0, y: 0 })
      setRotation(0)
    }
  }, [position.x, onSwipeLeft, onSwipeRight, onSwipeComplete])

  const reset = useCallback(() => {
    setPosition({ x: 0, y: 0 })
    setRotation(0)
    setIsDragging(false)
  }, [])

  return {
    position,
    rotation,
    isDragging,
    handlers: {
      onMouseDown: handleDragStart,
      onMouseMove: handleDrag,
      onMouseUp: handleDragEnd,
      onMouseLeave: handleDragEnd,
      onTouchStart: handleDragStart,
      onTouchMove: handleDrag,
      onTouchEnd: handleDragEnd
    },
    reset
  }
}

export default useSwipe
