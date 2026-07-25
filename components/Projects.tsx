import React from 'react'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

function Projects() {
  return (
    <div className='mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28'>
      <SectionHeading eyebrow='Projects' title='Products I’ve built and run' subtitle='Shipped end-to-end — design, build, billing, and the infrastructure underneath.' />

      <div className='grid gap-6 sm:grid-cols-2'>
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
