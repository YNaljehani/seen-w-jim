-- Supabase Migration: Create tables for Seen Jeem trivia game
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  name_en TEXT,
  icon TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Questions table
CREATE TABLE IF NOT EXISTS questions (
  id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::text,
  category_id TEXT REFERENCES categories(id) ON DELETE CASCADE,
  question_text TEXT NOT NULL,
  question_type TEXT CHECK (question_type IN ('mcq', 'open')) NOT NULL,
  correct_answer TEXT NOT NULL,
  options JSONB, -- Array of options for MCQ questions
  difficulty TEXT CHECK (difficulty IN ('easy', 'medium', 'hard', 'expert')) NOT NULL,
  points INTEGER NOT NULL CHECK (points IN (100, 200, 300, 500)),
  is_ai_generated BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_questions_category ON questions(category_id);
CREATE INDEX IF NOT EXISTS idx_questions_difficulty ON questions(difficulty);

-- Enable Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;

-- Allow public read access to categories
CREATE POLICY "Allow public read access on categories"
  ON categories FOR SELECT
  USING (true);

-- Allow public read access to questions
CREATE POLICY "Allow public read access on questions"
  ON questions FOR SELECT
  USING (true);

-- Allow authenticated users to insert questions (for AI generation)
CREATE POLICY "Allow authenticated insert on questions"
  ON questions FOR INSERT
  WITH CHECK (true);

-- Seed default categories
INSERT INTO categories (id, name, name_en, icon) VALUES
  ('sports', 'رياضة', 'Sports', '⚽'),
  ('movies', 'أفلام وسينما', 'Movies', '🎬'),
  ('geography', 'جغرافيا', 'Geography', '🌍'),
  ('islamic', 'إسلاميات', 'Islamic', '🕌'),
  ('technology', 'تقنية', 'Technology', '💻'),
  ('saudi', 'سعودي', 'Saudi Arabia', '🇸🇦'),
  ('kuwait', 'كويتي', 'Kuwait', '🇰🇼'),
  ('music', 'موسيقى وفن', 'Music & Art', '🎵'),
  ('history', 'تاريخ', 'History', '📜'),
  ('food', 'طعام ومطبخ', 'Food & Cuisine', '🍽️'),
  ('science', 'علوم', 'Science', '🔬'),
  ('gaming', 'ألعاب فيديو', 'Video Games', '🎮'),
  ('animals', 'حيوانات', 'Animals', '🦁'),
  ('arabic', 'لغة عربية', 'Arabic Language', '📖'),
  ('space', 'فضاء', 'Space', '🚀'),
  ('emirates', 'إماراتي', 'UAE', '🇦🇪')
ON CONFLICT (id) DO NOTHING;

-- Seed sample questions (one per category for testing)
INSERT INTO questions (id, category_id, question_text, question_type, correct_answer, options, difficulty, points) VALUES
  ('sp1', 'sports', 'كم عدد اللاعبين في فريق كرة القدم؟', 'mcq', '11 لاعب', '["9 لاعبين", "10 لاعبين", "11 لاعب", "12 لاعب"]', 'easy', 100),
  ('sp2', 'sports', 'من هو هداف كأس العالم 2022 في قطر؟', 'mcq', 'كيليان مبابي', '["كيليان مبابي", "ليونيل ميسي", "أوليفييه جيرو", "جوليان ألفاريز"]', 'medium', 200),
  ('sp3', 'sports', 'ما هو النادي الذي فاز بأكبر عدد من بطولات دوري أبطال أوروبا؟', 'mcq', 'ريال مدريد', '["ريال مدريد", "ميلان", "ليفربول", "بايرن ميونخ"]', 'hard', 300),
  ('sp4', 'sports', 'في أي عام فاز المنتخب السعودي على الأرجنتين في كأس العالم؟', 'open', '2022', NULL, 'expert', 500),

  ('mv1', 'movies', 'من هو بطل فيلم "تايتانيك"؟', 'mcq', 'ليوناردو دي كابريو', '["براد بيت", "ليوناردو دي كابريو", "توم كروز", "جوني ديب"]', 'easy', 100),
  ('mv2', 'movies', 'ما هو أول فيلم رسوم متحركة من ديزني؟', 'mcq', 'سنو وايت والأقزام السبعة', '["سنو وايت والأقزام السبعة", "بينوكيو", "فانتازيا", "دمبو"]', 'medium', 200),
  ('mv3', 'movies', 'من هو مخرج فيلم "الأب الروحي"؟', 'mcq', 'فرانسيس فورد كوبولا', '["فرانسيس فورد كوبولا", "مارتن سكورسيزي", "ستيفن سبيلبرغ", "كوينتن تارانتينو"]', 'hard', 300),
  ('mv4', 'movies', 'ما هو الفيلم الأعلى إيرادات في تاريخ السينما؟', 'open', 'أفاتار', NULL, 'expert', 500),

  ('geo1', 'geography', 'ما هي أكبر قارة في العالم؟', 'mcq', 'آسيا', '["أفريقيا", "آسيا", "أوروبا", "أمريكا الشمالية"]', 'easy', 100),
  ('geo2', 'geography', 'ما هي عاصمة أستراليا؟', 'mcq', 'كانبيرا', '["سيدني", "ملبورن", "كانبيرا", "بريزبن"]', 'medium', 200),
  ('geo3', 'geography', 'ما هي أكبر دولة عربية من حيث المساحة؟', 'mcq', 'الجزائر', '["السعودية", "الجزائر", "السودان", "ليبيا"]', 'hard', 300),
  ('geo4', 'geography', 'كم عدد الدول العربية؟', 'open', '22', NULL, 'expert', 500)
ON CONFLICT (id) DO NOTHING;
