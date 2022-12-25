import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory  overflow-scroll z-0">
        <Head>
          <title>Rushan's Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="hero" className="snap-center">
          <About />
        </section>

        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>

        <section id="skills" className="snap-start">
          <Skills />
        </section>
      </div>
    </>
  );
}
