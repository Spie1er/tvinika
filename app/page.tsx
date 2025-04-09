'use client'

import { words } from '@/words.json'
import { useEffect, useState } from 'react'
import WordLine from '@/components/WordLine'
import { letterMapping } from '@/utils/letter-mapping'
import GameOverModal from '@/components/game-over-modal/GameOverModal'
import Keyboard from '@/components/keyboard/Keyboard'

export default function Home() {
  const [randomWord, setRandomWord] = useState('')
  const [guesses, setGuesses] = useState(Array(6).fill(null))
  const [currentGuess, setCurrentGuess] = useState('')
  const [isGameOver, setIsGameOver] = useState({
    isOver: false,
    success: false,
    modalOpen: false
  })
  const [wordNotFound, setWordNotFound] = useState(false)
  const [alreadyUsed, setAlreadyUsed] = useState(false)

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

        // Check if word exists
        if (!words.includes(currentGuess)) {
          setWordNotFound(true)
          setTimeout(() => setWordNotFound(false), 2000)
          return
        }

        if (guesses.includes(currentGuess)) {
          setAlreadyUsed(true)
          setTimeout(() => setAlreadyUsed(false), 2000)
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
          return
        }

        if (currentGuessIndex === 5) {
          setTimeout(() => {
            setIsGameOver({ isOver: true, success: false, modalOpen: true })
          }, 2500)
          return
        }
      }

      //if backspace is pressed we delete last letter
      if (event.key === 'Backspace') {
        setCurrentGuess((prev) => prev.slice(0, -1))
        return
      }

      //Returning if the length hits maximum, and if we aren't deleting smth
      if (currentGuess.length >= 5) return

      //Checking if the keyboard is Georgian (ka)
      if (/[\u10A0-\u10FF]/.test(event.key)) {
        setCurrentGuess((prevState) => prevState + event.key)
      }
      //Checking if the keyboard is English and map to Georgian letters
      else if (/^[a-z]$|^[WRTSZJC]$/.test(event.key)) {
        const mapped = letterMapping[event.key]
        if (mapped) setCurrentGuess((prev) => prev + mapped)
      } else {
        return
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentGuess, isGameOver.isOver, currentGuessIndex, randomWord, guesses])

  const restartGame = () => {
    const newWord = words[Math.floor(Math.random() * words.length)]
    setRandomWord(newWord)
    setGuesses(Array(6).fill(null))
    setCurrentGuess('')
    setIsGameOver({ isOver: false, success: false, modalOpen: false })
  }

  console.log(randomWord)
  return (
    <>
      <div>
        <div>
          <div
            className={`transition duration-500 ${isGameOver.isOver ? 'opacity-50' : ''}`}
          >
            <div className='flex flex-col justify-self-center'>
              {guesses.map((guess, index) => {
                const isCurrentGuess = index === currentGuessIndex
                return (
                  <WordLine
                    guess={isCurrentGuess ? currentGuess : (guess ?? '')}
                    key={`${guess}-${index}`}
                    wordIsFinal={!isCurrentGuess && guess !== null}
                    correctWord={randomWord}
                    currentNotFound={isCurrentGuess && wordNotFound}
                    currentAlreadyUsed={isCurrentGuess && alreadyUsed}
                  />
                )
              })}
            </div>
          </div>
          {isGameOver.isOver && !isGameOver.modalOpen && (
            <div className='flex mt-4 justify-self-center'>
              <button
                className='bg-blue-600 text-white py-2 w-full px-4 rounded-lg cursor-pointer'
                onClick={() => restartGame()}
              >
                ხელახა დაწყება
              </button>
            </div>
          )}
        </div>

        {!isGameOver.isOver && <Keyboard />}
      </div>

      {isGameOver.modalOpen && (
        <GameOverModal
          isOpen={isGameOver.modalOpen}
          isGameWon={isGameOver.success}
          onClose={() =>
            setIsGameOver((prevState) => ({ ...prevState, modalOpen: false }))
          }
          onRestart={() => restartGame()}
          guessedWord={randomWord}
        />
      )}
    </>
  )
}
