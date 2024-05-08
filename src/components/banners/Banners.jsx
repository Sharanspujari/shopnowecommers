import React from "react";
import { TiArrowRight } from "react-icons/ti";

const Banners = () => {
  return (
    <div className="w-full h-auto py-5 p-4 ">
      <div className="container mx-auto">
        <div className="flex items-center gap-5">
          <div className="relative">
            <img
              src="https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-1.png"
              className="rounded-xl"
            />
            <div className="absolute top-16 left-14">
              <h2 className="text-[23px] text-[#253D4E] font-semibold transition-transform transform hover:animate-bounce duration-500">
                Everyday Fresh & <br /> Clean with Our <br /> Products
              </h2>
              <button className="mt-6 bg-green-400 text-white py-1 px-2 rounded-md hover:bg-yellow-500 text-[15px] flex items-center gap-2">
                Shop Now <TiArrowRight className="text-[16px]" />
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-2.png"
              className="rounded-xl"
            />
            <div className="absolute top-16 left-14">
              <h2 className="text-[23px] text-[#253D4E] font-semibold transition-transform transform hover:animate-bounce duration-500">
                Make your Breakfast <br /> Healthy and Easy
              </h2>
              <button className="mt-14 bg-green-400 text-white py-1 px-2 rounded-md hover:bg-yellow-500  text-[15px] flex items-center gap-2">
                Shop Now <TiArrowRight className="text-[16px]" />
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-3.png"
              className="rounded-xl"
            />
            <div className="absolute top-16 left-14">
              <h2 className="text-[23px] text-[#253D4E] font-semibold transition-transform transform hover:animate-bounce duration-600">
                The best Organic <br /> Products Online
              </h2>
              <button className="mt-14 bg-green-400 text-white py-1 px-2 rounded-md hover:bg-yellow-500 text-[15px] flex items-center gap-2">
                Shop Now <TiArrowRight className="text-[16px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
