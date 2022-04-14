import Project1 from "../../assets/project1.png";
import Project2 from "../../assets/project2.png";
import Project3 from "../../assets/project3.png";
import Project4 from "../../assets/project4.png";
import Project5 from "../../assets/project5.gif";
import Project6 from "../../assets/project6.gif";
// import { FaHtml5 } from "react-icons/fa";

const ProjectsData = [
  {
    id: 1,
    image: Project1,
    title: `Workday Planner`,
    description: `Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.`,
    github: "https://github.com/dugan-jo/homework05_work-day-scheduler",
    website: "https://dugan-jo.github.io/homework05_work-day-scheduler/",
    programs: ["HTML", "CSS", "JQuery"],
  },
  {
    id: 2,
    image: Project2,
    title: `Disc Cover`,
    description: `Project 1: We created an easy avenue for users to rediscover the art of the music video. We utilized two API's, Shazam and YouTube.`,
    github: "https://github.com/samanthajrexroat/DiscCover",
    website: "https://samanthajrexroat.github.io/DiscCover/",
  },
  {
    id: 3,
    image: Project3,
    title: `Weather App`,
    description:
      "Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.",
    github: "https://github.com/dugan-jo/homework06_weather_dashboard",
    website: "https://dugan-jo.github.io/homework06_weather_dashboard/",
  },
  {
    id: 4,
    image: Project4,
    title: `Project Tracker`,
    description: `Project 2: This is a project management application to allow you to create projects, add user's, create project tasks, delete projects, and mark the status of whether a task has been completed or not. With Project Hub you can reorganize your daily goals. It was built to be a viable competitor against the hundreds of similar applications found of the web today. This project taught us that everyone has daily routines that need to be organized. The possibilities are endless and now are made more efficient.`,
    github: "https://github.com/dugan-jo/Project_Tracker",
    website: "http://hidden-forest-18193.herokuapp.com/",
  },
  {
    id: 5,
    image: Project5,
    title: `E-Commerce Back-end Database`,
    description:
      "Internet retail, also known as e-commerce, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.  This app is a back end database for an e-commerce site. This application is using an Express.js API that utilizes Sequelize to interact with a MySQL database.",
    github: "https://github.com/dugan-jo/E-Commerce_back-end_Database",
    website:
      "https://drive.google.com/file/d/1L_nneG6_9gdllD9bv38S1y5dlFu8KJFU/view",
  },
  {
    id: 6,
    image: Project6,
    title: `Hackbook Social-Network API`,
    description:
      "MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Over the last part of this course, you will use several of the technologies that social networking platforms use in their full-stack applications. Because the foundation of these applications is data, it is important that you understand how to build and structure the API first.",
    github: "https://github.com/dugan-jo/Hackbook_Social-Network-API",
    website:
      "https://drive.google.com/file/d/1f5LM_0DcdLbQPazMyxdolRDXjKpuLhKO/view",
  },
];

export default ProjectsData;
