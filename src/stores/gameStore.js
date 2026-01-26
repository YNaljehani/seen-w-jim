import { create } from 'zustand'
import { defaultCategories } from '../data/defaultQuestions'

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
  selectedCategories: []
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
      isStealMode: false
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
      if (isPitActive) {
        const newOpponentScore = Math.max(0, opponentTeam.score - currentQuestion.points)
        if (currentTeam === 'A') {
          set({ teamB: { ...teamB, score: newOpponentScore } })
        } else {
          set({ teamA: { ...teamA, score: newOpponentScore } })
        }
      } else {
        const newScore = (currentTeam === 'A' ? teamA : teamB).score + currentQuestion.points
        if (currentTeam === 'A') {
          set({ teamA: { ...teamA, score: newScore } })
        } else {
          set({ teamB: { ...teamB, score: newScore } })
        }
      }
      get().finishQuestion(true)
    } else {
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
    const { currentQuestion, answeredQuestions, selectedCategories, teamA, teamB, currentTeam } = get()

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
      // Alternate teams - the team that answered (or failed) picks next
      // If correct, same team picks; if wrong/timeout, other team picks
      const nextTeam = wasCorrect ? currentTeam : (currentTeam === 'A' ? 'B' : 'A')
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

  // Reset game
  resetGame: () => {
    set({
      gameState: 'home',
      roomCode: '',
      teamA: initialTeam('الفريق الأول'),
      teamB: initialTeam('الفريق الثاني'),
      currentTeam: 'A',
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
  },

  newGame: () => {
    const { teamA, teamB } = get()
    set({
      gameState: 'category_selection_A',
      teamA: { ...initialTeam(teamA.name) },
      teamB: { ...initialTeam(teamB.name) },
      currentTeam: 'A',
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
