import Tile from '@/components/Tile'
import { checkLetterStatus } from '@/utils/helperFunctions'

const WordLine = ({
  guess,
  wordIsFinal,
  correctWord
}: {
  guess: string
  wordIsFinal: boolean
  correctWord: string
}) => {
  console.log(wordIsFinal)
  // Fill the letters array with empty strings up to 5 characters
  const letters = guess.split('').concat(Array(5 - guess.length).fill(''))

  return (
    <div className='flex gap-1 mt-1 line'>
      {letters.map((letter, index) => {
        const status =
          wordIsFinal ?
            checkLetterStatus(letter, index, correctWord)
          : undefined

        return <Tile key={index} letter={letter} status={status} />
      })}
    </div>
  )
}

export default WordLine
