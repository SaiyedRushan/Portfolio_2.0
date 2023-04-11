import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflox-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scroll-smooth">
        <Head>
          <title>Rushan's Portfolio</title>
          <link rel="icon" href="./RS_Favicon.png" />
        </Head>

        <Header />

        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="about" className="snap-center">
          <About />
        </section>

        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>

        <section id="skills" className="snap-start">
          <Skills />
        </section>

        <section id="projects" className="snap-start">
          <Projects />
        </section>

        <section id="contact" className="snap-start">
          <ContactMe />
        </section>

        <Link href="#hero" scroll={true}>
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-end justify-end mr-10">
              <img
                src="https://img.icons8.com/ios-filled/512/collapse-arrow.png"
                className="h-10 w-10 rounded-full fliter grayscale hover:grayscale-0"
              />
            </div>
          </footer>
        </Link>
      </div>
    </>
  );
}
