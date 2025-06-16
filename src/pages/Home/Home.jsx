import React, { useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import Categories from "../Categories/Categories";
import Testimonials from "../../components/Testimonials/Testimonials";
import "animate.css";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  useEffect(() => {
    document.title = "TradePort | Home";
  }, []);

  return (
    <div>
      <Slider></Slider>
      <Categories></Categories>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
