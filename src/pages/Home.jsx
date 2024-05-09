import React from "react";
import SliderPage from "./SliderPage";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import CategorySlider from "../components/categorySlider/CategorySlider";
import Banners from "../components/banners/Banners";
import Product from "../components/products/Product";
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
      <Banners />
      <section className="w-full h-auto py-4 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mt-4">
            <h2 className="text-[32px] text-[#253D4E]">Popular Products</h2>
            <ul className="flex gap-6 relative">
              <li className="pointer text-[#253D4E] hover:top-4 hover:text-green-500 transform transition-transform hover:-translate-y-1 duration-300">
                All
              </li>
              <li className="pointer hover:text-green-500 transform transition-transform hover:-translate-y-1 duration-300 ease-in-out">
                Milks & Dairies
              </li>
              <li className="pointer hover:text-green-500 transform transition-transform hover:-translate-y-1 duration-300 ease-in-out">
                Coffes & Teas
              </li>
              <li className="pointer hover:text-green-500 transform transition-transform hover:-translate-y-1 duration-300 ease-in-out">
                Pet Foods
              </li>
              <li className="pointer hover:text-green-500 transform transition-transform hover:-translate-y-1 duration-300 ease-in-out">
                Meats
              </li>
              <li className="pointer hover:text-green-500 transform transition-transform hover:-translate-y-1 duration-300 ease-in-out">
                Vegetables
              </li>
              <li className="pointer hover:text-green-500 transform transition-transform hover:-translate-y-1 duration-300 ease-in-out">
                Fruits
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-5 gap-5 py-[30px] px-0 ">
            <div className="w-full">
              <Product tag={"pinkBadge"} title="Hot" />
            </div>
            <div className="w-full">
              <Product tag="greenBadge" title="New"/>
            </div>
            <div className="w-full">
              <Product tag="blueBadge" title="Sale"/>
            </div>
            <div className="w-full">
              <Product tag="orangeBadge"  title="-14%"/>
            </div>
            <div className="w-full">
              <Product tag="greenBadge" title="New"/>
            </div>
            <div className="w-full">
              <Product tag="blueBadge" title="Sale"/>
            </div>
            <div className="w-full">
              <Product tag="greenBadge" title="New"/>
            </div>
            <div className="w-full">
              <Product tag="orangeBadge" title="-14%"/>
            </div>
            <div className="w-full">
              <Product />
            </div>
            <div className="w-full">
              <Product tag={"pinkBadge"}  title="Hot"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
