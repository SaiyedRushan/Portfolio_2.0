type Experience = {
  id: string
  companyIcon: string
  companyName: string
  duration: string
  title: string
  tagline?: string
  description: string[]
}

const workExperience: Experience[] = [
  {
    id: 'rushdevs',
    companyIcon: '/rushdevs.svg',
    companyName: 'RushDevs',
    duration: 'Jul 2026 - Present',
    title: 'Founder & Principal Engineer',
    tagline: 'Independent software studio — web, mobile, and the systems behind them',
    description: [
      'Work with startups and small teams end-to-end: scoping the problem, designing the architecture, shipping the product, and running it in production afterwards.',
      'Build and operate my own products under the same roof — MugUp and EasyReports are live and paid, with Learn Quran and Hayya in active development.',
      'Bring the same stack I ran at enterprise scale to smaller teams: TypeScript, React, Next.js, Node.js, and PostgreSQL, on cloud infrastructure provisioned as code.',
      'Handle the full delivery path — CI/CD, observability, and cloud cost management — so clients get a product that stays maintainable after handover.',
    ],
  },
  {
    id: 'afresh-technologies',
    companyIcon: '/afresh.png',
    companyName: 'Afresh Technologies',
    duration: 'Jul 2025 - Jul 2026',
    title: 'Senior Software Engineer',
    tagline: 'AI-powered inventory and ordering platform for grocery retailers',
    description: [
      'Designed and shipped a greenfield application using React, TypeScript, Node.js, GraphQL, and PostgreSQL, onboarding multiple enterprise customers onto the platform.',
      'Partnered with staff engineers to architect micro-services with event-driven messaging via Azure Service Bus, owning critical components end-to-end for scalability and maintainability.',
      'Debugged and resolved production incidents using Datadog, participating in weekly on-call rotations and driving reliability improvements across services.',
      'Partnered with product, data, and ML engineers to deliver high-impact features, and contributed to data pipelines using dbt, Airflow, Databricks, and Lakebase.',
      'Provisioned Azure infrastructure with Terraform and built CI/CD pipelines with GitHub Actions and CircleCI; managed progressive feature rollouts with CloudBees feature flags and enforced quality via Jest and Cypress test suites.',
      'Leveraged AI tools including Claude Code to accelerate development velocity and engineering throughput.',
    ],
  },
  {
    id: 'speer-technologies',
    companyIcon: '/speer.svg',
    companyName: 'Speer Technologies',
    duration: 'Oct 2024 - Jul 2025',
    title: 'Senior Full Stack Engineer',
    tagline: 'End-to-end product development partner for startups and enterprises',
    description: [
      'Designed and implemented serverless, durable Azure Functions leveraging C# .NET 8.0 to optimize cloud scalability and efficiency.',
      'Developed and maintained CI/CD pipelines using GitHub Actions, and deployed web applications and services on Microsoft Azure for improved scalability and reliability. Set up Azure AD Auth to secure APIs and enable role-based access control across services.',
      'Implemented WebSockets using SignalR for real-time communication between IoT devices and microservices, and used RabbitMQ for event-driven, asynchronous interservice communication.',
      'Developed and optimized NoSQL and SQL data models using Entity Framework Core, with strategic partitioning to handle high-volume container workloads. Led the data migration and model transformation from Azure CosmosDB to Postgres, ensuring seamless integration and performance optimization.',
      'Designed and developed responsive landing pages and dynamic customer-facing UIs across multiple products using React, Next.js, and Blazor, transforming Figma designs into seamless, interactive web experiences.',
      'Developed cross-platform mobile applications using React Native and Supabase, delivering scalable, real-time solutions for iOS and Android platforms. Provided support and resolved critical bugs in a Flutter application, improving app stability and performance.',
      'Leveraged AI tools and large language models (LLMs), including Claude, Cursor IDE, and V0, to enhance development efficiency and functionality.',
    ],
  },
  {
    id: 'bell-canada',
    companyIcon: 'https://play-lh.googleusercontent.com/RWg7Q38j0OGEZ2XY8xxnGWBWrSm0GjOL0ZRgQ1U47TnJPtyXyudct2Lm5nlKRUW55g',
    companyName: 'Bell Canada',
    duration: 'May 2022 - Sep 2024',
    title: 'Full Stack Software Developer',
    tagline: "Canada's largest telecommunications provider",
    description: [
      'Built a progressive enterprise web application using Vue.js, Vuetify, TypeScript, Node.js, Express, and SQL Server. Implemented Keycloak for authentication and role-based access control, containerized with Docker, and deployed on Red Hat OpenShift.',
      'Built and maintained CI/CD pipelines with Jenkins, reducing manual work by 50% and accelerating delivery by 30%. Monitored system health using Prometheus and Grafana.',
      'Optimized database performance by tuning complex SQL queries, normalizing tables, and adding strategic indexes, improving response time for frequently accessed customer data by 30%. Applied lazy loading and code-splitting on the frontend, reducing initial page load time by 20%.',
      'Engineered data-driven solutions including BI dashboards, geospatial mapping applications, and a CMS module, and implemented WebSockets for real-time collaborative features.',
      'Developed and maintained a high-performance application using React and Spring Boot with a focus on backend engineering, integrating Keycloak authentication and using NGINX as a reverse proxy to optimize app serving.',
      'Developed RESTful APIs with OpenAPI/Swagger documentation, integrated Google Maps and Google Cloud Storage, and automated workflows using GCP Cloud Functions, Cloud Scheduler, and Terraform.',
      'Implemented Playwright for E2E testing and Jest for unit and integration testing to ensure robust code quality. Mentored interns and contributed to story creation and requirements gathering.',
    ],
  },
  {
    id: 'onemax',
    companyIcon: '/max.png',
    companyName: 'OneMAX',
    duration: 'Feb 2025 - Present',
    title: 'Senior Full Stack Engineer (Volunteer)',
    tagline: 'Social networking platform',
    description: [
      'Developed a LinkedIn-like social media networking platform using TypeScript, React, MUI, Redux, Node.js, Express, and AWS services including DynamoDB, S3, Cognito, and Lambda Functions for a scalable customer-facing experience.',
      'Designed and deployed cloud infrastructure using AWS CDK, and built end-to-end CI/CD pipelines with GitHub Actions to streamline deployment and development workflows.',
      'Mentored junior developers, conducted code reviews, and enforced software engineering best practices to ensure code quality and maintain high team standards.',
    ],
  },
]

export default workExperience
