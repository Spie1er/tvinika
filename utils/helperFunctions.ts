export const checkLetterStatus = (
  letter: string,
  index: number,
  correctWord: string,
  guess: string
): 'correct' | 'present' | 'absent' | undefined => {
  const usedLetters = Array(correctWord.length).fill(false)

  // First pass: Check for correct letters
  const letterStatuses: string[] = Array(5).fill('absent') // Default all to absent
  for (let i = 0; i < 5; i++) {
    if (guess[i] === correctWord[i]) {
      letterStatuses[i] = 'correct'
      usedLetters[i] = true
    }
  }

  // Second pass: Check for present letters
  for (let i = 0; i < 5; i++) {
    if (letterStatuses[i] === 'absent' && correctWord.includes(guess[i])) {
      const firstAvailableIndex = correctWord.indexOf(guess[i])
      if (firstAvailableIndex !== -1 && !usedLetters[firstAvailableIndex]) {
        letterStatuses[i] = 'present'
        usedLetters[firstAvailableIndex] = true
      }
    }
  }

  return letterStatuses[index] as 'correct' | 'present' | 'absent' | undefined
}

export const getRandomWord = (words: string[]) =>
  words[Math.floor(Math.random() * words.length)]

export const statusPriority = (
  status: 'correct' | 'present' | 'absent' | undefined
): number => {
  if (status === 'correct') return 3
  if (status === 'present') return 2
  if (status === 'absent') return 1
  return 0
}
