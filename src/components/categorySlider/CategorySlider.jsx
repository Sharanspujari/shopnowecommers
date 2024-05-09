import React from "react";
import Slider from "react-slick";

const CategorySlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  return (
    <div className="w-full h-auto py-5 pl-4 pr-0">
      <div className="container mx-auto ">
        <h2 className="text-[32px] text-[#253D4E]">Featured Categories</h2>
        <Slider {...settings} className="cateSlider mt-8">
          <div className=" h-auto  rounded-xl bg-[#F2FCE4] hover:border hover:border-green-300 pointer">
            <div className="flex flex-col items-center justify-center mb-5">
              <img
                src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-13.png"
                className="h-[82px] w-[82px] mt-4 hover:scale-105 hover:duration-300"
              />
              <h6 className="mt-5 text-[#253D4E] hover:text-green-500">
                Cake & Milk
              </h6>
              <p className="text-[#7e7e7e] text-[15px]">26 items</p>
            </div>
          </div>

          <div className=" h-auto  rounded-xl bg-[#FFFCEB] hover:border hover:border-green-300 pointer">
            <div className="flex flex-col items-center justify-center mb-5">
              <img
                src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-12.png"
                className="h-[82px] w-[82px] mt-4"
              />
              <h5 className="mt-5">Organic Kiwi</h5>
              <p className="text-[#7e7e7e] text-[15px]">28 items</p>
            </div>
          </div>

          <div className=" h-auto  rounded-xl bg-[#ECFFEC] hover:border hover:border-green-300 pointer">
            <div className="flex flex-col items-center justify-center mb-5">
              <img
                src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-11.png"
                className="h-[82px] w-[82px] mt-4"
              />
              <h5 className="mt-5">Peach</h5>
              <p className="text-[#7e7e7e] text-[15px]">14 items</p>
            </div>
          </div>

          <div className=" h-auto  rounded-xl bg-[#FEEFEA] hover:border hover:border-green-300 pointer">
            <div className="flex flex-col items-center justify-center mb-5">
              <img
                src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-9.png"
                className="h-[82px] w-[82px] mt-4"
              />
              <h5 className="mt-5">Red Apple</h5>
              <p className="text-[#7e7e7e] text-[15px]">54 items</p>
            </div>
          </div>

          <div className="h-auto  rounded-xl bg-[#FFF3EB] hover:border hover:border-green-300 pointer">
            <div className="flex flex-col items-center justify-center mb-5">
              <img
                src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-3.png"
                className="h-[82px] w-[82px] mt-4"
              />
              <h5 className="mt-5">Snack</h5>
              <p className="text-[#7e7e7e] text-[15px]">56 items</p>
            </div>
          </div>

          <div className="h-auto  rounded-xl bg-[#FFF3FF] hover:border hover:border-green-300 pointer">
            <div className="flex flex-col items-center justify-center mb-5">
              <img
                src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-9.png"
                className="h-[82px] w-[82px] mt-4"
              />
              <h5 className="mt-5">Red Apple</h5>
              <p className="text-[#7e7e7e] text-[15px]">54 items</p>
            </div>
          </div>

          <div className="h-auto  rounded-xl bg-[#F2FCE4] hover:border hover:border-green-300 pointer">
            <div className="flex flex-col items-center justify-center mb-5">
              <img
                src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-9.png"
                className="h-[82px] w-[82px] mt-4"
              />
              <h5 className="mt-5">Red Apple</h5>
              <p className="text-[#7e7e7e] text-[15px]">54 items</p>
            </div>
          </div>

          <div className=" h-auto  rounded-xl bg-[#FEEFEA] hover:border hover:border-green-300 pointer">
            <div className="flex flex-col items-center justify-center mb-5">
              <img
                src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-9.png"
                className="h-[82px] w-[82px] mt-4"
              />
              <h5 className="mt-5">Red Apple</h5>
              <p className="text-[#7e7e7e] text-[15px]">54 items</p>
            </div>
          </div>

          <div className=" h-auto rounded-xl bg-[#FFF3FF] hover:border hover:border-green-300 pointer">
            <div className="flex flex-col items-center justify-center mb-5">
              <img
                src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-9.png"
                className="h-[82px] w-[82px] mt-4"
              />
              <h5 className="mt-5">Red Apple</h5>
              <p className="text-[#7e7e7e] text-[15px]">54 items</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CategorySlider;
