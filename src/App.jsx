import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import SwiperSlider from "./components/SwiperSlider";
import SwiperSliderJs from "./components/SwiperSlider js";
import VideoGallery from "./components/videogallery";
import Bannerslide from "./components/Bannerslide";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <SwiperSlider/>
        <SwiperSliderJs/>
        <Bannerslide/>
        <VideoGallery/>
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
