import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
type Props = {};

function WorkExperience({}: Props) {
  const bellIcon =
    "https://play-lh.googleusercontent.com/RWg7Q38j0OGEZ2XY8xxnGWBWrSm0GjOL0ZRgQ1U47TnJPtyXyudct2Lm5nlKRUW55g";
  const bellDescription = [
    "Built a website with mobile-first approach alongside two other interns and a senior developer that would be used by around 10k users and would eventually replace a windows application.",
    "Gained industry experience by working with senior software developers, DB administrators and BI analysts through pair programming, backlog refinement and code reviews. ",
    "Participated in gathering requirements and additional features from the stakeholders. ",
    "Participated in daily scrum calls and utilized agile methodology to continuously improve the website.",
    "Used Vue.js and Vuetify for the frontend, Express.js and Microsoft SQL Server for the backend, GitLab as our version control system. Secured our application with Keycloak and deployed it on Red Hat Openshift.",
    "Created stored procedures, scheduled jobs, and designed tables in SQL Server.",
    "Developed RESTful APIs for fast, efficient, and secure communication with the backend.",
    "Used i18n to internationalize our application for our French users in Quebec.",
  ];
  const yorkIcon =
    "https://euc.yorku.ca/wp-content/uploads/2021/11/York-icon.png";
  const networkServicesDescription = [
    "Provided basic network operational and administrative support to senior technicians. ",
    "Provided support in the installation, repair, and maintenance of network infrastructure equipment. ",
    "Installed wired and wireless temperature/humidity sensors and leak detectors in the datacenter.  ",
    "Performed Wi-Fi signal quality surveys. Prepared Wi-Fi APs for installation, configured cisco switches. ",
    "Troubleshot defective equipment and opened RMAs. ",
    "Documented and audited the campus-wide fiber (SM, MM) infrastructure.  ",
    "Performed administrative duties, documentation, and inventory updates. ",
  ];
  const capstoneDescription = [
    "Worked in an interdisciplinary group of 5 mechanical engineers, 4 software engineer and 3 electrical engineers to build a multifunctional robot that can attach onto power lines, traverse them, and detect faults in them using a machine learning algorithm.",
    "Followed the engineering design process to think creatively and discuss open ended designs proposed from each discipline.",
  ];

  return (
    <motion.div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Experience
      </h3>

      <div
        className="w-full h-[550px] flex space-x-5 overflow-x-scroll px-10 py-5 snap-x snap-mandatory 
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 xl:mt-[100px]"
      >
        <ExperienceCard
          companyIcon={bellIcon}
          companyName="Bell Canada"
          duration="May 2022 - Present"
          title="Software Developer"
          description={bellDescription}
        />
        <ExperienceCard
          companyIcon={yorkIcon}
          companyName="York University"
          duration="Sep 2021 - May 2022"
          title="Network Services Assistant"
          description={networkServicesDescription}
        />
        <ExperienceCard
          companyIcon={yorkIcon}
          companyName="York University"
          duration="Sep 2022 - May 2023"
          title="Engineering Capstone Project"
          description={capstoneDescription}
        />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
