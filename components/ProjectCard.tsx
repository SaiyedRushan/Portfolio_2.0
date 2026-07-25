import React from 'react'
import Image from 'next/image'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

/** Inline mark rather than @mui/icons-material, which drags the emotion runtime in for one icon. */
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' fill='currentColor' className={className}>
      <path d='M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.24-.02-2.25-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z' />
    </svg>
  )
}

type Props = {
  name: string
  role?: string
  description: string
  tech: string[]
  status?: 'live' | 'in-development'
  image?: string
  git?: string
  deployment?: string
}

function StatusBadge({ status }: { status: Props['status'] }) {
  if (status === 'live') {
    return (
      <span className='inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white'>
        <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300' />
        Live
      </span>
    )
  }
  if (status === 'in-development') {
    return (
      <span className='shrink-0 rounded-full border border-gray-400 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-600 dark:border-gray-500 dark:text-gray-300'>
        In development
      </span>
    )
  }
  return null
}

function ProjectCard({ name, role, description, tech, status, image, git, deployment }: Props) {
  return (
    <article className='group flex h-full flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg dark:border-white/10 dark:bg-[#161616]'>
      {/* preview */}
      <div className='relative aspect-[16/10] w-full overflow-hidden border-b border-black/5 bg-gray-100 dark:border-white/5 dark:bg-[#0d0d0d]'>
        {image ? (
          <Image
            src={image}
            alt={`${name} screenshot`}
            fill
            sizes='(min-width: 640px) 50vw, 100vw'
            className='object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]'
          />
        ) : (
          <div className='flex h-full w-full items-center justify-center bg-gradient-to-br from-brand/15 to-brand/5'>
            <span className='text-5xl font-bold text-brand/40 dark:text-brand-light/40'>{name.charAt(0)}</span>
          </div>
        )}
        {role && (
          <span className='absolute left-3 top-3 rounded-full bg-black/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm'>
            {role}
          </span>
        )}
      </div>

      {/* body */}
      <div className='flex flex-1 flex-col p-5'>
        <div className='flex items-center justify-between gap-2'>
          <h3 className='text-lg font-bold text-black dark:text-white'>{name}</h3>
          <StatusBadge status={status} />
        </div>

        <p className='mt-2 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300'>{description}</p>

        <div className='mt-4 flex flex-wrap gap-1.5'>
          {tech.map((item) => (
            <span key={item} className='rounded bg-black/5 px-2 py-0.5 text-[10px] font-medium text-gray-600 dark:bg-white/10 dark:text-gray-300'>
              {item}
            </span>
          ))}
        </div>

        {(git || deployment) && (
          <div className='mt-5 flex items-center gap-2 border-t border-black/5 pt-4 dark:border-white/10'>
            {deployment && (
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={deployment}
                className='inline-flex items-center gap-1.5 rounded-md bg-brand px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand/90'
              >
                Visit site
                <ArrowTopRightOnSquareIcon className='h-3.5 w-3.5' />
              </a>
            )}
            {git && (
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={git}
                aria-label={`${name} source on GitHub`}
                className='inline-flex items-center gap-1.5 rounded-md border border-black/15 px-3 py-1.5 text-xs font-semibold text-gray-700 transition-colors hover:border-brand hover:text-brand dark:border-white/20 dark:text-gray-200 dark:hover:border-brand-light dark:hover:text-brand-light'
              >
                <GitHubIcon className='h-3.5 w-3.5' />
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
