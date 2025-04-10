export default function Footer() {
  return (
    <footer className='mt-auto w-full border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-400'>
      <div className='max-w-4xl mx-auto px-4 py-6 flex flex-col items-center justify-between gap-4'>
        <p className='text-center text-xs opacity-60'>
          © {new Date().getFullYear()} Tvinika baked by{' '}
          <a
            href='https://www.linkedin.com/in/berulava/'
            className='text-sky-800 dark:text-sky-400'
            target='_blank'
          >
            Konstantine Berulava
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
