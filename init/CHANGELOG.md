# سين وجيم (Seen w Jim) - Change Log

## [1.0.0] - 2026-01-27

### Initial Release

#### Project Setup
- Created React + Vite project structure
- Configured Tailwind CSS with RTL support
- Set up Zustand for state management
- Added Framer Motion for animations
- Configured PostCSS and Autoprefixer

#### Core Features Implemented

**Game Flow:**
- Home screen with create/join game options
- Team setup with custom names
- Room code generation
- Category selection (3 per team, 6 total)
- Question display with timer
- Answer reveal mechanism
- Results screen with winner celebration

**Scoring System:**
- 100 points (easy)
- 200 points (medium)
- 300 points (hard)
- 500 points (expert)

**Power-ups (4 total):**
1. 🕳️ الحفرة (The Pit) - Deduct points from opponent if answered correctly
2. 📞 اتصال بصديق (Call a Friend) - Pause timer, 60s to call
3. ✌️ جاوب جوابين (Double Answer) - Two attempts at answering
4. 😴 استريح (Rest) - Block opponent player

**Timer System:**
- 60 seconds for main team
- 30 seconds for steal attempt
- Visual countdown with color changes (green → yellow → red)
- Pause functionality for Call a Friend

**Question Types:**
- MCQ (Multiple Choice) - 4 options
- Open (Free text) - Host judges answer

#### Categories & Questions (12 categories, 72 questions)
1. ⚽ رياضة (Sports)
2. 🎬 أفلام وسينما (Movies)
3. 🌍 جغرافيا (Geography)
4. 🕌 إسلاميات (Islamic)
5. 💻 تقنية (Technology)
6. 🇸🇦 سعودي (Saudi Arabia)
7. 🇰🇼 كويتي (Kuwait)
8. 🎵 موسيقى وفن (Music & Art)
9. 📜 تاريخ (History)
10. 🍽️ طعام ومطبخ (Food & Cuisine)
11. 🔬 علوم (Science)
12. 🎮 ألعاب فيديو (Video Games)

#### UI/UX Features
- Dark/Light mode toggle
- RTL Arabic layout
- Neon gaming theme with glow effects
- Responsive design
- Glass morphism cards
- Smooth animations
- Confetti celebration on win

#### Components Created

**Game Components:**
- `GameBoard.jsx` - Main game screen
- `QuestionCard.jsx` - Question display with options
- `Timer.jsx` - Circular countdown timer
- `Scoreboard.jsx` - Team scores and power-up indicators
- `PowerUpPanel.jsx` - Power-up selection
- `CategorySelection.jsx` - Category picker grid
- `TeamSetup.jsx` - Team name input
- `ResultsScreen.jsx` - Final scores and winner
- `CallFriendOverlay.jsx` - Call a friend modal

**UI Components:**
- `Button.jsx` - Reusable button with variants
- `Card.jsx` - Glass effect card
- `Modal.jsx` - Animated modal
- `Confetti.jsx` - Victory celebration

**Stores (Zustand):**
- `gameStore.js` - Game state, teams, questions, timer
- `themeStore.js` - Dark/light mode (persisted)
- `audioStore.js` - Sound settings (persisted)

**Hooks:**
- `useTimer.js` - Timer logic
- `useSound.js` - Sound effects (Howler.js)

**Utilities:**
- `utils.js` - Helper functions

#### Files Structure
```
seen-w-jim/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── game/
│   │   │   ├── CallFriendOverlay.jsx
│   │   │   ├── CategorySelection.jsx
│   │   │   ├── GameBoard.jsx
│   │   │   ├── PowerUpPanel.jsx
│   │   │   ├── QuestionCard.jsx
│   │   │   ├── ResultsScreen.jsx
│   │   │   ├── Scoreboard.jsx
│   │   │   ├── TeamSetup.jsx
│   │   │   └── Timer.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Confetti.jsx
│   │       └── Modal.jsx
│   ├── data/
│   │   └── defaultQuestions.js
│   ├── hooks/
│   │   ├── useSound.js
│   │   └── useTimer.js
│   ├── lib/
│   │   └── utils.js
│   ├── stores/
│   │   ├── audioStore.js
│   │   ├── gameStore.js
│   │   └── themeStore.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── Home.jsx
├── init/
│   └── CHANGELOG.md
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

#### Tech Stack
- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **State:** Zustand (with persist middleware)
- **Animations:** Framer Motion
- **Sound:** Howler.js (prepared, sounds not added yet)
- **Icons:** Emoji-based

#### Repository
- **GitHub:** https://github.com/YNaljehani/seen-w-jim
- **Live Demo:** https://seen-w-jim.vercel.app/
- **Created:** 2026-01-27

---

## [1.0.1] - 2026-01-27

### Deployment
- Deployed to Vercel
- Live at: https://seen-w-jim.vercel.app/
- Auto-deploy enabled from GitHub master branch

---

## [1.2.0] - 2026-01-27

### Added - Jeopardy-Style Question Board
- **New QuestionBoard component**: Players now choose category AND point level
- Dashboard displays after each question for next selection
- Visual grid showing all categories (columns) and point values (rows)
- Answered questions are marked and disabled
- Current team indicator shows whose turn to pick

### Added - Join Game Feature
- Join Game button now functional
- Modal popup for entering room code
- Input validation for room codes

### Changed - Game Flow
- Players select questions from board instead of auto-progression
- Team that answers correctly picks next question
- Team that fails loses turn to opponent
- Game ends when all 24 questions answered (6 categories × 4 points)

### Added - More Categories & Questions
- Expanded to 16 categories with 4 questions each (64 total)
- New categories:
  - 🦁 حيوانات (Animals)
  - 📖 لغة عربية (Arabic Language)
  - 🚀 فضاء (Space)
  - 🇦🇪 إماراتي (UAE)
- Enriched existing questions with better content
- Each category has exactly: 100, 200, 300, 500 point questions

### Technical Changes
- Refactored gameStore for board-based selection
- Added `answeredQuestions` tracking
- Added `selectQuestion` action
- Added `finishQuestion` for proper flow control
- Updated App.jsx routing for new states

---

## Future Updates

_All changes will be logged here with dates_

---

## Notes

- Sound files need to be added to `/public/sounds/`
- AI question generation ready (needs Anthropic API key)
- Supabase integration planned for multiplayer
