import React from "react";
import Categories from "../Categories/Categories";
import Contact from "../Contact/Contact";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
