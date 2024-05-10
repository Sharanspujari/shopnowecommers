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
import TopProducts from "../components/TopProducts";
import newsLetterImage from "../assets/newsLetterImage-9.png";
import NewsLetter from "../components/newsLetter/NewsLetter";
import Footer from "../components/Footer";
import priceTagIcon from "../assets/priceicon-1.svg";
import deliveryIcon from "../assets/deliveryhandicon-2.svg";
import DealsIcon from "../assets/docicon-3.svg";
import WideAssortIcon from "../assets/assorticon-4.svg";
import EasyReturnIcon from "../assets/easyreturnicon-5.svg";
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

      <section className="w-full h-auto py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-start gap-6">
            <div className="topProductWrapper">
              <TopProducts title="Top Selling" />
            </div>
            <div className="topProductWrapper">
              <TopProducts title="Trending Products" />
            </div>
            <div className="topProductWrapper">
              <TopProducts title="Recently added" />
            </div>
            <div className="topProductWrapper">
              <TopProducts title="Top Rated" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto py-6 px-4">
        <div className="container mx-auto">
          <div className="newsLetterBg w-full rounded-3xl h-auto flex pt-20 px-[70px] relative">
            <div className="w-[56%] ">
              <div className="ml-8 ">
                <h2 className="text-[38px] text-[#253D4E] leading-10 font-medium mb-4">
                  Stay home & get your daily <br /> needs from our shop
                </h2>

                <p className="text-[#a0a0a0] text-[18px] font-medium">
                  Start You'r Daily Shopping with{" "}
                  <span className="text-green-600">Nest Mart</span>
                </p>
              </div>
              <NewsLetter />
            </div>
            <div className="w-[44%]">
              <img src={newsLetterImage} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits cards section */}
      <section className="w-full h-auto py-6 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-5 gap-4">
            <div className="flex items-center justify-between bg-[#F4F6FA] py-4 px-6 justify-between  rounded-xl  group">
              <img
                src={priceTagIcon}
                className="w-[25%] relative transform duration-300 ease-in-out group-hover:-translate-y-2"
              />

              <div className="pl-6 w-[75%]">
                <h2 className="text-[18px] text-[#253D4E]">
                  Best prices & <br /> offers
                </h2>
                <p className="text-[#a4a4a4] text-[15px]  pt-2">
                  Orders $50 or more
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between bg-[#F4F6FA] py-3 px-6  rounded-xl group">
              <img
                src={deliveryIcon}
                className="w-[25%] relative transform duration-300 ease-in-out group-hover:-translate-y-2"
              />

              <div className="pl-6 w-[75%]">
                <h2 className="text-[18px] text-[#253D4E]">Free delivery</h2>
                <p className="text-[#a4a4a4] text-[15px]  pt-2">
                  24/7 amazing services
                </p>
              </div>
            </div>

            <div className="flex items-center bg-[#F4F6FA] py-5 px-6  rounded-xl group">
              <img
                src={DealsIcon}
                className="w-[25%] relative transform duration-300 ease-in-out group-hover:-translate-y-2"
              />

              <div className="pl-6  w-[75%]">
                <h2 className="text-[18px] text-[#253D4E]">Great daily deal</h2>
                <p className="text-[#a4a4a4] text-[15px]  pt-2">
                  When you sign up
                </p>
              </div>
            </div>

            <div className="flex items-center bg-[#F4F6FA] py-5 px-6 rounded-xl group">
              <img
                src={WideAssortIcon}
                className="w-[25%] relative transform duration-300 ease-in-out group-hover:-translate-y-2"
              />

              <div className="pl-6  w-[75%]">
                <h2 className="text-[18px] text-[#253D4E]">Wide assortment</h2>
                <p className="text-[#a4a4a4] text-[15px]  pt-2">
                  Mega Discounts
                </p>
              </div>
            </div>
            <div className="flex items-center bg-[#F4F6FA] py-5 px-6 rounded-xl group">
              <img
                src={EasyReturnIcon}
                className="w-[25%] relative transform duration-300 ease-in-out group-hover:-translate-y-2"
              />

              <div className="pl-6  w-[75%]">
                <h2 className="text-[18px] text-[#253D4E]">Easy returns</h2>
                <p className="text-[#a4a4a4] text-[15px]  pt-2">
                  Within 30 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
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
