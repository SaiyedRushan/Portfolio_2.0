import React from "react"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import Link from "next/link"
import Image from "next/image"
import linkedin from "../public/linkedin.jpg"

function Hero() {
  const [text, count] = useTypewriter({
    words: ["Hey, Name's Saiyed", "Rushanshah Saiyed", "Welcome!"],
    loop: true,
    delaySpeed: 1000,
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src={linkedin} alt='profile picture' width={250} height={250} />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#008000' />
        </h1>
        <div className='flex gap-3 justify-center items-center mt-9 mx-2'>
          <Link href='#about'>
            <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 hover:ring-slate-400 hover:ring-offset-2 hover:ring-offset-slate-50 '>
              <span className='absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-50' />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>About</span>
            </button>
          </Link>
          <Link href='#experience'>
            <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 hover:ring-slate-400 hover:ring-offset-2 hover:ring-offset-slate-50 '>
              <span className='absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-50' />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>Experience</span>
            </button>
          </Link>
          <Link href='#skills'>
            <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 hover:ring-slate-400 hover:ring-offset-2 hover:ring-offset-slate-50 '>
              <span className='absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-50' />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>Skills</span>
            </button>
          </Link>
          <Link href='#projects'>
            <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 hover:ring-slate-400 hover:ring-offset-2 hover:ring-offset-slate-50 '>
              <span className='absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-50' />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>Projects</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
