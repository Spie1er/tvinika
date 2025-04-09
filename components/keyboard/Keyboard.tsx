import { useState } from 'react'
import { fullKeyboard, LetterKeys } from '@/utils/keyboard-letters'
import { ArrowBigUp, Delete } from 'lucide-react'

type KeyboardProps = {
  onKeyClick: (key: string) => void
}

const Keyboard = ({ onKeyClick }: KeyboardProps) => {
  const [isShift, setIsShift] = useState(false)
  return (
    <div className='flex flex-col items-center gap-2 mt-5'>
      {fullKeyboard.map((row, rowIndex) => (
        <div className='flex gap-1 sm:gap-1.5' key={rowIndex}>
          {row.map((key) => {
            if (key === 'shift' || key === 'Backspace') {
              return (
                <button
                  key={key}
                  className={`sm:w-[60px] sm:h-[50px] w-[50px] rounded-lg border-none cursor-pointer transition-all 
                  duration-200 ease-in-out flex items-center justify-center relative shadow-sm/30 
                  bg-zinc-200 dark:bg-zinc-600 ${
                    isShift ? 'text-sky-600' : 'text-[#333333] dark:text-white'
                  }`}
                  onClick={() => {
                    if (key === 'shift') {
                      setIsShift((prevState) => !prevState)
                    } else {
                      onKeyClick('Backspace')
                    }
                  }}
                >
                  {key === 'shift' ?
                    <ArrowBigUp />
                  : <Delete className='text-[#333333] dark:text-white' />}
                </button>
              )
            }

            const letterKey = key as LetterKeys
            const normalLetter = letterKey.letter
            const shiftedLetter = letterKey.shifted
            const finalKey =
              isShift && shiftedLetter ? shiftedLetter : normalLetter

            return (
              <button
                key={normalLetter}
                className='w-[30px] h-[50px] text-[16px] sm:w-[40px] sm:h-[50px] sm:text-[18px] rounded-lg border-none cursor-pointer transition-all
                duration-200 ease-in-out flex items-center justify-center relative bg-zinc-200 dark:bg-zinc-600 shadow-sm/30'
                onClick={() => {
                  onKeyClick(finalKey)
                  if (isShift) setIsShift(false)
                }}
              >
                <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  {finalKey}
                </span>

                {shiftedLetter && (
                  <span className='absolute text-[10px] sm:text-[12px] text-[oklch(0.598_0.137_239.971)] top-[2px] right-[5px]'>
                    {isShift ? normalLetter : shiftedLetter}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      ))}
      <div className='flex w-full mt-3 justify-center'>
        <button
          className='bg-blue-600 text-white w-[200px] py-2 px-4 rounded-lg cursor-pointer'
          onClick={() => onKeyClick('Enter')}
        >
          შემოწმება
        </button>
      </div>
    </div>
  )
}

export default Keyboard
