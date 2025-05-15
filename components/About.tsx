import React from 'react'
import { motion } from 'framer-motion'
import { TextGenerateEffect } from './ui/text-generate'

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-4 sm:px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-16 sm:top-24 uppercase tracking-[15px] text-gray-500 dark:text-gray-400 text-xl sm:text-2xl'>About</h3>

      <div className='space-y-6 sm:space-y-10 px-0 mt-16 sm:mt-10 md:px-10 max-w-3xl'>
        <h4 className='text-2xl sm:text-4xl font-semibold text-black dark:text-white'>
          Here is a <span className='underline decoration-[rgb(20,83,45)]/50 text-[20px] sm:text-[25px]'>little</span> background
        </h4>

        <div className='text-sm sm:text-base'>
          <TextGenerateEffect
            className='font-semibold'
            words={`Experienced challenge hungry senior full stack software engineer adept in end-to-end development and project delivery from initial concept to final deployment, complemented by a strong ability to lead teams and projects and deliver high-quality user-centric solutions. \n Expertise in JavaScript, TypeScript, Vue.js, Vite, React.js, React Native, Python, Django, Flask, Spring Boot, Java, Golang, Next.js, Node.js, Express, Openshift, SQL Server, MongoDB, GraphQL, Jest, Docker, Kubernetes, RabbitMQ, Git. \n Familiar with microservices architecture. Additional expertise in backend development, DevOps practices, and cloud deployment and migration, including AWS, GCP, Terraform, and Linux`}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default About
