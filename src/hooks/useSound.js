import { useCallback, useEffect, useRef } from 'react'
import { Howl } from 'howler'
import { useAudioStore } from '../stores/audioStore'

const soundCache = new Map()

export function useSound(src, options = {}) {
  const soundRef = useRef(null)
  const { getEffectiveVolume, sfxEnabled } = useAudioStore()

  useEffect(() => {
    // Check cache first
    if (soundCache.has(src)) {
      soundRef.current = soundCache.get(src)
    } else {
      soundRef.current = new Howl({
        src: [src],
        volume: options.volume ?? getEffectiveVolume('sfx'),
        loop: options.loop ?? false,
        preload: true,
        ...options
      })
      soundCache.set(src, soundRef.current)
    }

    return () => {
      // Don't unload from cache, just stop if playing
      soundRef.current?.stop()
    }
  }, [src])

  const play = useCallback(() => {
    if (!sfxEnabled || !soundRef.current) return
    soundRef.current.volume(getEffectiveVolume('sfx'))
    soundRef.current.play()
  }, [sfxEnabled, getEffectiveVolume])

  const stop = useCallback(() => {
    soundRef.current?.stop()
  }, [])

  const pause = useCallback(() => {
    soundRef.current?.pause()
  }, [])

  return { play, stop, pause }
}

// Preload common sounds
export function preloadSounds() {
  const sounds = [
    '/sounds/correct.mp3',
    '/sounds/wrong.mp3',
    '/sounds/tick.mp3',
    '/sounds/powerup.mp3',
  ]

  sounds.forEach(src => {
    if (!soundCache.has(src)) {
      soundCache.set(src, new Howl({ src: [src], preload: true }))
    }
  })
}
