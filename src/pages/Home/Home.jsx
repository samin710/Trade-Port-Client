import React, { useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import Categories from "../Categories/Categories";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  useEffect(() => {
    document.title = "TradePort | Home";
  }, []);
  
  return (
    <div>
      <Slider></Slider>
      <Categories></Categories>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
