import { useEffect } from 'react'
import { X } from 'lucide-react'
import LetterBox from '@/components/rules-modal/LetterBox'

interface RulesModalProps {
  isOpen: boolean
  onClose: () => void
}

const RulesModal = ({ isOpen, onClose }: RulesModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 bg-black/60 z-50 flex items-center justify-center text-gray-900 dark:text-white'
      onClick={onClose}
    >
      <div
        className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-full max-w-lg p-6 rounded-lg shadow-lg relative'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button className='absolute top-4 right-4' onClick={onClose}>
          <X className='cursor-pointer' />
        </button>
        <h2 className='text-xl font-bold mb-2'>თამაშის წესები</h2>
        <p className='mb-4'>გამოიცანით სიტყვა 6 ცდაში.</p>
        <ul className='list-disc pl-6 space-y-2 mb-6 text-sm'>
          <li>თითოეული ცდა უნდა იყოს 5 ასოიანი არსებული სიტყვა.</li>
          <li>
            უჯრების ფერი მიგანიშნებთ, რამდენად ახლოს ხართ გამოსაცნობ სიტყვასთან
          </li>
        </ul>
        <h3 className='font-bold mb-2'>მაგალითად:</h3>
        {/* Example 1 */}
        <div className='mb-4'>
          <div className='flex gap-1 mb-1'>
            <LetterBox letter='ტ' status='correct' />
            <LetterBox letter='ვ' />
            <LetterBox letter='ი' />
            <LetterBox letter='ნ' />
            <LetterBox letter='ი' />
          </div>
          <p>
            <span className='font-guess'>ტ</span>{' '}
            <span className='text-sm'>
              არის სიტყვაში და ამასთან სწორ პოზიციაზე.
            </span>
          </p>
        </div>
        {/* Example 2 */}
        <div className='mb-4'>
          <div className='flex gap-1 mb-1'>
            <LetterBox letter='წ' />
            <LetterBox letter='ი' status='present' />
            <LetterBox letter='გ' />
            <LetterBox letter='ნ' />
            <LetterBox letter='ი' />
          </div>
          <p>
            <span className='font-guess'>ი</span>{' '}
            <span className='text-sm'>
              არის სიტყვაში, მაგრამ არასწორ პოზიციაზე.
            </span>
          </p>
        </div>
        {/* Example 3 */}
        <div className='mb-6'>
          <div className='flex gap-1 mb-1'>
            <LetterBox letter='ც' />
            <LetterBox letter='ო' />
            <LetterBox letter='დ' />
            <LetterBox letter='ნ' status='absent' />
            <LetterBox letter='ა' />
          </div>
          <p>
            <span className='font-guess'>ნ</span>{' '}
            <span className='text-sm'>არ არის გამოსაცნობ სიტყვაში.</span>
          </p>
        </div>
        <hr className='border-gray-300 dark:border-gray-700 mb-4' />
        <p className='text-sm mb-2'></p>
        <p className='text-sm'>
          ბაზაში გამორჩენილი სიტყვების ან აღმოჩენილი უზუსტობების შემთხვევაში
          გთხოვთ, მოგვწეროთ ელ.ფოსტაზე:{' '}
          <a
            href='mailto:berulava@gmail.com'
            className='text-green-600 dark:text-green-400 underline'
          >
            berulava@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default RulesModal
