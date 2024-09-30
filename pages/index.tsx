import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import Header from "../components/Header";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflox-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#008000]/80 scroll-smooth">
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

        <section id="projects" className="snap-start">
          <Projects />
        </section>

        <section id="skills" className="snap-start">
          <Skills />
        </section>

        <section id="contact" className="snap-start">
          <ContactMe />
        </section>

        <div className="fixed bottom-5 right-5 z-50">
          <Link href="#hero" scroll={true}>
            <Button className="h-14 w-14 p-0 rounded-full ">
              <ArrowUpCircleIcon className="h-10 w-10" fill="slate" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
