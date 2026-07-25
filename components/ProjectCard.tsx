import React from 'react'
import Image from 'next/image'
import { GitHub, ArrowOutward } from '@mui/icons-material'

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
      <span className='inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-full bg-[rgb(20,83,45)] text-white'>
        <span className='h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse' />
        Live
      </span>
    )
  }
  if (status === 'in-development') {
    return (
      <span className='text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-full border border-gray-400 text-gray-600 dark:border-gray-500 dark:text-gray-300'>
        In development
      </span>
    )
  }
  return null
}

function ProjectCard({ name, role, description, tech, status, image, git, deployment }: Props) {
  return (
    <article className='project-card group flex w-[340px] flex-col overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#161616] shadow-sm hover:shadow-xl hover:border-[rgb(20,83,45)]/50 transition-all duration-300'>
      {/* preview */}
      <div className='relative h-[190px] w-full overflow-hidden bg-gray-100 dark:bg-[#0d0d0d] border-b border-black/5 dark:border-white/5'>
        {image ? (
          <Image
            src={image}
            alt={`${name} screenshot`}
            fill
            sizes='340px'
            className='object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]'
          />
        ) : (
          <div className='flex h-full w-full items-center justify-center bg-gradient-to-br from-[rgb(20,83,45)]/15 to-[rgb(20,83,45)]/5'>
            <span className='text-5xl font-bold text-[rgb(20,83,45)]/40 dark:text-[rgb(120,180,140)]/40'>{name.charAt(0)}</span>
          </div>
        )}
        {role && (
          <span className='absolute left-3 top-3 rounded-full bg-black/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm'>
            {role}
          </span>
        )}
      </div>

      {/* body */}
      <div className='flex flex-1 flex-col p-4'>
        <div className='flex items-center justify-between gap-2'>
          <h4 className='text-lg font-bold text-black dark:text-white'>{name}</h4>
          <StatusBadge status={status} />
        </div>

        <p className='mt-2 flex-1 overflow-y-auto text-[13px] leading-relaxed text-gray-600 dark:text-gray-300 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[rgb(20,83,45)]/40'>
          {description}
        </p>

        <div className='mt-3 flex flex-wrap gap-1.5'>
          {tech.map((item) => (
            <span key={item} className='rounded bg-black/5 dark:bg-white/10 px-2 py-0.5 text-[10px] font-medium text-gray-600 dark:text-gray-300'>
              {item}
            </span>
          ))}
        </div>

        {(git || deployment) && (
          <div className='mt-4 flex items-center gap-2 border-t border-black/5 dark:border-white/10 pt-3'>
            {deployment && (
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={deployment}
                className='inline-flex items-center gap-1.5 rounded-md bg-[rgb(20,83,45)] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[rgb(20,83,45)]/90'
              >
                Visit site
                <ArrowOutward sx={{ fontSize: 14 }} />
              </a>
            )}
            {git && (
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={git}
                aria-label={`${name} source on GitHub`}
                className='inline-flex items-center gap-1.5 rounded-md border border-black/15 dark:border-white/20 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-200 transition-colors hover:border-[rgb(20,83,45)] hover:text-[rgb(20,83,45)] dark:hover:text-[rgb(120,180,140)]'
              >
                <GitHub sx={{ fontSize: 14 }} />
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
