import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    swiperRef.current?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current?.autoplay?.start();
  };

  const slideClass =
    "relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105";

  const badgeClass =
    "absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-md shadow-md";

  const imageClass =
    "w-full h-full object-cover rounded-2xl transition-opacity duration-300";

  return (
    <>
      <h1 className="text-center mt-7 md:mt-14 text-2xl md:text-4xl">
        Deals You Can’t Miss
      </h1>
      <p className="text-center">Swipe through the hottest offers of the season.</p>
      <div className="w-full max-w-7xl mx-auto ">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={2000}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={slideClass}
          >
            <span className={badgeClass}>30% OFF</span>
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="Nature 1"
              className={imageClass}
            />
          </SwiperSlide>

          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={slideClass}
          >
            <span className={badgeClass}>Buy 1 Get 1</span>
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt="Nature 2"
              className={imageClass}
            />
          </SwiperSlide>

          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={slideClass}
          >
            <span className={badgeClass}>15% OFF</span>
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              alt="Nature 3"
              className={imageClass}
            />
          </SwiperSlide>

          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={slideClass}
          >
            <span className={badgeClass}>Free Shipping</span>
            <img
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              alt="Nature 4"
              className={imageClass}
            />
          </SwiperSlide>

          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={slideClass}
          >
            <span className={badgeClass}>50% OFF</span>
            <img
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              alt="Nature 5"
              className={imageClass}
            />
          </SwiperSlide>

          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={slideClass}
          >
            <span className={badgeClass}>Limited Deal</span>
            <img
              src="https://swiperjs.com/demos/images/nature-6.jpg"
              alt="Nature 6"
              className={imageClass}
            />
          </SwiperSlide>

          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={slideClass}
          >
            <span className={badgeClass}>New Arrival</span>
            <img
              src="https://swiperjs.com/demos/images/nature-7.jpg"
              alt="Nature 7"
              className={imageClass}
            />
          </SwiperSlide>

          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={slideClass}
          >
            <span className={badgeClass}>20% OFF</span>
            <img
              src="https://swiperjs.com/demos/images/nature-8.jpg"
              alt="Nature 8"
              className={imageClass}
            />
          </SwiperSlide>

          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={slideClass}
          >
            <span className={badgeClass}>Clearance</span>
            <img
              src="https://swiperjs.com/demos/images/nature-9.jpg"
              alt="Nature 9"
              className={imageClass}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
