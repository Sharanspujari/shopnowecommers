import React from "react";
import Slider from "react-slick";
import slider1 from "../assets/slider-image-1.png";
import slider2 from "../assets/slider-image-2.png";
import { BsSend } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import NewsLetter from "../components/newsLetter/NewsLetter";
const SliderPage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
  };

  return (
    <section className="py-7 p-4 ">
      <div className="container mx-auto relative">
        <Slider {...settings}>
          <div className="relative">
            <img src={slider1} className="w-full rounded-3xl overflow-hidden" />
            {/* image text */}
            <div className="absolute top-[15%] left-[7%] z-50">
              <h2 className="text-[70px] font-semibold text-[#253D4E] leading-[73px]">
                Don't miss amazing <br />
                grocery deals
              </h2>
              <p className="text-[30px] text-[#7e7e7e] mt-6">
                Sign up for the daily newsletter
              </p>
            </div>
          </div>

          <div className="relative">
            <img src={slider2} className="w-full rounded-3xl overflow-hidden" />
            <div className="absolute top-[15%] left-[8%] z-50">
              <h2 className="text-[70px] font-semibold text-[#253D4E] leading-[73px]">
                Fresh Vegetables <br />
                Big discount
              </h2>
              <p className="text-[30px] text-[#7e7e7e] mt-6">
                Save upto 50% off on your first order
              </p>
            </div>
          </div>
        </Slider>
        <NewsLetter />
      </div>
    </section>
  );
};

export default SliderPage;
