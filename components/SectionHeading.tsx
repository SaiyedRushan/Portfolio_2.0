import React from 'react'

type Props = {
  eyebrow: string
  title: string
  subtitle?: string
}

/** Shared section header so every section reads as part of one system. */
function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <div className='mb-12 text-center sm:mb-16'>
      <p className='text-xs font-semibold uppercase tracking-[0.3em] text-brand dark:text-brand-light'>{eyebrow}</p>
      <h2 className='mt-4 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl'>{title}</h2>
      {subtitle && <p className='mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-400'>{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
