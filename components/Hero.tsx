import React, { useRef } from "react"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import Link from "next/link"
import Image from "next/image"
import linkedin from "../public/linkedin.jpg"
type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hey, Name's Saiyed", "Rushanshah Saiyed", "Welcome!"],
    loop: true,
    delaySpeed: 1000,
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src={linkedin} alt='profile picture' width={250} height={250} />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#008000' />
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
