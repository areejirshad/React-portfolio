import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  wordpress
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    submenu: [
      { id: "react-redux", title: "React & Redux Projects" },
      { id: "javascript", title: "JavaScript Projects" },
      { id: "web-projects", title: "Web Projects" },
    ],
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const services = [
  {
    title: "React Js developer",
    icon: web,
  },
  {
    title: "Javascript developer",
    icon: mobile,
  },
  {
    title: "Wordpress developer",
    icon: backend,
  },
  {
    title: "Shopify expert",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
  {
    name: "Shopify",
    icon: shopify,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "React.js & Redux Developer",
    company_name: "Interactive Projects: Basic to Advanced",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Oct 2024 - Jan 2025",
    points: [
      "Developing and maintaining React.js apps with state management and API integration.",
  "Building CRUD, Weather, Social Media, and E-commerce apps using React-Redux and Context API.",
  "Creating interactive UI components like To-Do List, Password Generator, and FAQ.",
  "Ensuring responsiveness and cross-browser compatibility.",
  "Using React hooks (useState, useEffect, useReducer, useRef) for state management."

    ],
  },
  {
    title: "Javascript developer",
    company_name: "JavaScript Projects: Basic to Advanced",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "June 2024 - Sep 2024",
    points: [
      "Developing interactive apps like Countdown Timer, Quiz, and Notes.",
  "Building utility apps like To-Do List, Password Generator, and Currency Converter.",
  "Creating games like Tic-Tac-Toe, Rock Paper Scissors, and Weather App.",
  "Ensuring responsiveness and cross-browser compatibility.",
  "Utilizing efficient JavaScript functions for smooth interaction."
    ],
  },
  {
    title: "Wordpress Developer",
    company_name: "Expertise in WordPress Development",
    icon: wordpress,
    iconBg: "#c0c8d3",
    date: "June 2023 - Feb 2025 (Continuing...)",
    points: [
      "Developing and maintaining WordPress websites for about 2 years, including educational, LMS, and e-commerce.",
  "Collaborating with designers, product managers, and developers to create high-quality websites.",
  "Implementing responsive design and ensuring cross-browser compatibility.",
  "Contributing to theme/plugin development, optimizing performance, and providing feedback."
    ],
  },
  {
    title: "Shopify Expert",
    company_name: "Innovative Business Solutions",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developing and managing Shopify stores, customizing themes, and integrating apps.",
  "Building e-commerce solutions with a focus on user experience and conversion optimization.",
  "Creating interactive features like product filters, shopping carts, and checkout flows.",
  "Ensuring mobile responsiveness and cross-browser compatibility.",
  "Leveraging Shopify Liquid for tailored, high-performing e-commerce websites."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Areej built us a smooth, professional WordPress site that truly reflects our institute’s vision.",
    name: "Director",
    designation: "CEO",
    company: "AlUmmah Leaders Institute",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Our new WordPress website is clean, responsive, and speaks to our UK audience perfectly.",
    name: "Founder",
    designation: "Director",
    company: "Global Awakening (UK)",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "The Shopify redesign was on-brand, fast, and exactly what we needed. Highly recommended!",
    name: "Team Lead",
    designation: "CEO",
    company: "Noon Graphy",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];



const projects = [
  {
    name: "Islamic institute Website",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];


export { services, technologies, experiences, testimonials, projects };