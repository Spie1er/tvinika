'use client'

import Link from 'next/link'
import Image from 'next/image'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { useState } from 'react'
import RulesModal from '@/components/rules-modal/RulesModal'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <header className='bg-white dark:bg-gray-800 shadow-md'>
      <div className='container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-4'>
        <Link
          href='/'
          className='flex justify-center sm:justify-start items-center gap-2 w-full sm:w-auto'
        >
          <Image
            src='/logo.png'
            alt='logo'
            width={200}
            height={36}
            priority
            style={{ width: 'auto', height: 'auto' }}
          />
        </Link>
        <div className='flex justify-center sm:justify-end items-center space-x-4 w-full sm:w-auto'>
          <nav className='flex gap-4 items-center'>
            <button
              className='p-2 dark:text-white rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer'
              onClick={() => setIsModalOpen(true)}
            >
              წესები
            </button>
            <ThemeSwitcher />
          </nav>
        </div>
      </div>

      <RulesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  )
}

export default Header
