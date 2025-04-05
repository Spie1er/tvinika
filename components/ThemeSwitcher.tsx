'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition'
      aria-label='Toggle Theme'
    >
      {theme === 'dark' ?
        <Sun size={18} className='text-yellow-400 cursor-pointer' />
      : <Moon size={18} className='cursor-pointer' />}
    </button>
  )
}
export default ThemeSwitcher
