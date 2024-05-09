import React from "react";
import Slider from "react-slick";
import SliderPage from "./SliderPage";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import CategorySlider from "../components/categorySlider/CategorySlider";
import Banners from "../components/banners/Banners";
import Product from "../components/products/Product";
import bannerImage from "../../src/assets/banner-4.png";
import { TiArrowRight } from "react-icons/ti";

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

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
              <Product tag="greenBadge" title="New" />
            </div>
            <div className="w-full">
              <Product tag="blueBadge" title="Sale" />
            </div>
            <div className="w-full">
              <Product tag="orangeBadge" title="-14%" />
            </div>
            <div className="w-full">
              <Product tag="greenBadge" title="New" />
            </div>
            <div className="w-full">
              <Product tag="blueBadge" title="Sale" />
            </div>
            <div className="w-full">
              <Product tag="greenBadge" title="New" />
            </div>
            <div className="w-full">
              <Product tag="orangeBadge" title="-14%" />
            </div>
            <div className="w-full">
              <Product />
            </div>
            <div className="w-full">
              <Product tag={"pinkBadge"} title="Hot" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-auto py-0 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-[32px] text-[#253D4E]">Daily best Sales</h2>
            <ul className="flex gap-6 relative">
              <li className="pointer text-[#253D4E] hover:top-4 hover:text-green-500 transform transition-transform hover:-translate-y-1 duration-300">
                Featured
              </li>
              <li className="pointer hover:text-green-500 transform transition-transform hover:-translate-y-1 duration-300 ease-in-out">
                Popular
              </li>
              <li className="pointer hover:text-green-500 transform transition-transform hover:-translate-y-1 duration-300 ease-in-out">
                New added
              </li>
            </ul>
          </div>

          <div className="flex mt-6">
            <div className="w-[24%] relative">
              <img src={bannerImage} className="h-auto w-full rounded-2xl" />
              <div className="absolute top-10 left-12">
                <h2 className="text-[36px] leading-12 text-[#253D4E] font-semibold transition-transform transform hover:animate-bounce duration-500">
                  Bring nature <br /> into your <br /> home
                </h2>{" "}
                <button className="mt-16 bg-green-500 text-white py-1 px-2 rounded-md hover:bg-yellow-500 text-[15px] flex items-center gap-2">
                  Shop Now <TiArrowRight className="text-[16px]" />
                </button>
              </div>
            </div>
            <div className="w-[77%] pl-2">
              <Slider {...settings} className="productSlide">
                <div className="w-full   px-1">
                  <Product tag={"pinkBadge"} title="Hot" />
                </div>
                <div className="w-full  px-1">
                  <Product tag="greenBadge" title="New" />
                </div>
                <div className="w-full   px-1">
                  <Product tag="blueBadge" title="Sale" />
                </div>
                <div className="w-full  px-1">
                  <Product tag="orangeBadge" title="-14%" />
                </div>
                <div className="w-full px-1">
                  <Product tag="greenBadge" title="New" />
                </div>
                <div className="w-full   px-1">
                  <Product tag="blueBadge" title="Sale" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
