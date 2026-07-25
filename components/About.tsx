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
            words={`I run RushDevs, an independent software studio building websites, web apps, and mobile apps for startups and small teams — and I build my own products under the same roof, two of them live and paid. \n That follows 4+ years designing and shipping full-stack, distributed systems at Afresh, Speer, and Bell Canada, owning critical systems end-to-end from architecture through on-call operations. \n Specialized in TypeScript, React, Next.js, Node.js, GraphQL, and PostgreSQL, with deep experience in event-driven micro-services, cloud infrastructure (Azure, AWS, Terraform), and production observability. Also comfortable across Vue.js, React Native, Python, Java, Spring Boot, C# .NET, Golang, MongoDB, Redis, Kafka, RabbitMQ, Docker, Kubernetes, and CI/CD.`}
          />
        </div>

        <p className='text-xs sm:text-sm text-gray-500 dark:text-gray-400'>
          B.Eng. Spec. Hons. Computer Engineering, York University &mdash; GPA 3.8/4.0, First Class, Dean&apos;s Honour Roll
        </p>
      </div>
    </motion.div>
  )
}

export default About
