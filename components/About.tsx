import React from "react";
import { motion } from "framer-motion";
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
        src="https://media.licdn.com/dms/image/C4D03AQHa062g_4JyAw/profile-displayphoto-shrink_200_200/0/1648745664565?e=1677110400&v=beta&t=P9tVJ-tAAUoJOBOm_3kYfceFIWCknG4lHJDvpSuK70A"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[450px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I'm a fourth year computer engineering student at York University
          graduating by May 2023. I love building and trying new things out. I
          am a quick learner and I like playing with new technologies. I am well
          versed in java and python and I'm interested in full-stack software
          development as well as data engineering. I've studied the technologies
          and have learned the skills required for these roles. I think I am
          more than ready to start a career in either of these roles and I would
          like a chance to prove how my skills, passion, and hardwork could be
          of value to your company.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
