import React from "react"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Link from "next/link"
import { Home } from "@mui/icons-material"

function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center bg-[rgb(36,36,36)]'>
      <motion.div initial={{ x: -500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='flex flex-row items-center gap-3'>
        <Link href='/' className='hover:shadow-lg hover:scale-125 transform transition-transform duration-300'>
          <Home className='text-gray-400'></Home>
        </Link>
        <SocialIcon url='https://www.linkedin.com/in/rushanshahsaiyed/' fgColor='gray' target='_blank' bgColor='transparent' className='hover:shadow-lg hover:scale-125 transform transition-transform duration-300'></SocialIcon>
        <SocialIcon url='https://github.com/SaiyedRushan' target='_blank' fgColor='gray' bgColor='transparent' className='hover:shadow-lg hover:scale-125 transform transition-transform duration-300'></SocialIcon>
        <Link href='/blogs' className='hover:shadow-lg hover:scale-125 transform transition-transform duration-300'>
          <p className='uppercase text-sm text-gray-400 p-3'>Blog</p>
        </Link>
      </motion.div>

      <motion.div initial={{ x: 500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon network='email' fgColor='gray' bgColor='transparent' className='cursor-pointer hover:shadow-lg hover:scale-125 transform transition-transform duration-300' url='mailto:rushan52@gmail.com' />
        <Link href='/#contact' className='hover:shadow-lg hover:scale-125 transform transition-transform duration-300 mx-4'>
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
        </Link>
      </motion.div>
    </header>
  )
}

export default Header
