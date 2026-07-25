import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

// Alternating band so adjacent sections read as distinct blocks without borders.
const TINTED = 'bg-gray-50 dark:bg-[#0a0a0a]'

export default function Home() {
  return (
    <div className='min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white'>
      <Header />

      <main>
        <section id='hero'>
          <Hero />
        </section>

        <section id='about' className={TINTED}>
          <About />
        </section>

        <section id='experience'>
          <WorkExperience />
        </section>

        <section id='projects' className={TINTED}>
          <Projects />
        </section>

        <section id='contact'>
          <ContactMe />
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
