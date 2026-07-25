import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import useSound from 'use-sound'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { useTheme } from '../context/ThemeContext'
import { cn } from '../lib/utils'
import { RUSHDEVS_URL } from '../lib/site'

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

/** Highlights whichever section is crossing the middle of the viewport. */
function useActiveSection() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return active
}

function Header() {
  const [play] = useSound('mouse-click.wav', { volume: 0.5, playbackRate: 2.0 })
  const { isDarkMode, toggleTheme } = useTheme()
  const active = useActiveSection()

  // The server can't know the stored theme, so the icon only renders after mount —
  // otherwise the first client render disagrees with the server HTML.
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <header className='sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/80'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8'>
        <div className='flex items-center gap-6'>
          <Link href='/#hero' onClick={() => play()} className='shrink-0 text-sm font-bold tracking-tight text-black dark:text-white'>
            Rushanshah Saiyed
          </Link>

          <nav className='hidden items-center gap-1 md:flex'>
            {NAV_LINKS.map(({ id, label }) => (
              <Link
                key={id}
                href={`#${id}`}
                onClick={() => play()}
                className={cn(
                  'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                  active === id
                    ? 'text-brand dark:text-brand-light'
                    : 'text-gray-600 hover:text-brand dark:text-gray-400 dark:hover:text-brand-light'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className='flex items-center gap-1'>
          <a
            href={RUSHDEVS_URL}
            target='_blank'
            rel='noopener noreferrer'
            onClick={() => play()}
            className='hidden px-2 text-sm font-medium text-gray-600 transition-colors hover:text-brand dark:text-gray-400 dark:hover:text-brand-light sm:inline'
          >
            RushDevs
          </a>

          <SocialIcon
            url='https://www.linkedin.com/in/rushanshahsaiyed/'
            fgColor='currentColor'
            target='_blank'
            bgColor='transparent'
            style={{ height: 34, width: 34 }}
            className='text-gray-500 transition-colors hover:text-brand dark:hover:text-brand-light'
            onClick={() => play()}
          />
          <SocialIcon
            url='https://github.com/SaiyedRushan'
            target='_blank'
            fgColor='currentColor'
            bgColor='transparent'
            style={{ height: 34, width: 34 }}
            className='text-gray-500 transition-colors hover:text-brand dark:hover:text-brand-light'
            onClick={() => play()}
          />

          <button
            type='button'
            aria-label='Toggle colour theme'
            onClick={() => {
              toggleTheme()
              play()
            }}
            className='ml-1 flex h-9 w-9 items-center justify-center rounded-md text-gray-500 transition-colors hover:bg-black/5 hover:text-brand dark:hover:bg-white/10 dark:hover:text-brand-light'
          >
            {mounted ? isDarkMode ? <SunIcon className='h-5 w-5' /> : <MoonIcon className='h-5 w-5' /> : <span className='h-5 w-5' />}
          </button>

          <Link
            href='#contact'
            onClick={() => play()}
            className='ml-1 hidden rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand/90 sm:inline-block'
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
