import React, { useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import Categories from "../Categories/Categories";
import Testimonials from "../../components/Testimonials/Testimonials";
import "animate.css";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    document.title = "TradePort | Home";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div>
        <Slider></Slider>
        <Categories></Categories>
        <WhyChooseUs></WhyChooseUs>
        <Testimonials></Testimonials>
      </div>
    </motion.div>
  );
};

export default Home;
