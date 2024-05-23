"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { Button, ButtonGroup, Card, CardBody, CardFooter, IconButton } from "@chakra-ui/react"
import projects from "../data/projects"
import { GitHub } from "@mui/icons-material"

function Projects() {
  const techs = ["python", "java", "node", "react", "sql", "react-native", "next", "docker", "kubernetes", "aws", "golang", "c#", "mongo", "rabbitmq", "devops", "blockchain"]
  const [activeFilter, setActiveFilter] = useState("all")

  const handleClick = (item: string) => {
    if (activeFilter == item) setActiveFilter("all")
    else setActiveFilter(item)
  }

  return (
    <motion.div className='h-screen pt-10 flex flex-col overflow-hidden text-left max-w-full justify-evenly mx-auto items-center'>
      <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='flex gap-3 flex-wrap mx-10 max-h-[150px] overflow-auto mt-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#008000]/80'>
        {techs.map((item, idx) => {
          return (
            <Button key={idx} colorScheme='green' variant={activeFilter == item ? "outline" : "solid"} onClick={() => handleClick(item)}>
              {item}
            </Button>
          )
        })}
      </div>

      <div className='flex gap-3 flex-wrap justify-center w-5/6 h-[400px] overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#008000]/80'>
        {projects
          .filter((project) => (activeFilter != "all" ? project.tags.includes(activeFilter) : true))
          .map((project, idx) => {
            return (
              <Card key={idx} maxWidth='300px' maxHeight='400px' className='overflow-y-auto card-gradient scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#008000]/80'>
                <CardBody>
                  <p className='text-xl font-bold'>{project.name}</p>
                  <p className='italic'>{project.description}</p>
                </CardBody>

                <CardFooter gap='2' className='pt-0'>
                  <a target='_blank' href={project.git}>
                    <IconButton aria-label='git' icon={<GitHub />} variant='outline' />
                  </a>

                  {project.deployment && (
                    <a target='_blank' href={project.deployment}>
                      <Button variant='outline' colorScheme='white'>
                        Live
                      </Button>
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
