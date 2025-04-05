'use client'

import Link from 'next/link'
import Image from 'next/image'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { useState } from 'react'
import RulesModal from '@/components/modal/RulesModal'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <header className='bg-white dark:bg-gray-800 shadow-md'>
      <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
        <Link href='/' className='flex items-center gap-2'>
          <Image
            src='/logo.png'
            alt='logo'
            width={200}
            height={36}
            style={{ width: 'auto', height: 'auto' }} // Prevents Next.js warning
          />
        </Link>
        <div className='flex items-center space-x-4'>
          <nav className='md:flex gap-4 items-center'>
            <button
              className='p-2 dark:text-white rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer'
              onClick={openModal}
            >
              წესები
            </button>
            <ThemeSwitcher />
          </nav>
        </div>
      </div>

      <RulesModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  )
}

export default Header
