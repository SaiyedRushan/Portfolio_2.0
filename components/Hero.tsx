import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import linkedin from '../public/linkedin.jpg'
import useSound from 'use-sound'

const RUSHDEVS_URL = 'https://rush-devs-eta.vercel.app'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function Hero() {
  const [play] = useSound('mouse-click.wav', { volume: 0.5, playbackRate: 2 })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden' id='home'>
      <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src={linkedin} alt='profile picture' width={250} height={250} />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 dark:text-gray-400 pb-2 tracking-[15px]'>Senior Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10 text-black dark:text-white'>Rushanshah Saiyed</h1>
        <p className='max-w-2xl mx-auto mt-6 px-6 text-base sm:text-lg text-gray-600 dark:text-gray-300'>
          I build websites, web apps, and mobile apps end-to-end — and the distributed systems behind them. Independent through{' '}
          <a
            href={RUSHDEVS_URL}
            target='_blank'
            rel='noopener noreferrer'
            onClick={() => play()}
            className='font-semibold text-[rgb(20,83,45)] dark:text-[rgb(120,180,140)] underline decoration-[rgb(20,83,45)]/40 underline-offset-4 hover:decoration-[rgb(20,83,45)]'
          >
            RushDevs
          </a>
          , after 4+ years shipping at enterprise scale.
        </p>
        <p className='mt-3 text-sm uppercase tracking-[3px] text-gray-500 dark:text-gray-400'>Afresh &middot; Speer &middot; Bell Canada</p>

        <div className='flex gap-3 justify-center items-center mt-9 mx-2'>
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => play()}>
              <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 hover:shadow-lg hover:opacity-60'>
                <span className='absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[rgb(20,83,45)] opacity-50' />
                <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-black dark:text-white backdrop-blur-3xl'>
                  {label}
                </span>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
