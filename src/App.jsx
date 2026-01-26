import { useState, useEffect } from 'react'
import { useGameStore } from './stores/gameStore'
import { useThemeStore } from './stores/themeStore'
import Home from './components/Home'
import TeamSetup from './components/game/TeamSetup'
import CategorySelection from './components/game/CategorySelection'
import GameBoard from './components/game/GameBoard'
import ResultsScreen from './components/game/ResultsScreen'

function App() {
  const { gameState } = useGameStore()
  const { isDark } = useThemeStore()

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove('light-mode')
    } else {
      document.body.classList.add('light-mode')
    }
  }, [isDark])

  const renderScreen = () => {
    switch (gameState) {
      case 'home':
        return <Home />
      case 'team_setup':
        return <TeamSetup />
      case 'category_selection_A':
      case 'category_selection_B':
        return <CategorySelection />
      case 'playing':
      case 'question_display':
      case 'team_a_answering':
      case 'team_b_stealing':
      case 'reveal_answer':
        return <GameBoard />
      case 'game_over':
        return <ResultsScreen />
      default:
        return <Home />
    }
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-dark-bg' : 'bg-gray-100'}`}>
      {renderScreen()}
    </div>
  )
}

export default App
