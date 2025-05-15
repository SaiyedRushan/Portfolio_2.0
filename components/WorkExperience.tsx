import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import workExperience from '../data/workExperience'

function WorkExperience() {
  const scrollToCard = (companyName: string) => {
    const element = document.getElementById(companyName)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'center' })
    }
  }

  return (
    <motion.div
      className='flex flex-col relative h-screen text-center max-w-7xl px-10 justify-center mx-auto items-center overflow-hidden'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className='uppercase tracking-[20px] text-gray-500 dark:text-gray-400 text-2xl'>Experience</h3>

      <div className='w-full h-[80vh] flex space-x-5 overflow-x-auto px-10 py-5 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(20,83,45)]/80'>
        {workExperience.map((experience) => (
          <div key={experience.id} id={experience.id} onClick={() => scrollToCard(experience.id!)}>
            <ExperienceCard {...experience} />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default WorkExperience
