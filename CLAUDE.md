# CLAUDE.md - سين وجيم (Seen w Jim)

## Project Overview

An Arabic trivia game inspired by the Kuwaiti "Seen Jeem" game show. Two teams compete by answering questions across different categories in a Jeopardy-style format. Built for social gatherings with local multiplayer support.

**Live Demo:** https://seen-w-jim.vercel.app/
**GitHub:** https://github.com/YNaljehani/seen-w-jim

## Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (RTL support enabled)
- **State Management:** Zustand (with persist middleware)
- **Animations:** Framer Motion
- **Audio:** Howler.js (prepared, sounds not yet added)
- **AI Integration:** @anthropic-ai/sdk (prepared for question generation)

## Build & Run Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
```

## Project Structure

```
seen-w-jim/
├── src/
│   ├── components/
│   │   ├── game/                    # Game-specific components
│   │   │   ├── CallFriendOverlay.jsx
│   │   │   ├── CategorySelection.jsx
│   │   │   ├── GameBoard.jsx        # Main playing screen
│   │   │   ├── PowerUpPanel.jsx
│   │   │   ├── QuestionBoard.jsx    # Jeopardy-style selection grid
│   │   │   ├── QuestionCard.jsx
│   │   │   ├── ResultsScreen.jsx
│   │   │   ├── Scoreboard.jsx
│   │   │   ├── TeamSetup.jsx
│   │   │   └── Timer.jsx
│   │   ├── ui/                      # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Confetti.jsx
│   │   │   └── Modal.jsx
│   │   └── Home.jsx                 # Home screen
│   ├── data/
│   │   └── defaultQuestions.js      # 16 categories, 64 questions
│   ├── hooks/
│   │   ├── useSound.js
│   │   └── useTimer.js
│   ├── lib/
│   │   └── utils.js
│   ├── stores/
│   │   ├── audioStore.js            # Sound settings (persisted)
│   │   ├── gameStore.js             # Main game state
│   │   └── themeStore.js            # Dark/light mode (persisted)
│   ├── App.jsx                      # Main router/state machine
│   ├── index.css                    # Tailwind + custom styles
│   └── main.jsx
├── init/
│   └── CHANGELOG.md                 # Version history
└── public/
```

## Game Flow (State Machine)

```
home → team_setup → category_selection_A → category_selection_B → question_board ↔ playing → game_over
```

- **home:** Main menu (Create Game, Join Game, Spectator)
- **team_setup:** Enter team names
- **category_selection_A/B:** Each team selects 3 categories (6 total)
- **question_board:** Jeopardy-style grid - pick category + point value
- **playing:** Question display with timer
- **game_over:** Final scores and winner

## Key State (gameStore.js)

```javascript
{
  gameState: 'home',                    // Current screen
  teamA/teamB: { name, score, powerUps, selectedCategories },
  currentTeam: 'A' | 'B',               // Whose turn
  isStealMode: boolean,                 // Opponent stealing?
  selectedCategories: [],               // 6 category IDs
  currentQuestion: null | {...},        // Active question
  answeredQuestions: [],                // Completed questions
  timerSeconds: number,
  isTimerRunning: boolean,
  activePowerUp: null | 'pit' | 'callFriend' | 'doubleAnswer' | 'rest'
}
```

## Scoring System

| Difficulty | Points |
|------------|--------|
| Easy       | 100    |
| Medium     | 200    |
| Hard       | 300    |
| Expert     | 500    |

## Power-Ups (4 per team)

1. **🕳️ الحفرة (The Pit):** Deduct points from opponent if answered correctly
2. **📞 اتصال بصديق (Call a Friend):** Pause timer, 60s to call
3. **✌️ جاوب جوابين (Double Answer):** Two attempts at answering
4. **😴 استريح (Rest):** Block opponent player

## Timer Rules

- **Main team:** 60 seconds
- **Steal attempt:** 30 seconds
- Timer changes color: green → yellow → red as time runs out

## Question Format

```javascript
{
  id: string,
  question: string,           // Arabic text
  type: 'mcq' | 'open',
  difficulty: 'easy' | 'medium' | 'hard' | 'expert',
  points: 100 | 200 | 300 | 500,
  options: ['أ', 'ب', 'ج', 'د'],  // For MCQ
  answer: string,
  answerIndex: number             // For MCQ
}
```

## Categories (16 total)

⚽ رياضة | 🎬 أفلام وسينما | 🌍 جغرافيا | 🕌 إسلاميات | 💻 تقنية | 🇸🇦 سعودي | 🇰🇼 كويتي | 🎵 موسيقى وفن | 📜 تاريخ | 🍽️ طعام ومطبخ | 🔬 علوم | 🎮 ألعاب فيديو | 🦁 حيوانات | 📖 لغة عربية | 🚀 فضاء | 🇦🇪 إماراتي

## Common Issues & Solutions

### Buttons not responding
- Ensure z-index is set (use `z-10` class)
- Use regular `<button>` instead of `motion.button` for critical buttons
- Use individual Zustand selectors instead of destructuring:
  ```javascript
  // Good
  const setGameState = useGameStore((state) => state.setGameState)

  // Avoid
  const { setGameState } = useGameStore()
  ```

### RTL Layout
- Tailwind RTL is enabled via `dir="rtl"` in index.html
- Use `text-right` for alignment when needed

## Development Notes

- All text content is in Arabic
- Theme preference persists in localStorage
- No backend required - local multiplayer only
- Join Game modal exists but actual room syncing not implemented yet
- Sound files should be added to `/public/sounds/`

## Future Enhancements (Planned)

- Supabase integration for real multiplayer
- AI question generation using Anthropic API
- Sound effects and music
- Additional categories and questions
