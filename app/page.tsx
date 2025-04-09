'use client'

import { words } from '@/words.json'
import { useCallback, useEffect, useRef, useState } from 'react'
import WordLine from '@/components/WordLine'
import { letterMapping } from '@/utils/letter-mapping'
import GameOverModal from '@/components/game-over-modal/GameOverModal'
import Keyboard from '@/components/keyboard/Keyboard'
import {
  checkLetterStatus,
  getRandomWord,
  statusPriority
} from '@/utils/helperFunctions'
// import { playAudio } from '@/utils/audio'

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

  const winAudioRef = useRef<HTMLAudioElement | null>(null)
  const loseAudioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    winAudioRef.current = new Audio('/audio/win.mp3')
    loseAudioRef.current = new Audio('/audio/lose.mp3')
  }, [])

  const playAudio = (type: 'win' | 'lose') => {
    const audio = type === 'win' ? winAudioRef.current : loseAudioRef.current
    if (audio) {
      audio.currentTime = 0
      audio.play().then()
    }
  }

  const currentGuessIndex = guesses.findIndex((guess) => guess === null)

  const [usedKeys, setUsedKeys] = useState<
    Record<string, 'correct' | 'present' | 'absent'>
  >({})

  const updateUsedKeys = useCallback(
    (guess: string, correctWord: string) => {
      const updatedKeys = { ...usedKeys }

      for (let i = 0; i < 5; i++) {
        const letter = guess[i]
        const status = checkLetterStatus(letter, i, correctWord, guess)

        if (
          !updatedKeys[letter] ||
          statusPriority(status) > statusPriority(updatedKeys[letter])
        ) {
          updatedKeys[letter] = status as 'absent' | 'present' | 'correct'
        }
      }

      setUsedKeys(updatedKeys)
    },
    [usedKeys]
  )

  const handleKeyInput = useCallback(
    (key: string) => {
      if (isGameOver.isOver) return

      if (key === 'Enter') {
        if (currentGuess.length !== 5) return

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

        updateUsedKeys(currentGuess, randomWord)

        const newGuessesArray = [...guesses]
        newGuessesArray[currentGuessIndex] = currentGuess
        setGuesses(newGuessesArray)
        setCurrentGuess('')

        if (randomWord === currentGuess) {
          setTimeout(() => {
            playAudio('win')
            setIsGameOver({ isOver: true, success: true, modalOpen: true })
          }, 2500)
          return
        }

        if (currentGuessIndex === 5) {
          setTimeout(() => {
            playAudio('lose')
            setIsGameOver({ isOver: true, success: false, modalOpen: true })
          }, 2500)
          return
        }
      }

      if (key === 'Backspace') {
        setCurrentGuess((prev) => prev.slice(0, -1))
        return
      }

      if (currentGuess.length >= 5) return

      if (/[\u10A0-\u10FF]/.test(key)) {
        setCurrentGuess((prevState) => prevState + key)
      } else if (/^[a-z]$|^[WRTSZJC]$/.test(key)) {
        const mapped = letterMapping[key]
        if (mapped) setCurrentGuess((prev) => prev + mapped)
      }
    },
    [
      isGameOver.isOver,
      currentGuess,
      currentGuessIndex,
      guesses,
      randomWord,
      updateUsedKeys
    ] // Add updateUsedKeys to dependencies
  )

  useEffect(() => {
    const selectedWord = getRandomWord(words)
    setRandomWord(selectedWord)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      handleKeyInput(event.key)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyInput])

  const restartGame = () => {
    const newWord = words[Math.floor(Math.random() * words.length)]
    setRandomWord(newWord)
    setGuesses(Array(6).fill(null))
    setCurrentGuess('')
    setIsGameOver({ isOver: false, success: false, modalOpen: false })
    setUsedKeys({})
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

        {!isGameOver.isOver && (
          <Keyboard onKeyClick={handleKeyInput} usedKeys={usedKeys} />
        )}
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
