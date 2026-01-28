import { create } from 'zustand'
import { defaultCategories } from '../data/defaultQuestions'
import { fetchCategories, generateAIQuestions, saveQuestion } from '../services/questionService'
import { canUseSupabase } from '../lib/supabase'

const initialPowerUps = {
  pit: { used: false, activeForQuestion: null },
  callFriend: { used: false },
  doubleAnswer: { used: false, attemptsRemaining: 0 },
  rest: { used: false, blockedPlayer: null }
}

const initialTeam = (name) => ({
  name,
  score: 0,
  powerUps: { ...initialPowerUps },
  selectedCategories: [],
  streak: 0,
  maxStreak: 0,
  correctAnswers: 0,
  wrongAnswers: 0
})

export const useGameStore = create((set, get) => ({
  // Game State
  gameState: 'home',
  roomCode: '',

  // Teams
  teamA: initialTeam('الفريق الأول'),
  teamB: initialTeam('الفريق الثاني'),
  currentTeam: 'A',
  isStealMode: false,

  // Categories & Questions
  availableCategories: defaultCategories,
  selectedCategories: [],
  currentQuestion: null,
  answeredQuestions: [],
  pickingTeam: 'A', // Tracks which team originally picked the question (for alternation)

  // Loading state
  isLoading: false,
  loadError: null,
  isUsingSupabase: false,

  // Timer
  timerSeconds: 60,
  isTimerRunning: false,
  timerPaused: false,

  // Power-up states
  activePowerUp: null,
  showCallOverlay: false,
  callTimerSeconds: 60,

  // Join Game
  joinRoomCode: '',

  // Settings
  settings: {
    timerA: 60,
    timerB: 30,
    callFriendTime: 60
  },

  // Actions
  setGameState: (state) => set({ gameState: state }),

  generateRoomCode: () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase()
    set({ roomCode: code })
    return code
  },

  setJoinRoomCode: (code) => set({ joinRoomCode: code }),

  joinGame: (code) => {
    // For now, just set the code and go to spectator mode
    // In future, this would connect to a real game session
    set({ roomCode: code, gameState: 'spectator' })
  },

  setTeamName: (team, name) => {
    if (team === 'A') {
      set({ teamA: { ...get().teamA, name } })
    } else {
      set({ teamB: { ...get().teamB, name } })
    }
  },

  startCategorySelection: () => {
    set({
      gameState: 'category_selection_A',
      currentTeam: 'A'
    })
  },

  selectCategory: (categoryId) => {
    const { currentTeam, teamA, teamB, selectedCategories, availableCategories } = get()
    const team = currentTeam === 'A' ? teamA : teamB
    const category = availableCategories.find(c => c.id === categoryId)

    if (!category || selectedCategories.includes(categoryId)) return
    if (team.selectedCategories.length >= 3) return

    const newSelectedCategories = [...team.selectedCategories, categoryId]

    if (currentTeam === 'A') {
      set({
        teamA: { ...teamA, selectedCategories: newSelectedCategories },
        selectedCategories: [...selectedCategories, categoryId]
      })

      if (newSelectedCategories.length === 3) {
        set({ gameState: 'category_selection_B', currentTeam: 'B' })
      }
    } else {
      set({
        teamB: { ...teamB, selectedCategories: newSelectedCategories },
        selectedCategories: [...selectedCategories, categoryId]
      })

      if (newSelectedCategories.length === 3) {
        // Both teams selected, show the question board
        get().startGame()
      }
    }
  },

  startGame: () => {
    set({
      gameState: 'question_board',
      currentQuestion: null,
      answeredQuestions: [],
      currentTeam: 'A',
      isStealMode: false,
      timerSeconds: get().settings.timerA,
      isTimerRunning: false
    })
  },

  // Select a specific question from the board
  selectQuestion: (categoryId, question) => {
    const { availableCategories } = get()
    const category = availableCategories.find(c => c.id === categoryId)

    if (!category || !question) return

    const fullQuestion = {
      ...question,
      categoryId,
      categoryName: category.name,
      categoryIcon: category.icon
    }

    set({
      currentQuestion: fullQuestion,
      gameState: 'playing',
      timerSeconds: get().settings.timerA,
      isTimerRunning: false,
      isStealMode: false,
      pickingTeam: get().currentTeam
    })
  },

  startTimer: () => set({ isTimerRunning: true }),
  stopTimer: () => set({ isTimerRunning: false }),
  pauseTimer: () => set({ timerPaused: true }),
  resumeTimer: () => set({ timerPaused: false }),

  tickTimer: () => {
    const { timerSeconds, isTimerRunning, timerPaused } = get()
    if (!isTimerRunning || timerPaused) return

    if (timerSeconds > 0) {
      set({ timerSeconds: timerSeconds - 1 })
    } else {
      get().handleTimeout()
    }
  },

  handleTimeout: () => {
    const { isStealMode, settings } = get()

    if (!isStealMode) {
      set({
        isStealMode: true,
        currentTeam: get().currentTeam === 'A' ? 'B' : 'A',
        timerSeconds: settings.timerB,
        isTimerRunning: true
      })
    } else {
      get().finishQuestion(false)
    }
  },

  markAnswer: (isCorrect) => {
    const { currentTeam, isStealMode, teamA, teamB, currentQuestion } = get()

    if (!currentQuestion) return

    const activeTeam = currentTeam === 'A' ? teamA : teamB
    const opponentTeam = currentTeam === 'A' ? teamB : teamA
    const isPitActive = activeTeam.powerUps.pit.activeForQuestion === currentQuestion.id

    if (isCorrect) {
      // Update streak and stats for the scoring team
      const newStreak = activeTeam.streak + 1
      const newMaxStreak = Math.max(activeTeam.maxStreak, newStreak)
      const teamUpdate = {
        streak: newStreak,
        maxStreak: newMaxStreak,
        correctAnswers: activeTeam.correctAnswers + 1
      }

      if (isPitActive) {
        const newOpponentScore = Math.max(0, opponentTeam.score - currentQuestion.points)
        if (currentTeam === 'A') {
          set({
            teamA: { ...teamA, ...teamUpdate },
            teamB: { ...teamB, score: newOpponentScore, streak: 0 }
          })
        } else {
          set({
            teamB: { ...teamB, ...teamUpdate },
            teamA: { ...teamA, score: newOpponentScore, streak: 0 }
          })
        }
      } else {
        const newScore = activeTeam.score + currentQuestion.points
        if (currentTeam === 'A') {
          set({
            teamA: { ...teamA, ...teamUpdate, score: newScore },
            teamB: { ...teamB, streak: 0 }
          })
        } else {
          set({
            teamB: { ...teamB, ...teamUpdate, score: newScore },
            teamA: { ...teamA, streak: 0 }
          })
        }
      }
      get().finishQuestion(true)
    } else {
      // Reset streak and update wrong answers on wrong answer
      if (currentTeam === 'A') {
        set({ teamA: { ...teamA, streak: 0, wrongAnswers: teamA.wrongAnswers + 1 } })
      } else {
        set({ teamB: { ...teamB, streak: 0, wrongAnswers: teamB.wrongAnswers + 1 } })
      }
      const doubleAnswer = activeTeam.powerUps.doubleAnswer
      if (doubleAnswer.attemptsRemaining > 0) {
        if (currentTeam === 'A') {
          set({
            teamA: {
              ...teamA,
              powerUps: {
                ...teamA.powerUps,
                doubleAnswer: { ...doubleAnswer, attemptsRemaining: doubleAnswer.attemptsRemaining - 1 }
              }
            }
          })
        } else {
          set({
            teamB: {
              ...teamB,
              powerUps: {
                ...teamB.powerUps,
                doubleAnswer: { ...doubleAnswer, attemptsRemaining: doubleAnswer.attemptsRemaining - 1 }
              }
            }
          })
        }
        return
      }

      if (!isStealMode) {
        set({
          isStealMode: true,
          currentTeam: currentTeam === 'A' ? 'B' : 'A',
          timerSeconds: get().settings.timerB,
          isTimerRunning: true
        })
      } else {
        get().finishQuestion(false)
      }
    }
  },

  finishQuestion: (wasCorrect) => {
    const { currentQuestion, answeredQuestions, selectedCategories, teamA, teamB, currentTeam, pickingTeam } = get()

    if (!currentQuestion) return

    // Add to answered questions
    const newAnsweredQuestions = [
      ...answeredQuestions,
      { categoryId: currentQuestion.categoryId, points: currentQuestion.points, id: currentQuestion.id }
    ]

    // Clear pit power-up
    set({
      teamA: { ...teamA, powerUps: { ...teamA.powerUps, pit: { ...teamA.powerUps.pit, activeForQuestion: null } } },
      teamB: { ...teamB, powerUps: { ...teamB.powerUps, pit: { ...teamB.powerUps.pit, activeForQuestion: null } } },
      answeredQuestions: newAnsweredQuestions,
      isTimerRunning: false,
      activePowerUp: null
    })

    // Check if all questions are answered (6 categories × 4 point values = 24 questions)
    const totalQuestions = selectedCategories.length * 4
    if (newAnsweredQuestions.length >= totalQuestions) {
      set({ gameState: 'game_over', currentQuestion: null })
    } else {
      // Always alternate teams based on who picked the question
      const nextTeam = pickingTeam === 'A' ? 'B' : 'A'
      set({
        gameState: 'question_board',
        currentQuestion: null,
        currentTeam: nextTeam,
        isStealMode: false
      })
    }
  },

  // Power-up actions
  usePowerUp: (powerUp) => {
    const { currentTeam, teamA, teamB, currentQuestion } = get()
    const team = currentTeam === 'A' ? teamA : teamB

    if (team.powerUps[powerUp].used) return false

    const updatedPowerUps = { ...team.powerUps }

    switch (powerUp) {
      case 'pit':
        updatedPowerUps.pit = { used: true, activeForQuestion: currentQuestion?.id }
        break
      case 'callFriend':
        updatedPowerUps.callFriend = { used: true }
        set({
          showCallOverlay: true,
          callTimerSeconds: get().settings.callFriendTime,
          timerPaused: true
        })
        break
      case 'doubleAnswer':
        updatedPowerUps.doubleAnswer = { used: true, attemptsRemaining: 2 }
        break
      case 'rest':
        updatedPowerUps.rest = { used: true, blockedPlayer: null }
        break
    }

    if (currentTeam === 'A') {
      set({ teamA: { ...teamA, powerUps: updatedPowerUps }, activePowerUp: powerUp })
    } else {
      set({ teamB: { ...teamB, powerUps: updatedPowerUps }, activePowerUp: powerUp })
    }

    return true
  },

  endCallFriend: () => {
    set({ showCallOverlay: false, timerPaused: false })
  },

  tickCallTimer: () => {
    const { callTimerSeconds, showCallOverlay } = get()
    if (!showCallOverlay) return

    if (callTimerSeconds > 0) {
      set({ callTimerSeconds: callTimerSeconds - 1 })
    } else {
      get().endCallFriend()
    }
  },

  // Load categories from Supabase (with fallback to default)
  loadCategories: async () => {
    // Skip if Supabase is not configured
    if (!canUseSupabase()) {
      set({ isUsingSupabase: false })
      return
    }

    set({ isLoading: true, loadError: null })

    try {
      const supabaseCategories = await fetchCategories()

      // Merge: use Supabase questions when available, fall back to default questions
      const mergedCategories = defaultCategories.map(defaultCat => {
        const supabaseCat = supabaseCategories.find(sc => sc.id === defaultCat.id)
        if (supabaseCat && supabaseCat.questions && supabaseCat.questions.length >= 4) {
          // Supabase has enough questions for this category
          return { ...defaultCat, questions: supabaseCat.questions }
        }
        // Use default questions (or merge if Supabase has some but not enough)
        return defaultCat
      })

      // Also add any Supabase-only categories that aren't in defaults
      supabaseCategories.forEach(sc => {
        if (!defaultCategories.find(dc => dc.id === sc.id) && sc.questions && sc.questions.length >= 4) {
          mergedCategories.push(sc)
        }
      })

      set({
        availableCategories: mergedCategories,
        isLoading: false,
        isUsingSupabase: true
      })
    } catch (error) {
      console.warn('Failed to load from Supabase, using default questions:', error.message)
      set({
        availableCategories: defaultCategories,
        isLoading: false,
        loadError: error.message,
        isUsingSupabase: false
      })
    }
  },

  // Generate more questions for a category using AI
  generateMoreQuestions: async (categoryId, difficulty = 'medium', count = 1) => {
    if (!canUseSupabase()) {
      throw new Error('Supabase not configured')
    }

    const { availableCategories } = get()
    const category = availableCategories.find(c => c.id === categoryId)

    if (!category) {
      throw new Error('Category not found')
    }

    set({ isLoading: true })

    try {
      const result = await generateAIQuestions(
        categoryId,
        category.name,
        difficulty,
        count
      )

      const { questions: newQuestions, warning, isFallback } = result

      // Only save to database if not using fallback questions
      let savedQuestions = newQuestions
      if (!isFallback) {
        savedQuestions = await Promise.all(
          newQuestions.map(q => saveQuestion({ ...q, categoryId }))
        )
      }

      // Update the local state with new questions
      const updatedCategories = availableCategories.map(c => {
        if (c.id === categoryId) {
          return {
            ...c,
            questions: [...c.questions, ...savedQuestions]
          }
        }
        return c
      })

      set({
        availableCategories: updatedCategories,
        isLoading: false
      })

      // Return both questions and any warning
      return { questions: savedQuestions, warning, isFallback }
    } catch (error) {
      set({ isLoading: false, loadError: error.message })
      throw error
    }
  },

  // Reset game
  resetGame: () => {
    set({
      gameState: 'home',
      roomCode: '',
      teamA: initialTeam('الفريق الأول'),
      teamB: initialTeam('الفريق الثاني'),
      currentTeam: 'A',
      pickingTeam: 'A',
      isStealMode: false,
      selectedCategories: [],
      currentQuestion: null,
      answeredQuestions: [],
      timerSeconds: 60,
      isTimerRunning: false,
      timerPaused: false,
      activePowerUp: null,
      showCallOverlay: false,
      // Stats are reset via initialTeam
    })
  },

  newGame: () => {
    const { teamA, teamB } = get()
    set({
      gameState: 'category_selection_A',
      teamA: { ...initialTeam(teamA.name) },
      teamB: { ...initialTeam(teamB.name) },
      currentTeam: 'A',
      pickingTeam: 'A',
      isStealMode: false,
      selectedCategories: [],
      currentQuestion: null,
      answeredQuestions: [],
      timerSeconds: 60,
      isTimerRunning: false,
      timerPaused: false,
      activePowerUp: null,
      showCallOverlay: false
    })
  }
}))
