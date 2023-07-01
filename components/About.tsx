import React from "react";
import { motion } from "framer-motion";
import profilePicture from "../public/profilePicture.jpeg";
type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src={profilePicture.src}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[450px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50 text-sm">
            little
          </span>{" "}
          background
        </h4>
        <p className="text-base">
          Hello 👋, I'm Rushan. As a dedicated and self-motivated Software
          Engineer, I possess a versatile skill set and a strong desire to learn
          and grow within the field of software development. I have experience
          working with a variety of programming languages and software
          development practices, and I am committed to expanding my knowledge
          and skills in these areas. <br />
          <br />
          My software stack includes several programming languages, including
          Java, Python, and JavaScript, as well as libraries and frameworks such
          as Vue.js, Vuetify, React.js, and Express.js. I am also proficient in
          SQL Server, Jest, Docker, Git, and Linux. Through my experience with
          these technologies, I have gained valuable insights into software
          development best practices and effective project management
          techniques. <br />
          <br />
          As a lifelong learner, I am always seeking opportunities to improve my
          skills and stay up-to-date with the latest trends and developments in
          the field of software engineering. I believe that my passion for
          software development, coupled with my strong work ethic and commitment
          to excellence, make me a valuable asset to any team.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
