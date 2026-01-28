import { supabase, canUseSupabase } from '../lib/supabase'

/**
 * Fetch all categories from Supabase
 * @returns {Promise<Array>} Array of categories with their questions
 */
export async function fetchCategories() {
  if (!canUseSupabase()) {
    throw new Error('Supabase not configured')
  }

  const { data: categories, error: catError } = await supabase
    .from('categories')
    .select('*')
    .order('created_at')

  if (catError) {
    throw new Error(`Failed to fetch categories: ${catError.message}`)
  }

  // Fetch questions for each category
  const { data: questions, error: qError } = await supabase
    .from('questions')
    .select('*')
    .order('points')

  if (qError) {
    throw new Error(`Failed to fetch questions: ${qError.message}`)
  }

  // Group questions by category
  const categoriesWithQuestions = categories.map(category => ({
    id: category.id,
    name: category.name,
    nameEn: category.name_en,
    icon: category.icon,
    questions: questions
      .filter(q => q.category_id === category.id)
      .map(q => ({
        id: q.id,
        questionText: q.question_text,
        questionType: q.question_type,
        correctAnswer: q.correct_answer,
        options: q.options,
        difficulty: q.difficulty,
        points: q.points,
        isAiGenerated: q.is_ai_generated
      }))
  }))

  return categoriesWithQuestions
}

/**
 * Fetch questions for a specific category
 * @param {string} categoryId - The category ID
 * @returns {Promise<Array>} Array of questions
 */
export async function fetchQuestionsForCategory(categoryId) {
  if (!canUseSupabase()) {
    throw new Error('Supabase not configured')
  }

  const { data, error } = await supabase
    .from('questions')
    .select('*')
    .eq('category_id', categoryId)
    .order('points')

  if (error) {
    throw new Error(`Failed to fetch questions: ${error.message}`)
  }

  return data.map(q => ({
    id: q.id,
    questionText: q.question_text,
    questionType: q.question_type,
    correctAnswer: q.correct_answer,
    options: q.options,
    difficulty: q.difficulty,
    points: q.points,
    isAiGenerated: q.is_ai_generated
  }))
}

/**
 * Generate new questions using AI via Vercel Serverless Function
 * @param {string} categoryId - The category ID
 * @param {string} categoryName - The category name in Arabic
 * @param {string} difficulty - The difficulty level
 * @param {number} count - Number of questions to generate
 * @returns {Promise<{questions: Array, warning?: string, isFallback?: boolean}>} Generated questions with optional warning
 */
export async function generateAIQuestions(categoryId, categoryName, difficulty = 'medium', count = 1) {
  const response = await fetch('/api/generate-questions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ categoryId, categoryName, difficulty, count })
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.error || `API error: ${response.status}`)
  }

  const data = await response.json()

  return {
    questions: data.questions,
    warning: data.warning || null,
    isFallback: data.questions?.[0]?.isFallback || false
  }
}

/**
 * Save a question to the database
 * @param {Object} question - The question object
 * @returns {Promise<Object>} The saved question
 */
export async function saveQuestion(question) {
  if (!canUseSupabase()) {
    throw new Error('Supabase not configured')
  }

  const { data, error } = await supabase
    .from('questions')
    .insert({
      category_id: question.categoryId,
      question_text: question.questionText,
      question_type: question.questionType,
      correct_answer: question.correctAnswer,
      options: question.options || null,
      difficulty: question.difficulty,
      points: question.points,
      is_ai_generated: question.isAiGenerated || false
    })
    .select()
    .single()

  if (error) {
    throw new Error(`Failed to save question: ${error.message}`)
  }

  return {
    id: data.id,
    questionText: data.question_text,
    questionType: data.question_type,
    correctAnswer: data.correct_answer,
    options: data.options,
    difficulty: data.difficulty,
    points: data.points,
    isAiGenerated: data.is_ai_generated
  }
}

/**
 * Get question count per category
 * @returns {Promise<Object>} Object with category IDs as keys and counts as values
 */
export async function getQuestionCounts() {
  if (!canUseSupabase()) {
    throw new Error('Supabase not configured')
  }

  const { data, error } = await supabase
    .from('questions')
    .select('category_id')

  if (error) {
    throw new Error(`Failed to fetch question counts: ${error.message}`)
  }

  const counts = {}
  data.forEach(q => {
    counts[q.category_id] = (counts[q.category_id] || 0) + 1
  })

  return counts
}
