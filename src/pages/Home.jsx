import React from "react";
import SliderPage from "./SliderPage";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import CategorySlider from "../components/categorySlider/CategorySlider";

const Home = () => {
  // const PrevArrow = (props) => {
  //   const { onClick } = props;
  //   return <RiArrowLeftSLine onClick={onClick} />;
  // };

  // const NextArrow = (props) => {
  //   const { onClick } = props;
  //   return <RiArrowRightSLine onClick={onClick} />;
  // };
  return (
    <div>
      <SliderPage />
      <CategorySlider />
    </div>
  );
};

export default Home;
