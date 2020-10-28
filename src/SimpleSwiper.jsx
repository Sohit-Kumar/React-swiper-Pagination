import React from "react";
// import Swiper from "react-id-swiper";
// import "swiper/swiper-bundle.css";
// import "swiper/swiper.scss";
// import "swiper/swiper-bundle";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Mousewheel,
  EffectCoverflow,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./Simple.css";

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Mousewheel,
  EffectCoverflow,
]);

const SimpleSwiper = () => {
  //   const params = {
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //       renderBullet: (index = 0, className = "") => {
  //         return '<span class="' + className + '">' + (index + 1) + "</span>";
  //       },
  //     },
  //   };
  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };
  return (
    <div className="swipebody">
      <Swiper
        {...params}
        spaceBetween={50}
        slidesPerView={5}
        navigation
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }}
        keyboard={true}
        mousewheel={true}
        // scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="swiper-slide">
          <img src="https://picsum.photos/id/237/250/200" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="https://picsum.photos/id/237/250/200" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="https://picsum.photos/id/237/250/200" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="https://picsum.photos/id/237/250/200" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="https://picsum.photos/id/237/250/200" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="https://picsum.photos/id/237/250/200" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="https://picsum.photos/id/237/250/200" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="https://picsum.photos/id/237/250/200" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="https://picsum.photos/id/237/250/200" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="https://picsum.photos/id/237/250/200" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SimpleSwiper;
