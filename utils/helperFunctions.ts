export const checkLetterStatus = (
  letter: string,
  index: number,
  correctWord: string
) => {
  if (letter === correctWord[index]) {
    return 'correct'
  } else if (correctWord.includes(letter)) {
    return 'present'
  } else {
    return 'absent'
  }
}
