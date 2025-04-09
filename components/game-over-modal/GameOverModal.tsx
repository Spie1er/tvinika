import { FC } from 'react'
import { X } from 'lucide-react'

interface GameOverModalProps {
  isOpen: boolean
  onClose: () => void
  onRestart: () => void
  guessedWord: string
  isGameWon: boolean
  // score: number
}

const GameOverModal: FC<GameOverModalProps> = ({
  isOpen,
  onClose,
  onRestart,
  guessedWord,
  isGameWon
  // score
}) => {
  if (!isOpen) return null

  // const shareOnFacebook = () => {
  //   const message = `მე სწორად გამოვიცანი სიტყვა: "${guessedWord}:`
  //   const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
  //     window.location.href
  //   )}&quote=${encodeURIComponent(message)}`
  //   window.open(url, '_blank')
  // }

  //TODO Add a share button
  return (
    <div
      className='fixed inset-0 bg-black/60 z-50 flex items-center justify-center text-gray-900 dark:text-white'
      onClick={onClose}
    >
      <div
        className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-80 max-w-lg p-6 rounded-lg shadow-lg relative'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button className='absolute top-4 right-4' onClick={onClose}>
          <X className='cursor-pointer' />
        </button>

        <h2 className='text-2xl font-semibold text-center text-green-500'>
          {isGameWon ? 'გილოცავთ!' : 'უუპს...'}
        </h2>
        <p className='text-lg text-center my-4'>
          {isGameWon ?
            `თქვენ სწორად გამოიცანით სიტყვა "${guessedWord}" 🎉`
          : `სამწუხაროდ, თქვენ ვერ გამოიცანით სიტყვა "${guessedWord}" 😬 \n სცადეთ კიდევ.`
          }
        </p>
        <div className='flex flex-col items-center gap-4'>
          {/*{isGameWon && (*/}
          {/*  <button*/}
          {/*    onClick={shareOnFacebook}*/}
          {/*    className='bg-blue-600 text-white py-2 px-4 rounded-lg w-full cursor-pointer'*/}
          {/*  >*/}
          {/*    გაზიარება*/}
          {/*  </button>*/}
          {/*)}*/}

          <button
            onClick={onRestart}
            className='bg-blue-600 text-white py-2 px-4 rounded-lg w-full cursor-pointer'
          >
            ხელახლა დაწყება
          </button>

          <button
            onClick={onClose}
            className='bg-gray-800 text-white py-2 px-4 rounded-lg w-full cursor-pointer'
          >
            დახურვა
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameOverModal
