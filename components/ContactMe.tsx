import React, { useState, useRef } from 'react'
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import emailjs from '@emailjs/browser'

type Props = {}

function ContactMe({}: Props) {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      await emailjs.send(
        'service_npbnp13', // Replace with your EmailJS service ID
        'template_cm9oyjw', // Replace with your EmailJS template ID
        {
          name: form.name,
          email: form.email,
          title: form.subject,
          message: form.message,
        },
        'nwh-NBR9iXCYookwW' // Replace with your EmailJS public key
      )
      setSuccess(true)
      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      setError('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-4 sm:px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-16 sm:top-24 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl'>Contact</h3>

      <div className='flex flex-col space-y-4 sm:space-y-5 mt-20 sm:mt-9 w-full max-w-2xl'>
        <h4 className='text-xl sm:text-2xl font-semibold text-center'>
          <span className='decoration-[#008000] underline'>Lets talk.</span>
        </h4>

        <div className='space-y-3 sm:space-y-5'>
          <div className='flex items-center space-x-3 sm:space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#008000] h-6 w-6 sm:h-7 sm:w-7 animate-pulse' />
            <p className='text-lg sm:text-2xl'> rushan52@gmail.com </p>
          </div>
          <div className='flex items-center space-x-3 sm:space-x-5 justify-center'>
            <MapPinIcon className='text-[#008000] h-6 w-6 sm:h-7 sm:w-7 animate-pulse' />
            <p className='text-lg sm:text-2xl'> Toronto, ON </p>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col space-y-3 sm:space-y-4 w-full sm:w-fit mx-auto px-4 sm:px-0'>
          <div className='flex flex-col sm:flex-row sm:space-x-2 w-full gap-3 sm:gap-2'>
            <input type='text' name='name' value={form.name} onChange={handleChange} className='contactInput w-full' placeholder='Name' required />
            <input type='email' name='email' value={form.email} onChange={handleChange} className='contactInput w-full' placeholder='Email' required />
          </div>
          <input type='text' name='subject' value={form.subject} onChange={handleChange} className='contactInput w-full' placeholder='Subject' required />
          <textarea name='message' value={form.message} onChange={handleChange} className='contactInput w-full min-h-[150px]' placeholder='Message' required />
          <button
            type='submit'
            disabled={loading}
            className='bg-[#008000] py-3 sm:py-5 px-8 sm:px-10 rounded-md text-black font-bold text-base sm:text-lg hover:bg-[#006400] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>

          {success && <p className='text-green-500 text-center'>Message sent successfully!</p>}
          {error && <p className='text-red-500 text-center'>{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default ContactMe
