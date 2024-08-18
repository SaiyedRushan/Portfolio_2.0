import React from "react"
import { motion } from "framer-motion"
type Props = {
  description: string[]
  duration: string
  title: string
  companyName: string
  companyIcon: string
}

function ExperienceCard({ description, duration, title, companyName, companyIcon }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] sm:w-[500px] xl:w-[800px] h-[75vh] snap-center bg-[#292929] p-5 hover:opacity-100 sm:opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.2 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='w-24 rounded-full obejct-center object-cover' src={companyIcon} />

      <div className='px-0 md:px-10 overflow-y-auto w-full text-center scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#008000]/80'>
        <h4 className='text-4-xl font-light'>{title}</h4>
        <p className='font-bold text-2xl mt-1'>{companyName}</p>
        <p className='uppercase pb-4 text-gray-300'>{duration}</p>
        <ul className='list-disc space-y-4 ml-5 text-sm'>
          {description.map((desc, i) => {
            return <li key={i}>{desc}</li>
          })}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
