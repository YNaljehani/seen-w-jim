import { useEffect, useRef, useCallback, useState } from 'react'

export function useTimer(callback, delay, isActive) {
  const savedCallback = useRef(callback)

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval
  useEffect(() => {
    if (!isActive || delay === null) return

    const tick = () => savedCallback.current()
    const id = setInterval(tick, delay)

    return () => clearInterval(id)
  }, [delay, isActive])
}

export function useCountdown(initialSeconds, onComplete) {
  const [seconds, setSeconds] = useState(initialSeconds)
  const [isRunning, setIsRunning] = useState(false)

  const start = useCallback(() => setIsRunning(true), [])
  const pause = useCallback(() => setIsRunning(false), [])
  const reset = useCallback(() => {
    setSeconds(initialSeconds)
    setIsRunning(false)
  }, [initialSeconds])

  useTimer(
    () => {
      if (seconds > 0) {
        setSeconds(s => s - 1)
      } else {
        setIsRunning(false)
        onComplete?.()
      }
    },
    1000,
    isRunning
  )

  return { seconds, isRunning, start, pause, reset }
}
