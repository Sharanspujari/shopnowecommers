import React from "react";
import Slider from "react-slick";

const CategorySlider = () => {
  var settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  return (
    <div className="w-full h-auto py-5 p-4">
      <div className="container mx-auto ">
        <h2 className="text-[34px]">Featured Categories</h2>
        <Slider {...settings} className="cateSlider">
          <div className=" h-[180px] bg-red-300 ">1</div>
          <div className=" h-[180px] bg-gray-300 ">2</div>
          <div className=" h-[180px] bg-gray-300">3</div>
          <div className=" h-[180px] bg-gray-300">1</div>
          <div className=" h-[180px] bg-gray-300">1</div>
          <div className=" h-[180px] bg-gray-300">1</div>
          <div className=" h-[180px] bg-gray-300">1</div>
          <div className=" h-[180px] bg-gray-300">1</div>
          <div className=" h-[180px] bg-gray-300">1</div>
          <div className=" h-[180px] bg-gray-300">1</div>
        </Slider>
      </div>
    </div>
  );
};

export default CategorySlider;
