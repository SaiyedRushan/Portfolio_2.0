import React from "react";
import { motion } from "framer-motion";
type Props = {};

function Projects({}: Props) {
  const project1 = {
    name: "Portfolio Website",
    description: "Designed a personal portfolio website using HTML and CSS.",
    imglink: "./Portfolio.png",
    links: [
      "https://github.com/SaiyedRushan/PortfolioWebsite",
      "https://saiyedrushan.github.io/PortfolioWebsite/",
    ],
  };
  const project2 = {
    name: "Git Info",
    description:
      "Developed a website that gets information from your GitHub profile using the GraphQl query language and displays it using React.js",
    imglink:
      "https://saiyedrushan.github.io/PortfolioWebsite/images/git_info2.jpg",
    links: ["https://github.com/SaiyedRushan/ReactGitGraphQL-Website"],
  };
  const project3 = {
    name: "Web Chat App",
    description:
      "Created a web chat application using React.js and the ChatEngine API.",
    imglink:
      "https://saiyedrushan.github.io/PortfolioWebsite/images/chatapp_img.png",
    links: [
      "https://github.com/SaiyedRushan/ChatApp-React",
      "https://rushans-chat-app.netlify.app/",
    ],
  };
  const project4 = {
    name: "Database Application",
    description:
      "This project was created using Java Swing, JDBC and SQL. It is a full stack database application that allows users to insert CFP records through a gui which was created using java swing, and view the results of some SQL queries carried out with the help of JDBC.",
    imglink:
      "https://saiyedrushan.github.io/PortfolioWebsite/images/db_img1.jpg",
    links: ["https://github.com/SaiyedRushan/DatabaseApplication"],
  };
  const project5 = {
    name: "Other Projects",
    description:
      "Checkout my other projects along with this portfolio project on my github.",
    imglink: "./Git.png",
    links: ["https://github.com/SaiyedRushan/"],
  };

  const projects = [project1, project2, project3, project4, project5];

  return (
    <motion.div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin mt-0">
        {projects.map((project, i) => {
          return (
            <div
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
              key={i}
            >
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={project.imglink}
                className="max-h-[250px]"
              />
              <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4-xl font-semibold text-center">
                  Project {i + 1} of {projects.length}: {project.name}
                </h4>
                <p className="text-sm text-center md:text-left">
                  {project.description}
                </p>

                {project.links.map((link, i) => {
                  return (
                    <span className="text-sm">
                      <a href={link} className="underline hover:text-green-500">
                        {link}
                      </a>
                      <br />
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
