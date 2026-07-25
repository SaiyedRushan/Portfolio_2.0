import React from 'react'
import SectionHeading from './SectionHeading'

const SKILLS = [
  {
    heading: 'Core stack',
    items: ['TypeScript', 'React', 'Next.js', 'Node.js', 'GraphQL', 'PostgreSQL'],
  },
  {
    heading: 'Systems & infrastructure',
    items: ['Event-driven micro-services', 'Azure', 'AWS', 'Terraform', 'Docker', 'Kubernetes', 'Kafka', 'RabbitMQ', 'Redis', 'Observability'],
  },
  {
    heading: 'Also comfortable with',
    items: ['Vue.js', 'React Native', 'Python', 'Java', 'Spring Boot', 'C# .NET', 'Golang', 'MongoDB', 'CI/CD'],
  },
]

const PARAGRAPHS = [
  'I run RushDevs, an independent software studio building websites, web apps, and mobile apps for startups and small teams — and I build my own products under the same roof, two of them live and paid.',
  'That follows 4+ years designing and shipping full-stack, distributed systems at Afresh, Speer, and Bell Canada, owning critical systems end-to-end from architecture through on-call operations.',
]

function About() {
  return (
    <div className='mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28'>
      <SectionHeading eyebrow='About' title='A little background' />

      <div className='grid gap-12 lg:grid-cols-5 lg:gap-16'>
        <div className='space-y-5 lg:col-span-3'>
          {PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className='text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg'>
              {paragraph}
            </p>
          ))}

          <div className='rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-[#131313]'>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-brand dark:text-brand-light'>Education</p>
            <p className='mt-2 font-semibold text-black dark:text-white'>B.Eng. Spec. Hons. Computer Engineering</p>
            <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>York University &mdash; GPA 3.8/4.0, First Class, Dean&apos;s Honour Roll</p>
          </div>
        </div>

        <div className='space-y-6 lg:col-span-2'>
          {SKILLS.map(({ heading, items }) => (
            <div key={heading}>
              <h3 className='text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400'>{heading}</h3>
              <div className='mt-3 flex flex-wrap gap-2'>
                {items.map((item) => (
                  <span
                    key={item}
                    className='rounded-md border border-black/10 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-[#161616] dark:text-gray-300'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
