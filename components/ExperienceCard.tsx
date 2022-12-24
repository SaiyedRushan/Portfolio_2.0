import React from "react";
import { motion } from "framer-motion";
type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] h-[600px]
        snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] obejct-center object-cover"
        src="https://play-lh.googleusercontent.com/RWg7Q38j0OGEZ2XY8xxnGWBWrSm0GjOL0ZRgQ1U47TnJPtyXyudct2Lm5nlKRUW55g"
      />

      <div className="px-0 md:px-10 overflow-y-auto w-[400px]">
        <h4 className="text-4-xl font-light">Software Developer</h4>
        <p className="font-bold text-2xl mt-1">Bell Canada</p>
        <div className="flex space-x-2 my-2">
          <img
            src="https://img.icons8.com/color/512/vue-js.png"
            className="h-10 w-10 rounded-full"
          />
          <img
            src="https://img.icons8.com/color/512/vue-js.png"
            className="h-10 w-10 rounded-full"
          />
          <img
            src="https://img.icons8.com/color/512/vue-js.png"
            className="h-10 w-10 rounded-full"
          />
        </div>

        <p className="uppercase py-5 text-gray-300">Started work - end</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li> Summary Points </li>
          <li> Summary Points </li>
          <li> Summary Points </li>
          <li> Summary Points </li>
          <li> Summary Points </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
