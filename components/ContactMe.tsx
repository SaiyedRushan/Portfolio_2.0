import React, { useState, useRef } from 'react'
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import emailjs from '@emailjs/browser'
import SectionHeading from './SectionHeading'

type Props = {}

// EmailJS public identifiers — safe to expose client-side, but env-configurable so
// they can be rotated without a code change.
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'service_npbnp13'
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'template_cm9oyjw'
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? 'nwh-NBR9iXCYookwW'

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
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          title: form.subject,
          message: form.message,
          reply_to: form.email,
        },
        EMAILJS_PUBLIC_KEY
      )
      setSuccess(true)
      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      setError('Something went wrong sending that. Please email rushan52@gmail.com directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-28'>
      <SectionHeading eyebrow='Contact' title='Let’s talk' subtitle='Have a project in mind, or just want to say hello? Drop me a message.' />

      <div className='grid gap-10 md:grid-cols-5 md:gap-12'>
        <div className='space-y-4 md:col-span-2'>
          <a
            href='mailto:rushan52@gmail.com'
            className='flex items-center gap-4 rounded-lg border border-black/10 p-4 transition-colors hover:border-brand/40 dark:border-white/10'
          >
            <EnvelopeIcon className='h-6 w-6 shrink-0 text-brand dark:text-brand-light' />
            <div className='min-w-0'>
              <p className='text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400'>Email</p>
              <p className='truncate text-sm font-medium text-black dark:text-white'>rushan52@gmail.com</p>
            </div>
          </a>

          <div className='flex items-center gap-4 rounded-lg border border-black/10 p-4 dark:border-white/10'>
            <MapPinIcon className='h-6 w-6 shrink-0 text-brand dark:text-brand-light' />
            <div>
              <p className='text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400'>Location</p>
              <p className='text-sm font-medium text-black dark:text-white'>Toronto, ON</p>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className='space-y-4 md:col-span-3'>
          <div className='flex flex-col gap-4 sm:flex-row'>
            <input type='text' name='name' value={form.name} onChange={handleChange} className='contactInput' placeholder='Name' required />
            <input type='email' name='email' value={form.email} onChange={handleChange} className='contactInput' placeholder='Email' required />
          </div>
          <input type='text' name='subject' value={form.subject} onChange={handleChange} className='contactInput' placeholder='Subject' required />
          <textarea name='message' value={form.message} onChange={handleChange} className='contactInput min-h-[160px] resize-y' placeholder='Message' required />
          <button
            type='submit'
            disabled={loading}
            className='w-full rounded-md bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90 disabled:cursor-not-allowed disabled:opacity-50'
          >
            {loading ? 'Sending…' : 'Send message'}
          </button>

          {success && <p className='text-center text-sm text-brand dark:text-brand-light'>Message sent successfully.</p>}
          {error && <p className='text-center text-sm text-red-500'>{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default ContactMe
