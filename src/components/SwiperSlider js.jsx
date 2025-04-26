import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {
  CurrencyConverter,
  RockpaperScissor,
  TictacToe,
  TodoJs,
  QuizAppjs,
  Quizresult,
  Jspassgenerator,
  Miniamazon,
  NotesJs
} from "../assets/index";
import { github } from "../assets";

const slides = [
  { 
    id: 1, 
    title: "Currency Converter", 
    description: "A real-time currency converter utilizing exchange rate APIs.", 
    location: "Live Exchange Rates", 
    image: CurrencyConverter,
    github: "https://github.com/areejirshad/Javascript-main-projects/tree/main/Advanced%20Javascript%20projects/Currency%20Converter%20APP"
  },
  { 
    id: 2, 
    title: "Rock Paper Scissors", 
    description: "An interactive game implementing random logic and event handling.", 
    location: "Classic Fun Game", 
    image: RockpaperScissor,
    github: "https://github.com/areejirshad/Javascript-main-projects/tree/main/Advanced%20Javascript%20projects/rockpaperscissor%20game"
  },
  { 
    id: 3, 
    title: "Tic-Tac-Toe", 
    description: "A two-player game with state management and winning logic.", 
    location: "Two-Player Strategy Game", 
    image: TictacToe,
    github: "https://github.com/areejirshad/Javascript-main-projects/tree/main/Advanced%20Javascript%20projects/tic%20tac%20toe%20game"
  },
  { 
    id: 4, 
    title: "JavaScript To-Do App", 
    description: "A task management app using local storage for persistence.", 
    location: "Task Management", 
    image: TodoJs,
    github: "https://github.com/areejirshad/Javascript-main-projects/tree/main/Javascript%20Mini%20Apps/to%20do%20list%20app"
  },
  { 
    id: 5, 
    title: "JavaScript Quiz App", 
    description: "A quiz app with dynamic questions and score tracking.", 
    location: "Test Your Knowledge", 
    image: QuizAppjs,
    github: "https://github.com/areejirshad/Javascript-main-projects/tree/main/Javascript%20Mini%20Apps/quiz%20app"
  },
  { 
    id: 6, 
    title: "Quiz Result Page", 
    description: "A result page displaying dynamically calculated quiz scores.", 
    location: "Score Calculation", 
    image: Quizresult,
    github: "https://github.com/areejirshad/Javascript-main-projects/tree/main/Javascript%20Mini%20Apps/quiz%20app"
  },
  { 
    id: 7, 
    title: "JavaScript Password Generator", 
    description: "A secure password generator with customizable options.", 
    location: "Secure Random Passwords", 
    image: Jspassgenerator,
    github: "https://github.com/areejirshad/Javascript-main-projects/tree/main/Javascript%20Mini%20Apps/password%20generator"
  },
  { 
    id: 8, 
    title: "Mini Amazon Clone", 
    description: "A basic e-commerce UI clone with product display features.", 
    location: "Online Shopping UI", 
    image: Miniamazon,
    github: "https://github.com"
  },
  { 
    id: 9, 
    title: "JavaScript Notes App", 
    description: "A note-taking app with local storage support.", 
    location: "Save & Manage Notes", 
    image: NotesJs,
    github: "https://github.com/areejirshad/Javascript-main-projects/tree/main/Javascript%20Mini%20Apps/My%20notes%20App"
  },
];

const SwiperSlider = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col items-center text-center mt-[-50px]">
        <h3 className={`${styles.sectionHeadText} mt-[-50px]`}>
          Js Practical Projects
        </h3>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Through these JavaScript projects, I have honed my skills in DOM manipulation, event handling, API integration, state management, and interactive UI design. Each project reflects my ability to build dynamic and functional web applications efficiently.
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
                <div className="overlay">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                  <p className="location">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {slide.location}
                  </p>
                </div>
                {/* GitHub Icon */}
                <a
                  href={slide.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2 right-2"
                  style={{ zIndex: 9999 }}
                >
                  <img src={github} alt="GitHub" className="w-6 h-6" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default SectionWrapper(SwiperSlider, "javascript");
