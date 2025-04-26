import React, { useState } from "react";
import ReactPlayer from "react-player";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { github } from "../assets"; // ✅ Make sure this is imported correctly
import playIcon from "../assets/tech/play-removebg-preview.png"; // ✅ Update path if needed

import reactminiapps from "../assets/React projects screenshots/Mini react apps(todo-ps-tabb,faq).mp4";
import reactadvanced from "../assets/React projects screenshots/React crud & Weather App.mp4";
import reactecommerece from "../assets/React projects screenshots/React MiniEcommerece App.mp4";
import reactsocial from "../assets/React projects screenshots/React Mini social media.mp4";
import jsmini from "../assets/Js projects(frontend)/mini js projects.mp4";
import jsadvanced from "../assets/Js projects(frontend)/Advanced js projects.mp4";

import reactminicover from "../assets/React projects screenshots/reactminithumbnail.png";
import reactadvancedcover from "../assets/React projects screenshots/reactadvancecover.png";
import reactecomcover from "../assets/React projects screenshots/reactecommerececover.png";
import socialcover from "../assets/React projects screenshots/reactsocialcover.png";
import jsminicover from "../assets/Js projects(frontend)/minijscover.png";
import jsadvancedcover from "../assets/Js projects(frontend)/advancedjscover.png";

Modal.setAppElement("#root");

const videoProjects = [
  {
    name: "Mini React Apps",
    description: "Includes TODO app, Pricing section tab, FAQ section, and more mini projects.",
    cover: reactminicover,
    videoUrl: reactminiapps,
    githubLink: "https://github.com/areejirshad/React-Practice-Projects/tree/main/Basic%20Mini%20React%20Projects",
  },
  {
    name: "React Advanced Projects",
    description: "CRUD app, weather app, advanced form validations.",
    cover: reactadvancedcover,
    videoUrl: reactadvanced,
    githubLink: "https://github.com/areejirshad/React-Practice-Projects/tree/main/Advanced%20React%20Projects%2BRedux",
  },
  {
    name: "React E-commerce",
    description: "Mini shopping app with cart, filter, and add to cart functionality.",
    cover: reactecomcover,
    videoUrl: reactecommerece,
    githubLink: "https://github.com/areejirshad/React-Practice-Projects/tree/main/Advanced%20React%20Projects%2BRedux/full%20myntra%20project",
  },
  {
    name: "React Mini Social Media",
    description: "A small-scale social media app layout using React and basic features.",
    cover: socialcover,
    videoUrl: reactsocial,
    githubLink: "https://github.com/areejirshad/React-Practice-Projects/tree/main/Advanced%20React%20Projects%2BRedux/Mini%20Social%20Media%20Web%20App",
  },
  {
    name: "JavaScript Mini Projects",
    description: "Includes counter, form validation, sliders, and other mini JS apps.",
    cover: jsminicover,
    videoUrl: jsmini,
    githubLink: "https://github.com/areejirshad/Javascript-main-projects/tree/main/Javascript%20Mini%20Apps",
  },
  {
    name: "Advanced Js Projects",
    description: "Includes currency converter, GitHub profile finder & more advanced JS apps.",
    cover: jsadvancedcover,
    videoUrl: jsadvanced,
    githubLink: "https://github.com/areejirshad/Javascript-main-projects/tree/main/Advanced%20Javascript%20projects",
  },
];

const VideoGallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const openModal = (url) => {
    setCurrentVideo(url);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentVideo("");
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Demo Videos</p>
        <h2 className={styles.sectionHeadText}>React & JS Projects Showcase</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        These demo videos display the functionality of the apps and projects I've created with React.js and JavaScript. Click any card to preview the project in action.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {videoProjects.map((video, index) => (
          <motion.div
            key={`video-${index}`}
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
          >
            <Tilt
              options={{ max: 25, scale: 1, speed: 450 }}
              className="bg-[#1e1e2f] p-4 rounded-2xl sm:w-[320px] w-full shadow-md hover:shadow-xl transition-shadow"
            >
              <div
                className="relative w-full h-[200px] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openModal(video.videoUrl)}
              >
                <img
                  src={video.cover}
                  alt={video.name}
                  className="w-full h-full object-contain rounded-xl"
                />

                {/* Play icon */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-40 transition">
                  <img
                    src={playIcon}
                    alt="Play"
                    className="w-14 h-14 opacity-90"
                  />
                </div>

                {/* GitHub Icon */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(video.githubLink, "_blank");
                  }}
                  className="absolute top-3 right-3 z-30 p-2 rounded-full shadow-md hover:scale-110 transition-transform"
                >
                  <img src={github} alt="GitHub" className="w-8 h-8" />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-white font-semibold text-lg">
                  {video.name}
                </h3>
                <p className="mt-1 text-gray-400 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80"
      >
        <div className="bg-white p-6 rounded-xl w-full max-w-3xl relative shadow-2xl">
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
          >
            Close
          </button>
          <ReactPlayer
            url={currentVideo}
            controls
            width="100%"
            height="400px"
            className="rounded-lg overflow-hidden"
          />
        </div>
      </Modal>
    </>
  );
};

export default SectionWrapper(VideoGallery, "");
