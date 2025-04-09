import { fullKeyboard, LetterKeys } from '@/utils/keyboard-letters'
import { useState } from 'react'
import { Delete, ArrowBigUp } from 'lucide-react'

const Keyboard = () => {
  const [isShift, setIsShift] = useState(false)
  return (
    <div className='flex flex-col items-center gap-2 mt-5'>
      {fullKeyboard.map((row, rowIndex) => (
        <div className='flex gap-1.5' key={rowIndex}>
          {row.map((key) => {
            if (key === 'shift' || key === 'Backspace') {
              return (
                <button
                  key={key}
                  className={`w-[60px] h-[50px] rounded-lg border-none cursor-pointer transition-all 
                  duration-200 ease-in-out flex items-center justify-center relative shadow-sm/30 
                  bg-zinc-100 dark:bg-zinc-600 ${
                    isShift ? 'text-sky-600' : 'text-[#333333] dark:text-white'
                  }`}
                  onClick={() => {
                    if (key === 'shift') {
                      setIsShift((prevState) => !prevState)
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

            return (
              <button
                key={normalLetter}
                className='w-[40px] h-[50px] text-[18px] rounded-lg border-none cursor-pointer transition-all
                duration-200 ease-in-out flex items-center justify-center relative bg-zinc-100 dark:bg-zinc-600 shadow-sm/30'
                onClick={() => {
                  console.log(isShift ? shiftedLetter : normalLetter)
                  if (isShift) {
                    setIsShift(false)
                  }
                }}
              >
                <span
                  className={`absolute text-[20px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                    isShift && letterKey.shifted ?
                      'text-current'
                    : 'text-current'
                  }`}
                >
                  {isShift && letterKey.shifted ? shiftedLetter : normalLetter}
                </span>
                {shiftedLetter && (
                  <span
                    className={`absolute text-[12px] text-[oklch(0.598_0.137_239.971)] ${
                      isShift ?
                        'top-[2px] right-[5px]'
                      : 'top-[2px] right-[5px]'
                    }`}
                  >
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
          onClick={() => console.log('enteeer')}
        >
          შემოწმება
        </button>
      </div>
    </div>
  )
}

export default Keyboard
