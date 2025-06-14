import React, { useEffect } from "react";
// import { useInView } from "react-intersection-observer";
import Slider from "../../components/Slider/Slider";
import Categories from "../Categories/Categories";
import Testimonials from "../../components/Testimonials/Testimonials";
import "animate.css";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  useEffect(() => {
    document.title = "TradePort | Home";
  }, []);

  // const { ref: categoryRef, inView } = useInView({
  //   triggerOnce: false,
  //   // threshold: 0.01,
  // });

  return (
    <div>
      <Slider />

      <div
      // ref={categoryRef}
      // className={`transition-all duration-700 ${
      //   inView ? "animate__animated animate__lightSpeedInRight" : ""
      // }`}
      >
        <Categories></Categories>
      </div>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
