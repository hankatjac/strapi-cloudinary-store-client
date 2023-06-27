import React from "react";
import Categories from "../Categories/Categories";
import Slider from "../Slider/Slider";
import { useGlobalContext } from "../../context";

const Home = () => {
  const { closeSubmenu } = useGlobalContext();

  const handleSubmenu = (e) => {
    closeSubmenu();
  };
  
  return (
    <div className="home" onMouseOver={handleSubmenu}>
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
