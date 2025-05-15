import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button, Card, CardBody, CardFooter, IconButton } from '@chakra-ui/react'
import projects from '../data/projects'
import { GitHub } from '@mui/icons-material'
import VanillaTilt from 'vanilla-tilt'

function Projects() {
  const techs = ['live', 'python', 'java', 'node', 'react', 'sql', 'react-native', 'next', 'docker', 'kubernetes', 'aws', 'golang', 'c#', 'mongo', 'rabbitmq', 'devops', 'blockchain']
  const [activeFilter, setActiveFilter] = useState('all')

  const handleClick = (item: string) => {
    if (activeFilter == item) setActiveFilter('all')
    else setActiveFilter(item)
  }

  useEffect(() => {
    const elements = document.querySelectorAll('.project-card') as any
    VanillaTilt.init(elements, {
      max: 10,
      speed: 200,
      glare: true,
      'glare-prerender': false,
      'max-glare': 0.5,
    })

    return () => {
      elements.forEach((element: any) => {
        if (element.vanillaTilt) {
          element.vanillaTilt.destroy()
        }
      })
    }
  }, [activeFilter])

  return (
    <motion.div className='h-screen pt-[15vh] flex flex-col overflow-hidden text-left max-w-full gap-6 mx-auto items-center'>
      <h3 className='uppercase tracking-[20px] text-gray-500 dark:text-gray-400 text-2xl'>Projects</h3>

      {/* filter buttons */}
      <div className='flex gap-2 max-h-[150px] max-w-[300px] sm:max-w-3xl xl:max-w-5xl mx-7 mt-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(20,83,45)]/70 pb-3'>
        {techs.map((item, idx) => {
          return (
            <Button
              key={idx}
              colorScheme='green'
              variant={activeFilter == item ? 'outline' : 'solid'}
              onClick={() => handleClick(item)}
              minWidth={'fit-content'}
              className='text-black dark:text-white'
            >
              {item}
            </Button>
          )
        })}
      </div>

      {/* projects cards */}
      <div className='flex py-2 gap-5 gap-x-8 flex-wrap justify-center w-5/6 h-[60vh] overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(20,83,45)]/80'>
        {projects
          .filter((project) => (activeFilter != 'all' ? project.tags.includes(activeFilter) : true))
          .map((project, idx) => {
            return (
              <Card
                key={idx}
                maxWidth='300px'
                maxHeight='340px'
                className='project-card bg-white/5 dark:bg-black/5 text-black dark:text-white xl:max-h-[600px] border-2 border-[rgb(20,83,45)]/30 hover:border-[rgb(20,83,45)] transition-all duration-300'
              >
                {/* card header with project name */}
                <p className='text-xl font-bold text-center pt-2 text-[rgb(20,83,45)]'>{project.name}</p>

                {/* card body with project description */}
                <CardBody className='overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(20,83,45)]/70'>
                  <p className='italic'>{project.description}</p>
                </CardBody>

                {/* card footer with links  */}
                <CardFooter gap='2' className='p-2' justify={'center'} borderTop={'1px solid rgb(20,83,45)/30'}>
                  <a target='_blank' href={project.git}>
                    <IconButton aria-label='git' icon={<GitHub />} variant='outline' />
                  </a>

                  {project.deployment && (
                    <a target='_blank' href={project.deployment}>
                      <button className='bg-[rgb(20,83,45)] hover:bg-[rgb(20,83,45)]/90 text-white font-bold py-2 px-4 rounded'>Live</button>
                    </a>
                  )}
                </CardFooter>
              </Card>
            )
          })}
      </div>
    </motion.div>
  )
}

export default Projects
