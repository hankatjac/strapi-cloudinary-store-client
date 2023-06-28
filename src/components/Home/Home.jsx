import React from "react";
import Categories from "../Categories/Categories";
import Slider from "../Slider/Slider";
import { useGlobalContext } from "../../context";

const Home = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <div className="home" onMouseOver={closeSubmenu}>
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
