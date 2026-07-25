import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'
import VanillaTilt from 'vanilla-tilt'

function Projects() {
  useEffect(() => {
    const elements = document.querySelectorAll('.project-card') as any
    // Dialled well back from the old settings — with screenshots in the cards a
    // strong tilt and glare reads as novelty rather than polish.
    VanillaTilt.init(elements, {
      max: 4,
      speed: 400,
      glare: true,
      'glare-prerender': false,
      'max-glare': 0.12,
    })

    return () => {
      elements.forEach((element: any) => {
        if (element.vanillaTilt) {
          element.vanillaTilt.destroy()
        }
      })
    }
  }, [])

  return (
    <motion.div className='h-screen pt-[13vh] flex flex-col overflow-hidden text-left max-w-full gap-5 mx-auto items-center'>
      <div className='text-center'>
        <h3 className='uppercase tracking-[20px] text-gray-500 dark:text-gray-400 text-2xl'>Projects</h3>
        <p className='mt-3 text-sm text-gray-500 dark:text-gray-400'>Products I&apos;ve built and run.</p>
      </div>

      {/* max-w keeps four cards as a balanced 2x2 rather than a row of three plus an orphan */}
      <div className='flex flex-wrap justify-center gap-6 w-full max-w-3xl px-6 py-2 h-[68vh] overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(20,83,45)]/80'>
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
