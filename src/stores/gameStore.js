import { create } from 'zustand'
import { defaultCategories, getQuestionsForCategories } from '../data/defaultQuestions'

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
  questions: [],
  currentQuestionIndex: 0,

  // Timer
  timerSeconds: 60,
  isTimerRunning: false,
  timerPaused: false,

  // Power-up states
  activePowerUp: null,
  showCallOverlay: false,
  callTimerSeconds: 60,

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
        // Both teams selected, start the game
        get().startGame()
      }
    }
  },

  startGame: () => {
    const { selectedCategories, availableCategories } = get()
    const questions = getQuestionsForCategories(selectedCategories, availableCategories)

    set({
      gameState: 'playing',
      questions,
      currentQuestionIndex: 0,
      currentTeam: 'A',
      isStealMode: false,
      timerSeconds: get().settings.timerA,
      isTimerRunning: false
    })
  },

  getCurrentQuestion: () => {
    const { questions, currentQuestionIndex } = get()
    return questions[currentQuestionIndex] || null
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
      // Time's up
      get().handleTimeout()
    }
  },

  handleTimeout: () => {
    const { isStealMode, settings } = get()

    if (!isStealMode) {
      // Main team timed out, give steal chance
      set({
        isStealMode: true,
        currentTeam: get().currentTeam === 'A' ? 'B' : 'A',
        timerSeconds: settings.timerB,
        isTimerRunning: true
      })
    } else {
      // Steal team also timed out, move to next question
      get().nextQuestion()
    }
  },

  markAnswer: (isCorrect) => {
    const { currentTeam, isStealMode, teamA, teamB, questions, currentQuestionIndex } = get()
    const currentQuestion = questions[currentQuestionIndex]

    if (!currentQuestion) return

    // Check if pit is active
    const activeTeam = currentTeam === 'A' ? teamA : teamB
    const opponentTeam = currentTeam === 'A' ? teamB : teamA
    const isPitActive = activeTeam.powerUps.pit.activeForQuestion === currentQuestionIndex

    if (isCorrect) {
      if (isPitActive) {
        // Pit power-up: subtract from opponent
        const newOpponentScore = Math.max(0, opponentTeam.score - currentQuestion.points)
        if (currentTeam === 'A') {
          set({ teamB: { ...teamB, score: newOpponentScore } })
        } else {
          set({ teamA: { ...teamA, score: newOpponentScore } })
        }
      } else {
        // Normal scoring
        const newScore = (currentTeam === 'A' ? teamA : teamB).score + currentQuestion.points
        if (currentTeam === 'A') {
          set({ teamA: { ...teamA, score: newScore } })
        } else {
          set({ teamB: { ...teamB, score: newScore } })
        }
      }
      get().nextQuestion()
    } else {
      // Wrong answer
      const doubleAnswer = activeTeam.powerUps.doubleAnswer
      if (doubleAnswer.attemptsRemaining > 0) {
        // Still have attempts from double answer
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
        return // Stay on same question
      }

      if (!isStealMode) {
        // Switch to steal mode
        set({
          isStealMode: true,
          currentTeam: currentTeam === 'A' ? 'B' : 'A',
          timerSeconds: get().settings.timerB,
          isTimerRunning: true
        })
      } else {
        // Both teams failed, next question
        get().nextQuestion()
      }
    }
  },

  nextQuestion: () => {
    const { currentQuestionIndex, questions, settings, teamA, teamB } = get()
    const nextIndex = currentQuestionIndex + 1

    // Clear pit power-up active state
    set({
      teamA: { ...teamA, powerUps: { ...teamA.powerUps, pit: { ...teamA.powerUps.pit, activeForQuestion: null } } },
      teamB: { ...teamB, powerUps: { ...teamB.powerUps, pit: { ...teamB.powerUps.pit, activeForQuestion: null } } }
    })

    if (nextIndex >= questions.length) {
      // Game over
      set({ gameState: 'game_over', isTimerRunning: false })
    } else {
      // Alternate teams for next question (based on question index)
      const nextTeam = nextIndex % 2 === 0 ? 'A' : 'B'
      set({
        currentQuestionIndex: nextIndex,
        currentTeam: nextTeam,
        isStealMode: false,
        timerSeconds: settings.timerA,
        isTimerRunning: false,
        activePowerUp: null
      })
    }
  },

  // Power-up actions
  usePowerUp: (powerUp) => {
    const { currentTeam, teamA, teamB, currentQuestionIndex } = get()
    const team = currentTeam === 'A' ? teamA : teamB

    if (team.powerUps[powerUp].used) return false

    const updatedPowerUps = { ...team.powerUps }

    switch (powerUp) {
      case 'pit':
        updatedPowerUps.pit = { used: true, activeForQuestion: currentQuestionIndex }
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
      questions: [],
      currentQuestionIndex: 0,
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
      questions: [],
      currentQuestionIndex: 0,
      timerSeconds: 60,
      isTimerRunning: false,
      timerPaused: false,
      activePowerUp: null,
      showCallOverlay: false
    })
  }
}))
