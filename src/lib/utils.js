import { clsx } from 'clsx'

// Combine class names with clsx
export function cn(...inputs) {
  return clsx(inputs)
}

// Generate random room code
export function generateRoomCode(length = 6) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // Removed confusing chars
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

// Shuffle array (Fisher-Yates)
export function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Format time (seconds to MM:SS)
export function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

// Delay utility
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Arabic number formatting
export function formatArabicNumber(num) {
  const arabicNums = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
  return num.toString().replace(/[0-9]/g, d => arabicNums[d])
}

// Copy to clipboard
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Failed to copy:', err)
    return false
  }
}

// Share content (Web Share API with fallback)
export async function shareContent(data) {
  if (navigator.share) {
    try {
      await navigator.share(data)
      return true
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error('Share failed:', err)
      }
      return false
    }
  } else {
    // Fallback to clipboard
    return copyToClipboard(data.text || data.url || '')
  }
}
