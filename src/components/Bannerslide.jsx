import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./BannerSlider.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import custom CSS for the slider

import wordpressdesighn from "../assets/wordpress & shopify projects/wordpress desighn (1).PNG";
import webdesighn from "../assets/wordpress & shopify projects/wordpress and shopify (2).png";

const BannerSlider = () => {
  return (
    <div className="banner-slider">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={800}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={wordpressdesighn} alt="Banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={webdesighn} alt="Banner 2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
