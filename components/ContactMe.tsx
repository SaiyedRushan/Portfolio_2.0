import React from "react"
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"

type Props = {}

function ContactMe({}: Props) {
  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

      <div className='flex flex-col space-y-5 mt-9'>
        <h4 className='text-2xl font-semibold text-center'>
          <span className='decoration-[#008000]/10 underline'>Lets talk.</span>
        </h4>

        <div className='space-y-5'>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#008000] h-7 w-7 animate-pulse' />
            <p className='text-2xl'> rushan52@gmail.com </p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#008000] h-7 w-7 animate-pulse' />
            <p className='text-2xl'> Toronto, ON </p>
          </div>
        </div>

        <form className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input type='text' className='contactInput' placeholder='Name' />
            <input type='email' className='contactInput' placeholder='Email' />
          </div>

          <input type='text' className='contactInput' placeholder='Subject' />

          <textarea className='contactInput' placeholder='Message' />

          <button type='submit' className='bg-[#008000] py-5 px-10 rounded-md text-black font-bold text-lg'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
