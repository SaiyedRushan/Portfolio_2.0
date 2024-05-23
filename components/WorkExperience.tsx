import React from "react"
import { motion } from "framer-motion"
import ExperienceCard from "./ExperienceCard"
type Props = {}

function WorkExperience({}: Props) {
  const bellIcon = "https://play-lh.googleusercontent.com/RWg7Q38j0OGEZ2XY8xxnGWBWrSm0GjOL0ZRgQ1U47TnJPtyXyudct2Lm5nlKRUW55g"
  const bellDescription = [
    "Collaborated in agile teams, practiced pair programming and code reviews, mentored interns, and assisted in project management (story creation, requirements gathering).",
    "Utilized Vue.js, Vuetify, Typescript, Node.js, Express, and SQL Server, to build a progressive enterprise web application using mobile-first approach. Ensured security and role-based access control through Keycloak. Containerized using Docker and deployed on Red Hat Openshift.",
    "Built and maintained CI/CD pipelines using Jenkins automating testing and deployments, reducing manual work by 50% and accelerating software delivery by 30%. Used Prometheus and Grafana for monitoring system health and efficient troubleshooting.",
    "Engineered a range of data-driven solutions, including BI dashboards, geospatial applications, and form-based apps, from concept to deployment.",
    "Analyzed db performance bottlenecks, optimized complex SQL queries, normalized tables, and added strategic indexes, reducing data redundancy and improving response time for frequently accessed customer data by 30%.",
    "Implemented lazy loading and code-splitting techniques to improve frontend client-side performance, reducing initial page load time by 20%.",
    "Developed and maintained a high-performance application using React and Spring Boot, with a focus on backend engineering. Integrated Keycloak authentication for stringent security measures, ensuring robust data protection and user privacy. Utilized NGINX as a reverse proxy to optimize app serving.",
    "Developed efficient RESTful APIs, integrated Google Maps, Geocoding API, and Google Cloud Storage for seamless user experiences. Created Swagger documentation for APIs exposed to third-party vendors.",
    "Implemented Playwright for E2E testing, Jest for API, Vue component unit testing, ensuring robust code quality.",
  ]
  const yorkIcon = "https://euc.yorku.ca/wp-content/uploads/2021/11/York-icon.png"
  const networkServicesDescription = [
    "Provided basic network operational and administrative support to senior technicians. ",
    "Provided support in the installation, repair, and maintenance of network infrastructure equipment. ",
    "Installed wired and wireless temperature/humidity sensors and leak detectors in the datacenter.  ",
    "Performed Wi-Fi signal quality surveys. Prepared Wi-Fi APs for installation, configured cisco switches. ",
    "Troubleshot defective equipment and opened RMAs. ",
    "Documented and audited the campus-wide fiber (SM, MM) infrastructure.  ",
    "Performed administrative duties, documentation, and inventory updates. ",
  ]
  const capstoneDescription = [
    "Worked in an interdisciplinary group of 5 mechanical engineers, 4 software engineer and 3 electrical engineers to build a multifunctional robot that can attach onto power lines, traverse them, and detect faults in them using a machine learning algorithm.",
    "Followed the engineering design process to think creatively and discuss open ended designs proposed from each discipline.",
  ]

  return (
    <motion.div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}>
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl '>Experience</h3>

      <div className='w-full h-[550px] flex space-x-5 overflow-x-scroll px-10 py-5 snap-x overflow-y-hidden snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#008000]/80 xl:mt-[100px]'>
        <ExperienceCard companyIcon={bellIcon} companyName='Bell Canada' duration='May 2022 - Present' title='Software Developer' description={bellDescription} />
        <ExperienceCard companyIcon={yorkIcon} companyName='York University' duration='Sep 2021 - May 2022' title='Network Services Assistant' description={networkServicesDescription} />
        <ExperienceCard companyIcon={yorkIcon} companyName='York University' duration='Sep 2022 - May 2023' title='Engineering Capstone Project' description={capstoneDescription} />
      </div>
    </motion.div>
  )
}

export default WorkExperience
