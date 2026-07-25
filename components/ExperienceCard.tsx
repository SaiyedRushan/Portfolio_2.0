import React, { useState } from 'react'

type Props = {
  description: string[]
  duration: string
  title: string
  companyName: string
  companyIcon: string
  tagline?: string
}

/** Bullets shown before the reader opts into the rest — keeps the section skimmable. */
const COLLAPSED_BULLETS = 3

function ExperienceCard({ description, duration, title, companyName, companyIcon, tagline }: Props) {
  const [expanded, setExpanded] = useState(false)
  const canCollapse = description.length > COLLAPSED_BULLETS
  const visible = expanded || !canCollapse ? description : description.slice(0, COLLAPSED_BULLETS)

  return (
    <article className='rounded-xl border border-black/10 bg-white p-6 transition-colors hover:border-brand/40 dark:border-white/10 dark:bg-[#131313] sm:p-8'>
      <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5'>
        {/* eslint-disable-next-line @next/next/no-img-element -- logos come from mixed local and remote sources */}
        <img
          className='h-14 w-14 shrink-0 rounded-full bg-white object-contain p-1 ring-1 ring-black/10 dark:ring-white/15'
          src={companyIcon}
          alt={`${companyName} logo`}
        />

        <div className='min-w-0 flex-1'>
          <div className='flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4'>
            <h3 className='text-lg font-bold text-black dark:text-white sm:text-xl'>{title}</h3>
            <p className='shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400'>{duration}</p>
          </div>

          <p className='mt-1 font-semibold text-brand dark:text-brand-light'>{companyName}</p>
          {tagline && <p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>{tagline}</p>}
        </div>
      </div>

      <ul className='mt-5 space-y-3 sm:pl-[4.75rem]'>
        {visible.map((desc) => (
          <li key={desc} className='relative pl-5 text-sm leading-relaxed text-gray-700 dark:text-gray-300'>
            <span className='absolute left-0 top-[0.55rem] h-1.5 w-1.5 rounded-full bg-brand/60 dark:bg-brand-light/60' />
            {desc}
          </li>
        ))}
      </ul>

      {canCollapse && (
        <button
          type='button'
          onClick={() => setExpanded((prev) => !prev)}
          className='mt-4 text-sm font-semibold text-brand transition-opacity hover:opacity-70 dark:text-brand-light sm:ml-[4.75rem]'
        >
          {expanded ? 'Show less' : `Show ${description.length - COLLAPSED_BULLETS} more`}
        </button>
      )}
    </article>
  )
}

export default ExperienceCard
