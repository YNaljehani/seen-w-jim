import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useThemeStore = create(
  persist(
    (set) => ({
      isDark: true,
      toggleTheme: () => {
        // Add transition class to body
        document.body.classList.add('theme-transitioning')

        // Remove after animation completes
        setTimeout(() => {
          document.body.classList.remove('theme-transitioning')
        }, 500)

        set((state) => {
          const newIsDark = !state.isDark
          // Update body class for theme
          if (newIsDark) {
            document.body.classList.remove('light-mode')
          } else {
            document.body.classList.add('light-mode')
          }
          return { isDark: newIsDark }
        })
      },
      // Initialize theme on app load
      initTheme: () => {
        set((state) => {
          if (!state.isDark) {
            document.body.classList.add('light-mode')
          } else {
            document.body.classList.remove('light-mode')
          }
          return state
        })
      }
    }),
    {
      name: 'theme-storage',
    }
  )
)
