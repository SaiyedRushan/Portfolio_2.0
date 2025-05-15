import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Link from 'next/link'
import Image from 'next/image'
import linkedin from '../public/linkedin.jpg'
import useSound from 'use-sound'

function Hero() {
  const [play] = useSound('mouse-click.wav', { volume: 0.1, playbackRate: 2 })
  const [text, count] = useTypewriter({
    words: ["Hey, Name's Saiyed", 'Rushanshah Saiyed', 'Welcome!'],
    loop: true,
    delaySpeed: 1000,
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden' id='home'>
      <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src={linkedin} alt='profile picture' width={250} height={250} />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 dark:text-gray-400 pb-2 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10 text-black dark:text-white'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='rgb(20,83,45)' />
        </h1>
        <div className='flex gap-3 justify-center items-center mt-9 mx-2'>
          <Link href='#about' onMouseEnter={() => play()}>
            <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 hover:shadow-lg hover:opacity-60'>
              <span className='absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[rgb(20,83,45)] opacity-50' />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-black dark:text-white backdrop-blur-3xl'>
                About
              </span>
            </button>
          </Link>
          <Link href='#experience' onMouseEnter={() => play()}>
            <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 hover:shadow-lg hover:opacity-60'>
              <span className='absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[rgb(20,83,45)] opacity-50' />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-black dark:text-white backdrop-blur-3xl'>
                Experience
              </span>
            </button>
          </Link>
          <Link href='#skills' onMouseEnter={() => play()}>
            <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 hover:shadow-lg hover:opacity-60'>
              <span className='absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[rgb(20,83,45)] opacity-50' />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-black dark:text-white backdrop-blur-3xl'>
                Skills
              </span>
            </button>
          </Link>
          <Link href='#projects' onMouseEnter={() => play()}>
            <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 hover:shadow-lg hover:opacity-60'>
              <span className='absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[rgb(20,83,45)] opacity-50' />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-black dark:text-white backdrop-blur-3xl'>
                Projects
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
