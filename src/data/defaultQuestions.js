// Default categories and questions for the game
// Questions are loaded from separate bank files for maintainability
// Each category has 32 questions (8 per difficulty) for maximum variety

import { categories1 } from './questionsBank1'
import { categories2 } from './questionsBank2'

// Category metadata (name, icon, etc.)
const categoryMeta = {
  sports:     { name: 'رياضة',        nameEn: 'Sports',          icon: '⚽' },
  movies:     { name: 'أفلام وسينما', nameEn: 'Movies',          icon: '🎬' },
  geography:  { name: 'جغرافيا',      nameEn: 'Geography',       icon: '🌍' },
  islamic:    { name: 'إسلاميات',     nameEn: 'Islamic',         icon: '🕌' },
  technology: { name: 'تقنية',        nameEn: 'Technology',      icon: '💻' },
  saudi:      { name: 'سعودي',        nameEn: 'Saudi Arabia',    icon: '🇸🇦' },
  kuwait:     { name: 'كويتي',        nameEn: 'Kuwait',          icon: '🇰🇼' },
  food:       { name: 'طعام ومطبخ',   nameEn: 'Food & Cuisine',  icon: '🍽️' },
  music:      { name: 'موسيقى وفن',   nameEn: 'Music & Art',     icon: '🎵' },
  history:    { name: 'تاريخ',        nameEn: 'History',         icon: '📜' },
  science:    { name: 'علوم',         nameEn: 'Science',         icon: '🔬' },
  gaming:     { name: 'ألعاب فيديو',  nameEn: 'Video Games',     icon: '🎮' },
  animals:    { name: 'حيوانات',      nameEn: 'Animals',         icon: '🦁' },
  arabic:     { name: 'لغة عربية',    nameEn: 'Arabic Language',  icon: '📖' },
  space:      { name: 'فضاء',         nameEn: 'Space',           icon: '🚀' },
  emirates:   { name: 'إماراتي',      nameEn: 'UAE',             icon: '🇦🇪' },
}

// Merge both banks and attach metadata
const allBankCategories = [...categories1, ...categories2]

export const defaultCategories = allBankCategories.map(cat => {
  const meta = categoryMeta[cat.id] || { name: cat.id, nameEn: cat.id, icon: '❓' }
  return {
    id: cat.id,
    name: meta.name,
    nameEn: meta.nameEn,
    icon: meta.icon,
    questions: cat.questions
  }
})

// Function to get questions for selected categories (kept for compatibility)
export function getQuestionsForCategories(categoryIds, categories) {
  const questions = []

  categoryIds.forEach(catId => {
    const category = categories.find(c => c.id === catId)
    if (category) {
      category.questions.forEach(q => {
        questions.push({
          ...q,
          categoryId: catId,
          categoryName: category.name,
          categoryIcon: category.icon
        })
      })
    }
  })

  return shuffleArray(questions)
}

// Fisher-Yates shuffle
function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
