import { useEffect } from 'react'
import { useGameStore } from './stores/gameStore'
import { useThemeStore } from './stores/themeStore'
import Home from './components/Home'
import TeamSetup from './components/game/TeamSetup'
import CategorySelection from './components/game/CategorySelection'
import QuestionBoard from './components/game/QuestionBoard'
import GameBoard from './components/game/GameBoard'
import ResultsScreen from './components/game/ResultsScreen'

function App() {
  const { gameState, selectQuestion, loadCategories, isLoading } = useGameStore()
  const { isDark } = useThemeStore()

  // Load categories from Supabase on mount (falls back to default if unavailable)
  useEffect(() => {
    loadCategories()
  }, [loadCategories])

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove('light-mode')
    } else {
      document.body.classList.add('light-mode')
    }
  }, [isDark])

  const handleSelectQuestion = (categoryId, question) => {
    selectQuestion(categoryId, question)
  }

  const renderScreen = () => {
    switch (gameState) {
      case 'home':
        return <Home />
      case 'team_setup':
        return <TeamSetup />
      case 'category_selection_A':
      case 'category_selection_B':
        return <CategorySelection />
      case 'question_board':
        return <QuestionBoard onSelectQuestion={handleSelectQuestion} />
      case 'playing':
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
