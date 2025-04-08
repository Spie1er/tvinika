import Tile from '@/components/Tile'
import { checkLetterStatus } from '@/utils/helperFunctions'

const WordLine = ({
  guess,
  wordIsFinal,
  correctWord,
  currentNotFound,
  currentAlreadyUsed
}: {
  guess: string
  wordIsFinal: boolean
  correctWord: string
  currentNotFound: boolean
  currentAlreadyUsed: boolean
}) => {
  // Fill the letters array with empty strings up to 5 characters
  const letters = guess.split('').concat(Array(5 - guess.length).fill(''))

  return (
    <div
      className={`relative flex gap-1 mt-1 line${
        currentNotFound || currentAlreadyUsed ? ' shake' : ''
      }`}
    >
      {letters.map((letter, index) => {
        const status =
          wordIsFinal ?
            checkLetterStatus(letter, index, correctWord, guess)
          : undefined

        return <Tile key={index} letter={letter} status={status} />
      })}
      {currentNotFound && (
        <p className='absolute top-[12px] left-[47px] bg-white py-1 px-2 text-gray-700 rounded-sm text-sm'>
          სიტყვა ბაზაში არ არის
        </p>
      )}

      {currentAlreadyUsed && (
        <p className='absolute top-[12px] left-[32px] bg-white py-1 px-2 text-gray-700 rounded-sm text-sm'>
          ასეთი სიტყვა უკვე სცადეთ
        </p>
      )}
    </div>
  )
}

export default WordLine
