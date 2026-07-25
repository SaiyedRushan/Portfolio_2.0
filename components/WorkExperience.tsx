import React from 'react'
import ExperienceCard from './ExperienceCard'
import SectionHeading from './SectionHeading'
import workExperience from '../data/workExperience'

function WorkExperience() {
  return (
    <div className='mx-auto max-w-4xl px-6 py-20 sm:px-10 sm:py-28'>
      <SectionHeading eyebrow='Experience' title='Where I’ve worked' subtitle='Four years of shipping production systems, now independent.' />

      <div className='space-y-6'>
        {workExperience.map((experience) => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
      </div>
    </div>
  )
}

export default WorkExperience
