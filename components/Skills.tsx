import React from "react"
import { motion } from "framer-motion"
import Skill from "./Skill"

function Skills() {
  return (
    <motion.div className='flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>Skills</h3>

      <div className='grid grid-cols-4 gap-5 top-44'>
        <Skill link='https://img.icons8.com/color/512/java-coffee-cup-logo.png' />
        <Skill link='https://img.icons8.com/color/512/vue-js.png' />
        <Skill link='https://img.icons8.com/3d-fluency/512/python.png' />
        <Skill link='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-sql-mobile-app-development-flaticons-lineal-color-flat-icons.png' />
        <Skill link='https://img.icons8.com/plasticine/512/react.png' />
        <Skill link='https://img.icons8.com/ios/512/express-js.png' />
        <Skill directionLeft={true} link='https://img.icons8.com/color/512/javascript.png' />
        <Skill directionLeft={true} link='https://img.icons8.com/windows/512/vuetify.png' />
        <Skill directionLeft={true} link='https://img.icons8.com/color/512/nodejs.png' />
        <Skill directionLeft={true} link='https://img.icons8.com/ios-filled/512/console.png' />
        <Skill directionLeft={true} link='https://img.icons8.com/color/512/git.png' />
        <Skill directionLeft={true} link='https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/512/external-problem-solving-due-diligence-icongeek26-linear-colour-icongeek26.png' alt='Problem Solving' />
      </div>
    </motion.div>
  )
}

export default Skills
