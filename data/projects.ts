type Project = {
  name: string
  /** Shown as a badge when this is more than a side project — e.g. a product being run as a business. */
  role?: string
  description: string
  tech: string[]
  status?: 'live' | 'in-development'
  /** Screenshot in public/projects. Cards without one fall back to a monogram tile. */
  image?: string
  git?: string
  deployment?: string
}

const projects: Project[] = [
  {
    name: 'MugUp',
    role: 'Founder',
    description:
      'AI-powered study tool that turns any topic into quizzes, flashcards, and matching games in seconds — active recall without the busywork. I run it as a product: content generation, subscriptions, billing, and infrastructure are all mine. Self-hosted rather than serverless to keep unit costs flat as usage grows.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Gemini AI', 'Hetzner'],
    status: 'live',
    image: '/projects/mugup.png',
    deployment: 'https://beta.mugup.app',
  },
  {
    name: 'EasyReports',
    role: 'Co-Founder',
    description:
      'AI report card generator for Ontario elementary teachers, with output aligned to Ministry of Education templates. Built and sold as a paid product — auth, billing, bulk field updates, colleague sharing, and a generation pipeline tuned to keep each teacher’s voice intact.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Clerk', 'OpenAI', 'Stripe', 'AWS'],
    status: 'live',
    image: '/projects/easyreports.png',
    deployment: 'https://easyreports.ca',
  },
  {
    name: 'Learn Quran',
    description:
      'Section-by-section memorization guides covering Juz 29 and Juz 30 — verified Arabic and translation, thematic breakdowns, key vocabulary, and five practice modes per surah. Statically exported with no backend or login; progress lives in the browser. Companion iOS and Android apps in progress.',
    tech: ['Next.js 15', 'App Router', 'TypeScript', 'Static Export'],
    status: 'live',
    image: '/projects/learnquran.png',
    deployment: 'https://www.learn-quran.app/',
  },
  {
    name: 'Hayya',
    description:
      'Mobile app that turns Muslim prayer times into insistent, call-style alarms — a full-screen "incoming call" UI with themed ringtones, streak tracking, and a written-reason flow for declining. Exact-alarm scheduling and full-screen lock-screen intents on Android, time-sensitive notifications on iOS.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Notifee', 'zustand', 'adhan'],
    status: 'in-development',
    image: '/projects/hayya.png',
    deployment: 'https://saiyedrushan.github.io/hayya-site/',
  },
]

export default projects
