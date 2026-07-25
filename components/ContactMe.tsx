import React, { useState } from 'react'
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import SectionHeading from './SectionHeading'

// FormSubmit alias for rushan52@gmail.com. The address is shown on this page anyway, so the
// alias is not hiding it — it just avoids handing scrapers a mailto-shaped endpoint. Aliases are
// activated per-origin, so this only delivers from saiyedrushan.vercel.app.
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/67473f6fa20791f1c89c9310cb52920b'

const emptyForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
  // Honeypot: hidden from users, so anything in it means a bot. FormSubmit ignores _honey on the
  // AJAX endpoint (verified), so handleSubmit drops these itself rather than relying on the server.
  _honey: '',
}

function ContactMe() {
  const [form, setForm] = useState(emptyForm)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Bots fill every input they find. Fake a success so they can't tell they were caught.
    if (form._honey) {
      setSuccess(true)
      setForm(emptyForm)
      return
    }

    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          _subject: `Portfolio contact: ${form.subject.trim()}`,
          _replyto: form.email.trim(),
          _template: 'table',
        }),
      })

      // FormSubmit answers 200 with {"success":"false"} for an unactivated or misconfigured
      // form, so the body decides the outcome rather than the status code.
      const result = await response.json()
      if (!response.ok || String(result.success) !== 'true') {
        throw new Error(result.message || `FormSubmit responded with ${response.status}`)
      }

      setSuccess(true)
      setForm(emptyForm)
    } catch (err) {
      console.error('Contact form submission failed:', err)
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

        <form onSubmit={handleSubmit} className='space-y-4 md:col-span-3'>
          <input type='text' name='_honey' value={form._honey} onChange={handleChange} className='hidden' tabIndex={-1} autoComplete='off' aria-hidden='true' />

          <div className='flex flex-col gap-4 sm:flex-row'>
            <input type='text' name='name' value={form.name} onChange={handleChange} className='contactInput' placeholder='Name' maxLength={100} required />
            <input type='email' name='email' value={form.email} onChange={handleChange} className='contactInput' placeholder='Email' maxLength={254} required />
          </div>
          <input type='text' name='subject' value={form.subject} onChange={handleChange} className='contactInput' placeholder='Subject' maxLength={150} required />
          <textarea
            name='message'
            value={form.message}
            onChange={handleChange}
            className='contactInput min-h-[160px] resize-y'
            placeholder='Message'
            maxLength={5000}
            required
          />
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
