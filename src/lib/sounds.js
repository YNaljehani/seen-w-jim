// Sound Manager using Web Audio API
// Creates synthetic sounds for game feedback

class SoundManager {
  constructor() {
    this.audioContext = null
    this.enabled = true
    this.volume = 0.5
  }

  init() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
    }
    // Resume context if suspended (required for some browsers)
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume()
    }
  }

  setEnabled(enabled) {
    this.enabled = enabled
  }

  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume))
  }

  // Create oscillator-based sound
  playTone(frequency, duration, type = 'sine', fadeOut = true) {
    if (!this.enabled) return
    this.init()

    const oscillator = this.audioContext.createOscillator()
    const gainNode = this.audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    oscillator.frequency.value = frequency
    oscillator.type = type
    gainNode.gain.value = this.volume

    if (fadeOut) {
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        this.audioContext.currentTime + duration
      )
    }

    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + duration)
  }

  // Correct answer - cheerful ascending arpeggio
  playCorrect() {
    if (!this.enabled) return
    this.init()

    const notes = [523.25, 659.25, 783.99, 1046.50] // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      setTimeout(() => {
        this.playTone(freq, 0.15, 'sine')
      }, i * 80)
    })
  }

  // Wrong answer - descending buzz
  playWrong() {
    if (!this.enabled) return
    this.init()

    const oscillator = this.audioContext.createOscillator()
    const gainNode = this.audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    oscillator.frequency.value = 200
    oscillator.type = 'sawtooth'
    gainNode.gain.value = this.volume * 0.3

    oscillator.frequency.exponentialRampToValueAtTime(
      100,
      this.audioContext.currentTime + 0.3
    )
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + 0.3
    )

    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + 0.3)
  }

  // Timer tick - soft click
  playTick() {
    if (!this.enabled) return
    this.init()

    const oscillator = this.audioContext.createOscillator()
    const gainNode = this.audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    oscillator.frequency.value = 800
    oscillator.type = 'sine'
    gainNode.gain.value = this.volume * 0.2

    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + 0.05
    )

    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + 0.05)
  }

  // Urgent tick - louder, higher
  playUrgentTick() {
    if (!this.enabled) return
    this.init()

    const oscillator = this.audioContext.createOscillator()
    const gainNode = this.audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    oscillator.frequency.value = 1200
    oscillator.type = 'square'
    gainNode.gain.value = this.volume * 0.3

    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + 0.08
    )

    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + 0.08)
  }

  // Timeout alarm
  playTimeout() {
    if (!this.enabled) return
    this.init()

    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        this.playTone(440, 0.15, 'square')
      }, i * 200)
    }
  }

  // Button click
  playClick() {
    if (!this.enabled) return
    this.init()

    this.playTone(600, 0.05, 'sine')
  }

  // Power-up activation - magical ascending
  playPowerUp() {
    if (!this.enabled) return
    this.init()

    const notes = [392, 523.25, 659.25, 783.99, 1046.50] // G4, C5, E5, G5, C6
    notes.forEach((freq, i) => {
      setTimeout(() => {
        this.playTone(freq, 0.1, 'triangle')
      }, i * 50)
    })
  }

  // Steal mode activation
  playSteal() {
    if (!this.enabled) return
    this.init()

    this.playTone(300, 0.1, 'sawtooth')
    setTimeout(() => {
      this.playTone(400, 0.1, 'sawtooth')
    }, 100)
    setTimeout(() => {
      this.playTone(350, 0.2, 'sawtooth')
    }, 200)
  }

  // Win celebration - fanfare
  playWin() {
    if (!this.enabled) return
    this.init()

    const melody = [
      { freq: 523.25, dur: 0.15 }, // C5
      { freq: 523.25, dur: 0.15 }, // C5
      { freq: 523.25, dur: 0.15 }, // C5
      { freq: 523.25, dur: 0.4 },  // C5
      { freq: 415.30, dur: 0.4 },  // Ab4
      { freq: 466.16, dur: 0.4 },  // Bb4
      { freq: 523.25, dur: 0.2 },  // C5
      { freq: 466.16, dur: 0.1 },  // Bb4
      { freq: 523.25, dur: 0.6 },  // C5
    ]

    let time = 0
    melody.forEach(({ freq, dur }) => {
      setTimeout(() => {
        this.playTone(freq, dur, 'triangle')
      }, time * 1000)
      time += dur
    })
  }

  // Game start
  playGameStart() {
    if (!this.enabled) return
    this.init()

    const notes = [261.63, 329.63, 392.00, 523.25] // C4, E4, G4, C5
    notes.forEach((freq, i) => {
      setTimeout(() => {
        this.playTone(freq, 0.2, 'triangle')
      }, i * 150)
    })
  }

  // Question reveal
  playReveal() {
    if (!this.enabled) return
    this.init()

    this.playTone(400, 0.1, 'sine')
    setTimeout(() => {
      this.playTone(600, 0.15, 'sine')
    }, 100)
  }
}

// Singleton instance
export const soundManager = new SoundManager()

// React hook for using sounds
import { useCallback, useEffect } from 'react'
import { useAudioStore } from '../stores/audioStore'

export function useSoundEffect() {
  const { sfxEnabled, getEffectiveVolume } = useAudioStore()

  useEffect(() => {
    soundManager.setEnabled(sfxEnabled)
    soundManager.setVolume(getEffectiveVolume('sfx'))
  }, [sfxEnabled, getEffectiveVolume])

  const playCorrect = useCallback(() => soundManager.playCorrect(), [])
  const playWrong = useCallback(() => soundManager.playWrong(), [])
  const playTick = useCallback(() => soundManager.playTick(), [])
  const playUrgentTick = useCallback(() => soundManager.playUrgentTick(), [])
  const playTimeout = useCallback(() => soundManager.playTimeout(), [])
  const playClick = useCallback(() => soundManager.playClick(), [])
  const playPowerUp = useCallback(() => soundManager.playPowerUp(), [])
  const playSteal = useCallback(() => soundManager.playSteal(), [])
  const playWin = useCallback(() => soundManager.playWin(), [])
  const playGameStart = useCallback(() => soundManager.playGameStart(), [])
  const playReveal = useCallback(() => soundManager.playReveal(), [])

  return {
    playCorrect,
    playWrong,
    playTick,
    playUrgentTick,
    playTimeout,
    playClick,
    playPowerUp,
    playSteal,
    playWin,
    playGameStart,
    playReveal
  }
}
