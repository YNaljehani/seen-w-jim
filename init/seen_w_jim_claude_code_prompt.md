# 🎮 Claude Code Prompt: Build "سين وچ" Arabic Trivia Game

## Project Overview

Build a **modern Arabic trivia game** called **"سين وچ"** (Seen w Jim) - a multiplayer team-based quiz game inspired by the Kuwaiti game "Seen Jeem". The game is for social gatherings where a host controls the game (often displayed on a TV) and two teams compete by answering questions across different categories.

---

## 🎯 Core Concept

- **2 teams** compete against each other
- **Host controls** the entire game flow (can share screen to TV)
- **6 categories** selected per game (3 by each team)
- **6 questions per category** = 36 total questions
- **Tiered point system**: 100 → 200 → 300 → 500 based on difficulty
- **4 power-ups** per team to add strategy
- **Timer-based gameplay** with steal mechanic

---

## 🛠️ Tech Stack

Use the **fastest, most reliable, and stable** stack:

```
Frontend:     React 18+ with Vite (fast dev, optimized build)
Styling:      Tailwind CSS (utility-first, RTL support)
State:        Zustand (simple, fast state management)
Backend:      Supabase (auth, database, realtime)
AI:           Anthropic Claude API (question generation)
Hosting:      Vercel (auto-deploy, edge functions)
Audio:        Howler.js (sound effects)
Animations:   Framer Motion (smooth animations)
```

---

## 📁 Project Structure

```
seen-w-jim/
├── public/
│   ├── sounds/
│   │   ├── correct.mp3
│   │   ├── wrong.mp3
│   │   ├── timer-tick.mp3
│   │   ├── timer-urgent.mp3
│   │   ├── powerup.mp3
│   │   ├── victory.mp3
│   │   └── background-music.mp3
│   └── fonts/
│       └── (Arabic fonts)
├── src/
│   ├── components/
│   │   ├── game/
│   │   │   ├── GameBoard.jsx
│   │   │   ├── QuestionCard.jsx
│   │   │   ├── CategoryGrid.jsx
│   │   │   ├── Scoreboard.jsx
│   │   │   ├── Timer.jsx
│   │   │   ├── PowerUpPanel.jsx
│   │   │   ├── TeamSetup.jsx
│   │   │   └── ResultsScreen.jsx
│   │   ├── admin/
│   │   │   ├── AdminPanel.jsx
│   │   │   ├── QuestionEditor.jsx
│   │   │   ├── CategoryManager.jsx
│   │   │   ├── AIGenerator.jsx
│   │   │   └── URLScraper.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Toast.jsx
│   │   │   └── ThemeToggle.jsx
│   │   └── shared/
│   │       ├── Logo.jsx
│   │       ├── RoomCode.jsx
│   │       └── QRCode.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── CreateGame.jsx
│   │   ├── JoinGame.jsx
│   │   ├── GameRoom.jsx
│   │   ├── Spectator.jsx
│   │   └── Admin.jsx
│   ├── stores/
│   │   ├── gameStore.js
│   │   ├── audioStore.js
│   │   └── themeStore.js
│   ├── hooks/
│   │   ├── useTimer.js
│   │   ├── useSound.js
│   │   ├── useRealtime.js
│   │   └── useAI.js
│   ├── lib/
│   │   ├── supabase.js
│   │   ├── claude.js
│   │   └── utils.js
│   ├── data/
│   │   └── defaultQuestions.json
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── supabase/
│   └── migrations/
│       └── 001_initial_schema.sql
├── api/
│   ├── generate-questions.js
│   └── scrape-url.js
├── .env.example
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🗄️ Database Schema (Supabase)

```sql
-- Categories table
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  name_en TEXT,
  icon TEXT DEFAULT '📚',
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Questions table
CREATE TABLE questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  question_text TEXT NOT NULL,
  question_type TEXT CHECK (question_type IN ('open', 'mcq')) DEFAULT 'mcq',
  correct_answer TEXT NOT NULL,
  options JSONB, -- For MCQ: ["option1", "option2", "option3", "option4"]
  difficulty TEXT CHECK (difficulty IN ('easy', 'medium', 'hard', 'expert')),
  points INTEGER CHECK (points IN (100, 200, 300, 500)),
  media_url TEXT, -- Optional image/audio
  source TEXT, -- Where question came from
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Game rooms table
CREATE TABLE game_rooms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_code TEXT UNIQUE NOT NULL,
  host_id TEXT NOT NULL,
  team_a_name TEXT DEFAULT 'الفريق الأول',
  team_b_name TEXT DEFAULT 'الفريق الثاني',
  team_a_score INTEGER DEFAULT 0,
  team_b_score INTEGER DEFAULT 0,
  team_a_powerups JSONB DEFAULT '{"pit": true, "callFriend": true, "doubleAnswer": true, "rest": true}',
  team_b_powerups JSONB DEFAULT '{"pit": true, "callFriend": true, "doubleAnswer": true, "rest": true}',
  selected_categories UUID[] DEFAULT '{}',
  current_question_index INTEGER DEFAULT 0,
  current_team TEXT CHECK (current_team IN ('A', 'B')) DEFAULT 'A',
  game_state TEXT DEFAULT 'lobby',
  questions_order JSONB, -- Ordered list of question IDs for this game
  settings JSONB DEFAULT '{"timerA": 60, "timerB": 30}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Game history for leaderboard
CREATE TABLE game_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_code TEXT,
  team_a_name TEXT,
  team_b_name TEXT,
  team_a_score INTEGER,
  team_b_score INTEGER,
  winner TEXT,
  played_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE game_rooms;
```

---

## 🎮 Game Flow & State Machine

```
GAME STATES:
┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│   lobby ──► team_setup ──► category_selection_A                 │
│                                    │                             │
│                                    ▼                             │
│                           category_selection_B                   │
│                                    │                             │
│                                    ▼                             │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │                    GAME LOOP                             │   │
│   │                                                          │   │
│   │   question_preview ──► team_a_answering ──┬──► correct   │   │
│   │         ▲                                 │              │   │
│   │         │                                 ▼              │   │
│   │         │                          team_b_stealing       │   │
│   │         │                                 │              │   │
│   │         └─────────────────────────────────┘              │   │
│   │                                                          │   │
│   └──────────────────────────┬──────────────────────────────┘   │
│                              │                                   │
│                              ▼                                   │
│                         game_over ──► results                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## ⏱️ Timer & Answering Logic

```javascript
// Timer Configuration
const TIMER_CONFIG = {
  teamA: 60,      // Primary team gets 60 seconds
  teamB: 30,      // Stealing team gets 30 seconds
  callFriend: 60, // Extra time for call-a-friend (pauses main timer)
};

// Answering Flow
function handleAnswer(team, isCorrect, question) {
  const currentTeam = game.currentTeam; // 'A' or 'B'
  
  if (currentTeam === 'A') {
    if (isCorrect) {
      // Team A answered correctly
      addPoints('A', question.points);
      nextQuestion();
    } else if (isTimeout) {
      // Team A ran out of time - Team B can steal
      switchToStealMode('B');
      startTimer(30);
    } else {
      // Team A answered wrong - Team B can steal
      switchToStealMode('B');
      startTimer(30);
    }
  } else if (currentTeam === 'B' && game.isStealMode) {
    if (isCorrect) {
      // Team B successfully stole!
      addPoints('B', question.points); // FULL points
    }
    // Whether correct or not, move to next question
    nextQuestion();
  }
}
```

---

## 💡 Power-ups System

```javascript
const POWERUPS = {
  pit: {
    nameAr: 'الحفرة',
    nameEn: 'The Pit',
    icon: '🕳️',
    description: 'إذا جاوبت صح، النقاط تنخصم من الفريق الثاني',
    timing: 'BEFORE_QUESTION', // Must activate before seeing question
    effect: (game, team, question) => {
      // If team answers correctly, SUBTRACT points from opponent
      const opponent = team === 'A' ? 'B' : 'A';
      game[`team${opponent}Score`] -= question.points;
    }
  },
  
  callFriend: {
    nameAr: 'اتصال بصديق',
    nameEn: 'Call a Friend',
    icon: '📞',
    description: 'اتصل بصديق للمساعدة - يوقف المؤقت',
    timing: 'DURING_QUESTION',
    effect: (game) => {
      // PAUSE the timer
      game.timerPaused = true;
      // Show call overlay with 60 second call timer
      game.showCallOverlay = true;
      // After call ends, resume main timer
    }
  },
  
  doubleAnswer: {
    nameAr: 'جاوب جوابين',
    nameEn: 'Double Answer',
    icon: '✌️',
    description: 'جاوب مرتين على نفس السؤال',
    timing: 'DURING_QUESTION',
    effect: (game) => {
      // Allow 2 answer attempts this turn
      game.remainingAttempts = 2;
    }
  },
  
  rest: {
    nameAr: 'استريح',
    nameEn: 'Rest',
    icon: '😴',
    description: 'امنع لاعب من الفريق الثاني من المشاركة',
    timing: 'DURING_QUESTION',
    duration: 'ONE_QUESTION',
    effect: (game, team, targetPlayer) => {
      // Block target player for this question only
      game.blockedPlayer = targetPlayer;
    }
  }
};
```

---

## 🎨 Design System

### Color Palette (Gaming/Neon + Saudi Modern)

```css
:root {
  /* Primary - Neon Cyan/Teal */
  --primary-500: #00D9FF;
  --primary-600: #00B8D9;
  --primary-glow: 0 0 20px rgba(0, 217, 255, 0.5);
  
  /* Secondary - Saudi Green (modern) */
  --secondary-500: #00C853;
  --secondary-600: #00A844;
  --secondary-glow: 0 0 20px rgba(0, 200, 83, 0.5);
  
  /* Accent - Gold */
  --accent-500: #FFD700;
  --accent-600: #FFC107;
  
  /* Team Colors */
  --team-a: #FF6B6B;  /* Coral Red */
  --team-b: #4ECDC4;  /* Teal */
  
  /* Dark Mode */
  --bg-dark: #0A0A0F;
  --bg-card-dark: #12121A;
  --bg-elevated-dark: #1A1A25;
  --text-dark: #FFFFFF;
  --text-muted-dark: #A0A0B0;
  
  /* Light Mode */
  --bg-light: #F5F5F7;
  --bg-card-light: #FFFFFF;
  --text-light: #1A1A2E;
  --text-muted-light: #6B6B80;
  
  /* Neon Effects */
  --neon-border: 1px solid rgba(0, 217, 255, 0.3);
  --neon-glow: 0 0 10px var(--primary-500), 0 0 20px var(--primary-500), 0 0 30px var(--primary-500);
}
```

### Typography (Arabic-First)

```css
/* Use modern Arabic fonts */
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap');

body {
  font-family: 'Tajawal', 'Cairo', sans-serif;
  direction: rtl;
  text-align: right;
}

/* Headings - Bold gaming style */
h1, h2, h3 {
  font-family: 'Cairo', sans-serif;
  font-weight: 800;
  letter-spacing: -0.02em;
}

/* Numbers - Keep LTR for scores */
.score, .timer, .points {
  font-family: 'Orbitron', monospace;
  direction: ltr;
  font-variant-numeric: tabular-nums;
}
```

### UI Components Style

```
BUTTONS:
- Rounded corners (12px)
- Neon glow on hover
- Gradient backgrounds
- Press effect (scale down)

CARDS:
- Glass morphism effect
- Subtle border glow
- Backdrop blur

SCOREBOARD:
- Always visible at top
- Team colors prominent
- Animated score changes
- Power-up indicators

TIMER:
- Circular progress
- Color changes: green → yellow → red
- Pulse animation when urgent (<10s)
- Sound effects at 10s, 5s, 0s

QUESTION CARD:
- Large, centered
- Category badge
- Points badge with glow
- Smooth flip animation for answer reveal
```

---

## 🔊 Sound System

```javascript
const SOUNDS = {
  // Game Events
  correct: '/sounds/correct.mp3',      // Cheerful ding
  wrong: '/sounds/wrong.mp3',          // Soft buzz
  steal: '/sounds/steal.mp3',          // Dramatic swoosh
  
  // Timer
  tick: '/sounds/tick.mp3',            // Clock tick
  urgent: '/sounds/urgent.mp3',        // Fast ticking (<10s)
  timeout: '/sounds/timeout.mp3',      // Buzzer
  
  // Power-ups
  powerup: '/sounds/powerup.mp3',      // Activation sound
  pit: '/sounds/pit.mp3',              // Falling sound
  phone: '/sounds/phone.mp3',          // Phone ringing
  
  // Game Flow
  categorySelect: '/sounds/select.mp3',
  questionReveal: '/sounds/reveal.mp3',
  victory: '/sounds/victory.mp3',      // Celebration
  
  // Background
  bgMusic: '/sounds/bg-music.mp3',     // Looping ambient
};

// Sound settings stored in localStorage
const soundSettings = {
  masterVolume: 0.8,
  musicVolume: 0.3,
  sfxVolume: 1.0,
  musicEnabled: true,
  sfxEnabled: true,
};
```

---

## 📱 Screens & User Flows

### 1. Home Screen
```
┌─────────────────────────────────────┐
│                                     │
│           سين وچ                    │
│         SEEN W JIM                  │
│                                     │
│    ┌─────────────────────────┐      │
│    │     🎮 إنشاء لعبة       │      │
│    └─────────────────────────┘      │
│                                     │
│    ┌─────────────────────────┐      │
│    │     🚪 انضم للعبة        │      │
│    └─────────────────────────┘      │
│                                     │
│    ┌─────────────────────────┐      │
│    │     👁️ متفرج            │      │
│    └─────────────────────────┘      │
│                                     │
│    ┌─────────────────────────┐      │
│    │     ⚙️ الإدارة          │      │
│    └─────────────────────────┘      │
│                                     │
│              🌙/☀️   🔊              │
└─────────────────────────────────────┘
```

### 2. Create Game Screen
```
┌─────────────────────────────────────┐
│  ←                    إنشاء لعبة    │
├─────────────────────────────────────┤
│                                     │
│  اسم الفريق الأول:                  │
│  ┌─────────────────────────────┐    │
│  │ الصقور                      │    │
│  └─────────────────────────────┘    │
│                                     │
│  اسم الفريق الثاني:                 │
│  ┌─────────────────────────────┐    │
│  │ النمور                      │    │
│  └─────────────────────────────┘    │
│                                     │
│    ┌─────────────────────────┐      │
│    │     🚀 ابدأ اللعبة       │      │
│    └─────────────────────────┘      │
│                                     │
│  كود الغرفة:   ABC123               │
│       [📋 نسخ]  [📱 QR]             │
│                                     │
└─────────────────────────────────────┘
```

### 3. Category Selection Screen
```
┌─────────────────────────────────────┐
│  الصقور: 0    ⚡    النمور: 0       │
├─────────────────────────────────────┤
│                                     │
│     🎯 الصقور يختارون 3 فئات        │
│           (1/3)                     │
│                                     │
│  ┌─────┐ ┌─────┐ ┌─────┐           │
│  │ ⚽  │ │ 🎬  │ │ 🌍  │           │
│  │رياضة│ │أفلام │ │جغرافيا│          │
│  └─────┘ └─────┘ └─────┘           │
│                                     │
│  ┌─────┐ ┌─────┐ ┌─────┐           │
│  │ 📚  │ │ 🕌  │ │ 💻  │           │
│  │ثقافة│ │إسلامي│ │ تقنية │          │
│  └─────┘ └─────┘ └─────┘           │
│                                     │
│  ┌─────┐ ┌─────┐ ┌─────┐           │
│  │ 🎮  │ │ 🎵  │ │ 🇸🇦  │           │
│  │ألعاب │ │موسيقى│ │سعودي │          │
│  └─────┘ └─────┘ └─────┘           │
│                                     │
└─────────────────────────────────────┘
```

### 4. Game Board Screen
```
┌─────────────────────────────────────────────────────┐
│  الصقور: 450   ⏱️ 0:45   النمور: 300               │
│  🕳️📞✌️😴              🕳️📞✌️😴                    │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌──────────────────────────────────────────────┐  │
│  │                                              │  │
│  │            ⚽ رياضة  •  300 نقطة             │  │
│  │                                              │  │
│  │     من هو هداف كأس العالم 2022؟              │  │
│  │                                              │  │
│  │  ┌────────────┐  ┌────────────┐              │  │
│  │  │ كيليان    │  │ ليونيل    │              │  │
│  │  │  مبابي    │  │  ميسي     │              │  │
│  │  └────────────┘  └────────────┘              │  │
│  │  ┌────────────┐  ┌────────────┐              │  │
│  │  │ أوليفييه  │  │ جوليان    │              │  │
│  │  │  جيرو     │  │  ألفاريز  │              │  │
│  │  └────────────┘  └────────────┘              │  │
│  │                                              │  │
│  └──────────────────────────────────────────────┘  │
│                                                     │
│  ┌─────────────┐           ┌─────────────┐         │
│  │ ✅ صحيح    │           │ ❌ خطأ      │         │
│  │  الصقور    │           │  الصقور     │         │
│  └─────────────┘           └─────────────┘         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### 5. Results Screen
```
┌─────────────────────────────────────┐
│                                     │
│           🏆 الفائز 🏆               │
│                                     │
│           ⭐ الصقور ⭐               │
│                                     │
│             850                     │
│             نقطة                    │
│                                     │
│    ─────────────────────────        │
│                                     │
│           النمور                    │
│             620                     │
│                                     │
│    ┌─────────────────────────┐      │
│    │     📸 مشاركة النتيجة    │      │
│    └─────────────────────────┘      │
│                                     │
│    ┌─────────────────────────┐      │
│    │     🔄 لعبة جديدة       │      │
│    └─────────────────────────┘      │
│                                     │
│    ┌─────────────────────────┐      │
│    │     🏠 الرئيسية         │      │
│    └─────────────────────────┘      │
│                                     │
│ 🎉🎊✨ (confetti animation) ✨🎊🎉  │
└─────────────────────────────────────┘
```

---

## 🤖 AI Question Generation

### API Endpoint: `/api/generate-questions`

```javascript
// Vercel Edge Function
import Anthropic from '@anthropic-ai/sdk';

export default async function handler(req) {
  const { category, count = 6, difficulty = 'mixed' } = req.body;
  
  const anthropic = new Anthropic();
  
  const prompt = `أنت مولد أسئلة لعبة سين وجيم العربية.

اصنع ${count} أسئلة في فئة "${category}" باللغة العربية.

المتطلبات:
- سؤالين سهلة (100 نقطة)
- سؤالين متوسطة (200 نقطة) 
- سؤال صعب (300 نقطة)
- سؤال خبير (500 نقطة)

لكل سؤال، قرر إذا يكون:
- "mcq" (اختيار من متعدد) - للأسئلة الواضحة
- "open" (إجابة مفتوحة) - للأسئلة المعقدة

أرجع JSON بالشكل التالي:
{
  "questions": [
    {
      "question_text": "نص السؤال",
      "question_type": "mcq",
      "correct_answer": "الإجابة الصحيحة",
      "options": ["خيار 1", "خيار 2", "خيار 3", "خيار 4"],
      "difficulty": "easy",
      "points": 100
    }
  ]
}

اجعل الأسئلة:
- متنوعة وممتعة
- مناسبة للجمهور السعودي/الخليجي
- دقيقة وصحيحة
- بعيدة عن المواضيع الحساسة`;

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2000,
    messages: [{ role: 'user', content: prompt }]
  });
  
  return Response.json(JSON.parse(response.content[0].text));
}
```

### API Endpoint: `/api/scrape-url`

```javascript
// Vercel Edge Function for URL scraping
export default async function handler(req) {
  const { url, category } = req.body;
  
  // Fetch URL content
  const response = await fetch(url);
  const html = await response.text();
  
  // Use Claude to extract questions
  const anthropic = new Anthropic();
  
  const prompt = `حلل هذا المحتوى واستخرج منه أسئلة لعبة trivia:

المحتوى:
${html.slice(0, 5000)}

استخرج 6 أسئلة مع إجاباتها بفئة "${category}".
أرجع JSON بنفس الشكل السابق.`;

  const aiResponse = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2000,
    messages: [{ role: 'user', content: prompt }]
  });
  
  return Response.json(JSON.parse(aiResponse.content[0].text));
}
```

---

## 📋 Admin Panel Features

### Question Management
```
┌─────────────────────────────────────────────────────┐
│  ⚙️ لوحة الإدارة                                    │
├─────────────────────────────────────────────────────┤
│                                                     │
│  📁 الفئات (12)     📝 الأسئلة (156)                │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │  🤖 توليد بالذكاء الاصطناعي                   │  │
│  │                                               │  │
│  │  الفئة: [رياضة        ▼]                      │  │
│  │  العدد: [6 أسئلة      ▼]                      │  │
│  │                                               │  │
│  │  [🚀 توليد الأسئلة]                          │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │  🔗 استيراد من رابط                           │  │
│  │                                               │  │
│  │  الرابط: [https://...                    ]    │  │
│  │  الفئة: [تاريخ        ▼]                      │  │
│  │                                               │  │
│  │  [📥 استخراج الأسئلة]                         │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │  ✏️ إضافة سؤال يدوياً                         │  │
│  │                                               │  │
│  │  السؤال: [                                ]   │  │
│  │  النوع:  ○ اختيار متعدد  ○ إجابة مفتوحة       │  │
│  │  الإجابة: [                               ]   │  │
│  │  النقاط: [200         ▼]                      │  │
│  │                                               │  │
│  │  [➕ إضافة]                                   │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 🎯 Key Features Checklist

### Must Have (MVP)
- [ ] Two teams with custom names
- [ ] 6 categories × 6 questions = 36 questions per game
- [ ] Room code system for spectators
- [ ] Timer: 60s for main team, 30s for steal
- [ ] Point system: 100/200/300/500
- [ ] All 4 power-ups working
- [ ] MCQ and Open question types
- [ ] Host controls (mark correct/wrong)
- [ ] Scoreboard always visible
- [ ] Results screen with winner
- [ ] RTL Arabic support
- [ ] Dark/Light mode
- [ ] Sound effects
- [ ] Basic animations

### Nice to Have
- [ ] QR code for room join
- [ ] Spectator view (score only)
- [ ] Share results as image
- [ ] Leaderboard/history
- [ ] AI question generation
- [ ] URL scraping for questions
- [ ] Background music toggle
- [ ] Confetti on win
- [ ] Admin panel for questions

---

## 🚀 Getting Started

```bash
# 1. Create project
npm create vite@latest seen-w-jim -- --template react
cd seen-w-jim

# 2. Install dependencies
npm install @supabase/supabase-js zustand framer-motion howler
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Setup environment
cp .env.example .env.local
# Add your Supabase and Anthropic keys

# 4. Run development
npm run dev

# 5. Deploy to Vercel
vercel deploy
```

---

## 📝 Environment Variables

```env
# .env.local
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
ANTHROPIC_API_KEY=your_anthropic_key
```

---

## 🎬 Final Notes

1. **Start with the game loop** - Get 2 teams answering questions with timer working first
2. **Add power-ups one by one** - Start with simplest (callFriend), end with complex (pit)
3. **Polish the UI** - Neon effects and animations make it feel premium
4. **Test with real users** - Have friends play to find UX issues
5. **Keep questions fresh** - Use AI generation to add new content easily

---

**بالتوفيق! 🚀🎮**
