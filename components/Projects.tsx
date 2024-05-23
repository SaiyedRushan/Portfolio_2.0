"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { Button, ButtonGroup, Card, CardBody, CardFooter, IconButton } from "@chakra-ui/react"
import projects from "../data/projects"
import { GitHub } from "@mui/icons-material"

function Projects() {
  const techs = ["python", "java", "express", "react", "react-native", "next.js", "docker", "kubernetes", "aws", "golang", "c#"]
  const [activeFilter, setActiveFilter] = useState("all")

  const handleClick = (item: string) => {
    if (activeFilter == item) setActiveFilter("all")
    else setActiveFilter(item)
  }

  return (
    <motion.div className='h-screen mt-96 flex flex-col overflow-hidden text-left max-w-full justify-evenly mx-auto items-center '>
      <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='flex gap-3 flex-wrap mx-10'>
        {techs.map((item, idx) => {
          return (
            <Button key={idx} colorScheme='green' variant={activeFilter == item ? "outline" : "solid"} onClick={() => handleClick(item)}>
              {item}
            </Button>
          )
        })}
      </div>

      <div className='flex gap-3 flex-wrap justify-center w-full h-[400px] overflow-y-scroll'>
        {projects
          .filter((project) => (activeFilter != "all" ? project.tags.includes(activeFilter) : true))
          .map((project, idx) => {
            return (
              <Card key={idx} maxWidth='300px' maxHeight='400px' className='overflow-y-auto card-gradient'>
                <CardBody>
                  <p className='text-xl font-bold'>{project.name}</p>
                  <p>{project.description}</p>
                </CardBody>
                <CardFooter gap='2' className='pt-0'>
                  <a target='_blank' href={project.git}>
                    <IconButton aria-label='git' icon={<GitHub />} />
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
