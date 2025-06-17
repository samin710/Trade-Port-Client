import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import GradientText from "../../animations/GradientText/GradientText";

const Slider = () => {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    swiperRef.current?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current?.autoplay?.start();
  };

  const slideClass =
    "relative overflow-hidden rounded-2xl shadow-xl dark:shadow-secondary shadow-primary transition-transform duration-300 ease-in-out hover:scale-105";

  const badgeClass =
    "absolute top-4 left-7 bg-gradient-to-r from-primary dark:from-secondary to-secondary dark:to-base-100 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-md shadow-md";

  const imageClass =
    "w-full h-full object-cover rounded-2xl transition-opacity duration-300";

  return (
    <>
      <h1 className="text-center pt-10 text-2xl md:text-4xl font-bold">
        <GradientText
          colors={[
            "#40ffaa",
            "#4079ff",
            "#40ffaa",
            "#4079ff",
            "#40ffaa",
            "#0077B6",
          ]}
          animationSpeed={5}
          showBorder={false}
          className="custom-class"
        >
          Deals You Can’t Miss
        </GradientText>
      </h1>
      <p className="text-center text-accent text-sm md:w-1/2 mx-auto">
        "Swipe through the hottest offers of the season and discover unbeatable
        deals, exclusive discounts, and limited-time specials waiting just for
        you!"
      </p>
      <div className="w-full max-w-7xl mx-auto">
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
              src="https://i.ibb.co/ynZqqLJG/Gaming-Headphones-with-LED-Accents.png"
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
              src="https://i.ibb.co/ynv3cGvn/Nike-Air-Force-1-x-Travis-Scott.png"
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
              src="https://i.ibb.co/RpGLSkpV/Iconic-Air-Jordan-1-Bred-Sneakers.png"
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
              src="https://i.ibb.co/VWmPGpLP/Adidas-Body-Spray-on-Urban-Pavement.png"
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
              src="https://i.ibb.co/Tqnm3gng/Olay-Cream-on-Warm-Countertop.png"
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
              src="https://i.ibb.co/67CrdJd0/Bosch-Alternator-in-Garage-Workshop.png"
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
              src="https://i.ibb.co/jvStrFRB/Elegance-in-Simplicity-Ballpoint-Pen.png"
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
              src="https://i.ibb.co/7xX2yP7n/Stainless-Steel-Refrigerator-on-Gray-Background.png"
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
              src="https://i.ibb.co/5WJHgdFY/Cordless-Drill-on-Gray-Background.png"
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
