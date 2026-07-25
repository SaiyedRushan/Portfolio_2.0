import React from 'react'

function Footer() {
  return (
    <footer className='border-t border-black/5 bg-white py-8 dark:border-white/10 dark:bg-black'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-gray-500 dark:text-gray-400 sm:flex-row sm:px-10'>
        <p>&copy; {new Date().getFullYear()} Rushanshah Saiyed</p>
        <div className='flex items-center gap-5'>
          <a href='mailto:rushan52@gmail.com' className='transition-colors hover:text-brand dark:hover:text-brand-light'>
            Email
          </a>
          <a
            href='https://www.linkedin.com/in/rushanshahsaiyed/'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-colors hover:text-brand dark:hover:text-brand-light'
          >
            LinkedIn
          </a>
          <a
            href='https://github.com/SaiyedRushan'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-colors hover:text-brand dark:hover:text-brand-light'
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
