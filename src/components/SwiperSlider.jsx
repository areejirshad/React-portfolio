import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import {
  ReactEommerece,
  ecomBack,
  ReactWeatherApp,
  Reactsocial,
  ReactCurd,
  TabbingReact,
  TodoReact,
  FaqReact,
  passwordReact,
} from "../assets/index";

const slides = [
  { 
    id: 1, 
    title: "E-commerce App (Myntra Clone) - React-Redux", 
    location: "Advanced React-Redux", 
    image: ReactEommerece, 
    description: "Built with Redux Toolkit and real backend. Features dynamic product fetching, cart, and state management.",
    github: "https://github.com/areejirshad/React-Practice-Projects/tree/main/Advanced%20React%20Projects%2BRedux/full%20myntra%20project"
  },
  { 
    id: 2, 
    title: "Using Real Backend in React - REST API", 
    location: "Authentication & Data Fetching", 
    image: ecomBack, 
    description: "Implemented API fetching, authentication, and user management using Firebase & Node.js.",
    github: "https://github.com/areejirshad/React-Practice-Projects/tree/main/Advanced%20React%20Projects%2BRedux/full%20myntra%20project"
  },
  { 
    id: 3, 
    title: "Weather App - Live API", 
    location: "Real-time Weather Updates", 
    image: ReactWeatherApp, 
    description: "Fetches live weather data with dynamic UI updates and error handling.",
    github: "https://github.com/areejirshad/React-Practice-Projects/tree/main/Advanced%20React%20Projects%2BRedux/Weather%20app"
  },
  { 
    id: 4, 
    title: "Social Media App - React Context", 
    location: "Post & Chat Features", 
    image: Reactsocial, 
    description: "Built a social app with post creation, deletion, and global state management using Context API.",
    github: "https://github.com/areejirshad/React-Practice-Projects/tree/main/Advanced%20React%20Projects%2BRedux/Mini%20Social%20Media%20Web%20App"
  },
  { 
    id: 5, 
    title: "CRUD App - React Forms", 
    location: "Manage Data Efficiently", 
    image: ReactCurd, 
    description: "Implemented create, update, and delete functionalities with real-time data updates.",
    github: "https://github.com/areejirshad/React-Practice-Projects/tree/main/Advanced%20React%20Projects%2BRedux/CURD%20App"
  },
  { 
    id: 6, 
    title: "Tabbing App - Dynamic UI", 
    location: "Interactive Tabs", 
    image: TabbingReact, 
    description: "Created tab switching with smooth transitions using useState.",
    github: "https://github.com/areejirshad/React-Practice-Projects/tree/main/Basic%20Mini%20React%20Projects/tabbing%2Cmodal%2Cmenu"
  },
  { 
    id: 7, 
    title: "To-Do App - Task Management", 
    location: "Efficient Task Handling", 
    image: TodoReact, 
    description: "Built a task manager with add, delete, and filter features.",
    github: "https://github.com/areejirshad/React-Practice-Projects/tree/main/Basic%20Mini%20React%20Projects/todolist"
  },
  { 
    id: 8, 
    title: "FAQ App - Interactive Section", 
    location: "Collapsible FAQ", 
    image: FaqReact, 
    description: "Accordion-style FAQ with smooth expand/collapse effects.",
    github: "https://github.com/areejirshad/React-Practice-Projects/tree/main/Basic%20Mini%20React%20Projects/Faq"
  },
  { 
    id: 9, 
    title: "Password Manager - Secure Generator", 
    location: "Customizable Passwords", 
    image: passwordReact, 
    description: "Generates strong passwords with customizable options.",
    github: "https://github.com/areejirshad/React-Practice-Projects/tree/main/Basic%20Mini%20React%20Projects/password%20generator"
  },
];

const SwiperSlider = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col items-center text-center">
        <h4 className={`${styles.sectionHeadText}`}>
          React-Redux Mini Projects
        </h4>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Excited to showcase my React.js projects, where I’ve learned state management, CRUD operations, API integration, and UI interactivity through apps like a Mini E-commerce (Myntra Clone), Social Media App, To-Do List, and Weather App!
        </motion.p>
      </motion.div>

      <section className="swiper-container">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          className="mySwiper"
          aria-label="Image Gallery Slider"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="swiper-slide">
              <div className="swiper-slide-content relative">
                <img src={slide.image} alt={slide.title} className="swiper-image" />
                <div className="overlay relative" style={{ zIndex: 0 }}>
                  <h2>{slide.title}</h2>
                  <p className="location">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {slide.location}
                  </p>
                  <p className="description">{slide.description}</p>
                </div>
                {/* GitHub Icon moved as the last element */}
                <a
                  href={slide.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2 right-2 z-[9999]"
                >
                  <img src={github} alt="GitHub" className="w-6 h-6"  style={{ zIndex: 9999 }} />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default SectionWrapper(SwiperSlider, "react-redux");
