'use client'

import { words } from '@/words.json'
import { useEffect, useState } from 'react'
import WordLine from '@/components/WordLine'
import { letterMapping } from '@/utils/letter-mapping'
import GameOverModal from '@/components/game-over-modal/GameOverModal'

export default function Home() {
  const [randomWord, setRandomWord] = useState('')
  const [guesses, setGuesses] = useState(Array(6).fill(null))
  const [currentGuess, setCurrentGuess] = useState('')
  const [isGameOver, setIsGameOver] = useState({
    isOver: false,
    success: false,
    modalOpen: false
  })
  const currentGuessIndex = guesses.findIndex((guess) => guess === null)

  useEffect(() => {
    const selectedWord = words[Math.floor(Math.random() * words.length)]
    setRandomWord(selectedWord)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isGameOver.isOver) {
        return
      }

      if (event.key === 'Enter') {
        if (currentGuess.length !== 5) {
          return
        }

        const newGuessesArray = [...guesses]
        newGuessesArray[currentGuessIndex] = currentGuess
        setGuesses(newGuessesArray)
        setCurrentGuess('')

        if (randomWord === currentGuess) {
          setTimeout(() => {
            setIsGameOver({ isOver: true, success: true, modalOpen: true })
          }, 2500)
        }

        if (currentGuessIndex === 5) {
          setTimeout(() => {
            setIsGameOver({ isOver: true, success: false, modalOpen: true })
          }, 2500)
        }
      }

      //Returning if the length hits maximum, and if we aren't deleting smth
      if (currentGuess.length >= 5 && event.key !== 'Backspace') return

      //Checking if the keyboard is Georgian (ka)
      if (/[\u10A0-\u10FF]/.test(event.key)) {
        setCurrentGuess((prevState) => prevState + event.key)
      }
      //Checking if the keyboard is English and map to Georgian letters
      else if (/^[a-z]$|^[WRTSZJC]$/.test(event.key)) {
        const englishToGeorgian = letterMapping[event.key]
        setCurrentGuess((prevState) => prevState + englishToGeorgian)
      }
      //if backspace is pressed we delete last letter
      else if (event.key === 'Backspace') {
        setCurrentGuess((prevState) => prevState.slice(0, -1))
      } else {
        return
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentGuess, isGameOver.isOver, currentGuessIndex, randomWord, guesses])

  return (
    <>
      <div>
        <div className='flex flex-col'>
          {guesses.map((guess, index) => {
            const isCurrentGuess = index === currentGuessIndex
            return (
              <WordLine
                guess={isCurrentGuess ? currentGuess : (guess ?? '')}
                key={`${guess}-${index}`}
                wordIsFinal={!isCurrentGuess && guess !== null}
                correctWord={randomWord}
              />
            )
          })}
        </div>
      </div>
      {isGameOver.modalOpen && (
        <GameOverModal
          isOpen={isGameOver.modalOpen}
          isGameWon={isGameOver.success}
          onClose={() =>
            setIsGameOver((prevState) => ({ ...prevState, modalOpen: false }))
          }
          onRestart={() => {
            console.log('new game')
          }}
          guessedWord={randomWord}
        />
      )}
    </>
  )
}
