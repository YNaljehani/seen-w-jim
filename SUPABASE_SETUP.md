# Supabase Setup Guide for Seen Jeem

This guide will walk you through setting up Supabase for the Seen Jeem trivia game.

## Prerequisites

- A Supabase account (free at [supabase.com](https://supabase.com))
- Node.js installed
- Supabase CLI (optional, for Edge Functions)

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Enter a project name (e.g., "seen-jeem")
4. Set a secure database password (save this!)
5. Choose a region close to your users
6. Click "Create new project"

## Step 2: Get Your API Keys

1. In your Supabase dashboard, go to **Settings** (gear icon)
2. Click **API** in the sidebar
3. Copy the following values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon/public** key (starts with `eyJ...`)

## Step 3: Configure Environment Variables

1. Create a `.env.local` file in the `seen-w-jim` folder:

```bash
cp .env.example .env.local
```

2. Edit `.env.local` and add your values:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Step 4: Run Database Migration

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New query"
3. Copy the contents of `supabase/migrations/001_create_tables.sql`
4. Paste into the SQL Editor
5. Click "Run" to execute

This creates:
- `categories` table with 16 default categories
- `questions` table with sample questions
- Row Level Security policies
- Indexes for performance

## Step 5: Deploy Edge Function (For AI Question Generation)

### Install Supabase CLI

```bash
npm install -g supabase
```

### Login to Supabase

```bash
supabase login
```

### Link Your Project

```bash
cd seen-w-jim
supabase link --project-ref your-project-id
```

### Set Anthropic API Key as Secret

```bash
supabase secrets set ANTHROPIC_API_KEY=sk-ant-your-key-here
```

Or set it via the Supabase dashboard:
1. Go to **Edge Functions**
2. Click **Secrets**
3. Add `ANTHROPIC_API_KEY` with your key

### Deploy the Edge Function

```bash
supabase functions deploy generate-questions
```

## Step 6: Verify Setup

1. Start the development server:

```bash
npm run dev
```

2. Open the browser console (F12)
3. Check for any Supabase connection errors
4. The game should load categories from the database

## Troubleshooting

### "Supabase not configured" message
- Ensure `.env.local` exists and has correct values
- Restart the dev server after changing env vars

### "Failed to fetch categories" error
- Check that the migration SQL was executed successfully
- Verify your API keys are correct
- Check browser Network tab for specific errors

### Edge Function errors
- Check Edge Function logs in Supabase dashboard
- Ensure `ANTHROPIC_API_KEY` secret is set
- Verify the function is deployed

## Database Schema

### categories
| Column | Type | Description |
|--------|------|-------------|
| id | TEXT | Primary key (e.g., 'sports') |
| name | TEXT | Arabic name |
| name_en | TEXT | English name |
| icon | TEXT | Emoji icon |
| created_at | TIMESTAMPTZ | Creation timestamp |

### questions
| Column | Type | Description |
|--------|------|-------------|
| id | TEXT | Primary key (UUID) |
| category_id | TEXT | Foreign key to categories |
| question_text | TEXT | The question in Arabic |
| question_type | TEXT | 'mcq' or 'open' |
| correct_answer | TEXT | The correct answer |
| options | JSONB | Array of MCQ options |
| difficulty | TEXT | 'easy', 'medium', 'hard', 'expert' |
| points | INTEGER | 100, 200, 300, or 500 |
| is_ai_generated | BOOLEAN | True if AI generated |
| created_at | TIMESTAMPTZ | Creation timestamp |

## Fallback Mode

The game works offline! If Supabase is not configured or unavailable, the game automatically uses the default questions from `src/data/defaultQuestions.js`.

## Adding More Questions

### Via SQL Editor

```sql
INSERT INTO questions (category_id, question_text, question_type, correct_answer, options, difficulty, points)
VALUES (
  'sports',
  'ما هو عدد لاعبي كرة السلة في الفريق الواحد؟',
  'mcq',
  '5 لاعبين',
  '["4 لاعبين", "5 لاعبين", "6 لاعبين", "7 لاعبين"]',
  'easy',
  100
);
```

### Via AI Generation

Use the "Generate Questions" feature in the game (if implemented) to create new questions using Claude AI.

## Security Notes

- The `anon` key is safe to expose in the frontend
- The Anthropic API key is stored as a secret and never exposed
- Row Level Security is enabled on all tables
- Questions can be read by anyone but only inserted by authenticated requests
