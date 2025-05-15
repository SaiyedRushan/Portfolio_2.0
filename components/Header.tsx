import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import useSound from 'use-sound'
import { IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon, HomeIcon } from '@heroicons/react/24/solid'
import { useTheme } from '../context/ThemeContext'

function Header() {
  const [play] = useSound('mouse-click.wav', {
    volume: 0.1,
    playbackRate: 2.0,
  })
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center bg-transparent'>
      <motion.div initial={{ x: -500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.0 }} className='flex flex-row items-center gap-3'>
        <Link href='/#home' className=' hover:scale-125 transform transition-transform duration-300' onMouseEnter={() => play()}>
          <HomeIcon className='w-6 h-6 fill-none stroke-2 stroke-gray-400' />
        </Link>
        <SocialIcon
          url='https://www.linkedin.com/in/rushanshahsaiyed/'
          fgColor='gray'
          target='_blank'
          bgColor='transparent'
          className='hover:scale-125 transform transition-transform duration-300'
          onMouseEnter={() => play()}
        ></SocialIcon>
        <SocialIcon
          url='https://github.com/SaiyedRushan'
          target='_blank'
          fgColor='gray'
          bgColor='transparent'
          className=' hover:scale-125 transform transition-transform duration-300'
          onMouseEnter={() => play()}
        ></SocialIcon>
        <Link href='/blogs' className=' hover:scale-125 transform transition-transform duration-300' onMouseEnter={() => play()}>
          <p className='uppercase text-sm text-gray-400 p-3'>Blog</p>
        </Link>
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.0 }}
        className='flex flex-row items-center gap-2 text-gray-300 cursor-pointer'
      >
        <IconButton
          aria-label='Toggle theme'
          title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
          icon={isDarkMode ? <SunIcon className='w-5 h-5 fill-none stroke-2 stroke-gray-400' /> : <MoonIcon className='w-5 h-5 fill-none stroke-2 stroke-gray-400' />}
          onClick={() => {
            toggleTheme()
            play()
          }}
          variant='ghost'
          className=' hover:bg-transparent hover:scale-125 transform transition-transform duration-300'
        />
        <SocialIcon
          network='email'
          fgColor='#9ca3af'
          bgColor='transparent'
          className='cursor-pointer  hover:scale-125 transform transition-transform duration-300 normal-case'
          url='mailto:rushan52@gmail.com'
          onMouseEnter={() => play()}
        />
        <Link href='/#contact' onMouseEnter={() => play()} className=' hover:scale-125 transform transition-transform duration-300 mx-4'>
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
        </Link>
      </motion.div>
    </header>
  )
}

export default Header
