import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home } from "@mui/icons-material";
import useSound from "use-sound";

function Header() {
  const [play] = useSound("mouse-click.wav", {
    volume: 0.1,
    playbackRate: 2.0,
  });
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center bg-transparent">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.0 }}
        className="flex flex-row items-center gap-3"
      >
        <Link
          href="/"
          className="hover:shadow-lg hover:scale-125 transform transition-transform duration-300"
          onMouseEnter={() => play()}
        >
          <Home className="text-gray-400"></Home>
        </Link>
        <SocialIcon
          url="https://www.linkedin.com/in/rushanshahsaiyed/"
          fgColor="gray"
          target="_blank"
          bgColor="transparent"
          className="hover:shadow-lg hover:scale-125 transform transition-transform duration-300"
          onMouseEnter={() => play()}
        ></SocialIcon>
        <SocialIcon
          url="https://github.com/SaiyedRushan"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          className="hover:shadow-lg hover:scale-125 transform transition-transform duration-300"
          onMouseEnter={() => play()}
        ></SocialIcon>
        <Link
          href="/blogs"
          className="hover:shadow-lg hover:scale-125 transform transition-transform duration-300"
          onMouseEnter={() => play()}
        >
          <p className="uppercase text-sm text-gray-400 p-3">Blog</p>
        </Link>
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.0 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          network="email"
          fgColor="gray"
          bgColor="transparent"
          className="cursor-pointer hover:shadow-lg hover:scale-125 transform transition-transform duration-300"
          url="mailto:rushan52@gmail.com"
          onMouseEnter={() => play()}
        />
        <Link
          href="/#contact"
          onMouseEnter={() => play()}
          className="hover:shadow-lg hover:scale-125 transform transition-transform duration-300 mx-4"
        >
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
