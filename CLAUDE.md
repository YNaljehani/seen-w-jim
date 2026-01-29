# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

سين وجيم (Seen w Jim) - An Arabic trivia game inspired by the Kuwaiti "Seen Jeem" game show. Two teams compete by answering questions across categories in a Jeopardy-style format.

**Live Demo:** https://seen-w-jim.vercel.app/

## Build & Run Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
```

## Tech Stack

- React 18 + Vite
- Tailwind CSS (RTL enabled)
- Zustand (state management with persist)
- Framer Motion (animations)
- Supabase (database for categories/questions)
- Vercel Serverless Functions (AI question generation)
- Anthropic Claude API (via Vercel, with fallback questions)

## Architecture

### State Machine (App.jsx)
```
home → team_setup → category_selection_A → category_selection_B → question_board ↔ playing → game_over
```

### Key Stores (src/stores/)
- **gameStore.js** - Main game state, teams, questions, power-ups, async category loading
- **themeStore.js** - Dark/light mode (persisted)
- **audioStore.js** - Sound settings (persisted)

### Data Flow
1. App loads → `loadCategories()` fetches from Supabase (falls back to `defaultQuestions.js`)
2. Teams select 3 categories each → `selectedCategories[]`
3. Questions displayed in Jeopardy grid → user picks category + points
4. Timer runs, team answers, steal mode if wrong
5. Power-ups modify gameplay (pit, call friend, double answer, rest)

### AI Question Generation
- **Vercel Serverless Function:** `api/generate-questions.js` - calls Anthropic Claude API with Arabic fallback questions
- Frontend calls `/api/generate-questions` (no Supabase dependency for AI)
- Falls back to pre-generated questions on API failure (429 rate limit, etc.)

### Supabase Integration
- **Database:** categories + questions tables (optional - game works without it)
- Supabase data merges with `defaultQuestions.js` in `loadCategories()`
- **Service Layer:** `src/services/questionService.js` - CRUD operations

### Turn Alternation
- `pickingTeam` state tracks which team originally picked (survives steal mode swaps)
- Teams always alternate picking, regardless of correct/wrong answers

## Important Patterns

### Zustand Selectors
Use individual selectors to avoid re-render issues:
```javascript
// Correct
const setGameState = useGameStore((state) => state.setGameState)

// Avoid - causes unnecessary re-renders
const { setGameState } = useGameStore()
```

### RTL Support
- `dir="rtl"` set in index.html
- All text content in Arabic
- Use `text-right` for explicit alignment

### Mobile/Desktop Detection
Components like Home.jsx detect mobile via `window.innerWidth < 768` and render BottomSheet vs Modal accordingly.

## Environment Variables

```env
# .env.local (frontend)
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...

# Vercel Environment Variables (via Vercel dashboard)
ANTHROPIC_API_KEY=your-anthropic-api-key
```

## Game Mechanics

### Scoring
| Difficulty | Points |
|------------|--------|
| Easy       | 100    |
| Medium     | 200    |
| Hard       | 300    |
| Expert     | 500    |

### Timer
- Main team: 60 seconds
- Steal attempt: 30 seconds

### Power-Ups (4 per team)
1. 🕳️ الحفرة - Deduct points from opponent
2. 📞 اتصال بصديق - Pause timer, 60s to call
3. ✌️ جاوب جوابين - Two answer attempts
4. 😴 استريح - Block opponent player

## Database Schema

```sql
CREATE TABLE categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  icon TEXT NOT NULL
);

CREATE TABLE questions (
  id TEXT PRIMARY KEY,
  category_id TEXT REFERENCES categories(id),
  question_text TEXT NOT NULL,
  question_type TEXT CHECK (question_type IN ('mcq', 'open')),
  correct_answer TEXT NOT NULL,
  options JSONB,
  difficulty TEXT CHECK (difficulty IN ('easy', 'medium', 'hard', 'expert')),
  points INTEGER NOT NULL,
  is_ai_generated BOOLEAN DEFAULT FALSE
);
```

## Current Limitations

- Join Game UI exists but multiplayer sync not implemented
- Sound files placeholder (add to `/public/sounds/`)
- AI generation requires valid Anthropic API key; falls back to pre-generated questions
