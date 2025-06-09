import React, { useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import Categories from "../Categories/Categories";

const Home = () => {
  useEffect(() => {
    document.title = "TradePort | Home";
  }, []);
  
  return (
    <div>
      <Slider></Slider>
      <Categories></Categories>
    </div>
  );
};

export default Home;
