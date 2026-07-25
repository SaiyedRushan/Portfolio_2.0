import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import linkedin from '../public/linkedin.jpg'
import useSound from 'use-sound'

const RUSHDEVS_URL = 'https://rush-devs-eta.vercel.app'

function Hero() {
  const [play] = useSound('mouse-click.wav', { volume: 0.5, playbackRate: 2 })

  return (
    <div id='home' className='mx-auto flex min-h-[calc(100vh-3.75rem)] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center sm:px-10'>
      <Image
        className='h-28 w-28 rounded-full object-cover ring-1 ring-black/10 dark:ring-white/15 sm:h-32 sm:w-32'
        src={linkedin}
        alt='Rushanshah Saiyed'
        width={250}
        height={250}
        priority
      />

      <p className='mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-brand dark:text-brand-light'>Senior Software Engineer</p>

      <h1 className='mt-4 text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl lg:text-6xl'>Rushanshah Saiyed</h1>

      <p className='mt-6 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg'>
        I build websites, web apps, and mobile apps end-to-end — and the distributed systems behind them. Independent through{' '}
        <a
          href={RUSHDEVS_URL}
          target='_blank'
          rel='noopener noreferrer'
          onClick={() => play()}
          className='font-semibold text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-brand dark:text-brand-light dark:decoration-brand-light/40 dark:hover:decoration-brand-light'
        >
          RushDevs
        </a>
        , after 4+ years shipping at enterprise scale.
      </p>

      <div className='mt-10 flex flex-col gap-3 sm:flex-row'>
        <Link
          href='#projects'
          onClick={() => play()}
          className='rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90'
        >
          View my work
        </Link>
        <Link
          href='#contact'
          onClick={() => play()}
          className='rounded-md border border-black/15 px-6 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-brand hover:text-brand dark:border-white/20 dark:text-gray-200 dark:hover:border-brand-light dark:hover:text-brand-light'
        >
          Get in touch
        </Link>
      </div>

      <div className='mt-14 flex flex-col items-center gap-3'>
        <p className='text-[11px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500'>Previously</p>
        <div className='flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-gray-500 dark:text-gray-400'>
          <span>Afresh</span>
          <span className='h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-700' />
          <span>Speer</span>
          <span className='h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-700' />
          <span>Bell Canada</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
