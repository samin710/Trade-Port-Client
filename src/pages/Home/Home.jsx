import React, { useEffect } from "react";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  useEffect(() => {
    document.title = "TradePort | Home";
  }, []);
  return (
    <div>
      <Slider></Slider>
    </div>
  );
};

export default Home;
