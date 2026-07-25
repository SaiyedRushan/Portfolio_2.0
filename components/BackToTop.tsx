import React, { useEffect, useState } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/solid'
import { cn } from '../lib/utils'

/** Only appears once the reader is past the hero, so it never covers content unprompted. */
function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type='button'
      aria-label='Back to top'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-all duration-300 hover:bg-brand/90',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      )}
    >
      <ArrowUpIcon className='h-5 w-5' />
    </button>
  )
}

export default BackToTop
