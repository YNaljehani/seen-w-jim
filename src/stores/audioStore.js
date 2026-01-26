import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAudioStore = create(
  persist(
    (set, get) => ({
      masterVolume: 0.8,
      musicVolume: 0.3,
      sfxVolume: 1.0,
      musicEnabled: true,
      sfxEnabled: true,

      setMasterVolume: (volume) => set({ masterVolume: volume }),
      setMusicVolume: (volume) => set({ musicVolume: volume }),
      setSfxVolume: (volume) => set({ sfxVolume: volume }),
      toggleMusic: () => set((state) => ({ musicEnabled: !state.musicEnabled })),
      toggleSfx: () => set((state) => ({ sfxEnabled: !state.sfxEnabled })),

      getEffectiveVolume: (type) => {
        const state = get()
        if (type === 'music') {
          return state.musicEnabled ? state.masterVolume * state.musicVolume : 0
        }
        return state.sfxEnabled ? state.masterVolume * state.sfxVolume : 0
      }
    }),
    {
      name: 'audio-storage',
    }
  )
)
