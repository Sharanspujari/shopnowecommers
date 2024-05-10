import React from "react";
import priceTagIcon from "../assets/priceicon-1.svg";
import deliveryIcon from "../assets/deliveryhandicon-2.svg";
import DealsIcon from "../assets/docicon-3.svg";
import WideAssortIcon from "../assets/assorticon-4.svg";
import EasyReturnIcon from "../assets/easyreturnicon-5.svg";
const Footer = () => {
  return (
    <div className="w-full h-auto py-6 px-4">
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
            <img src={DealsIcon} className="w-[25%] relative transform duration-300 ease-in-out group-hover:-translate-y-2"/>

            <div className="pl-6  w-[75%]">
              <h2 className="text-[18px] text-[#253D4E]">Great daily deal</h2>
              <p className="text-[#a4a4a4] text-[15px]  pt-2">
                When you sign up
              </p>
            </div>
          </div>

          <div className="flex items-center bg-[#F4F6FA] py-5 px-6 rounded-xl group">
            <img src={WideAssortIcon} className="w-[25%] relative transform duration-300 ease-in-out group-hover:-translate-y-2" />

            <div className="pl-6  w-[75%]">
              <h2 className="text-[18px] text-[#253D4E]">Wide assortment</h2>
              <p className="text-[#a4a4a4] text-[15px]  pt-2">Mega Discounts</p>
            </div>
          </div>
          <div className="flex items-center bg-[#F4F6FA] py-5 px-6 rounded-xl group">
            <img src={EasyReturnIcon} className="w-[25%] relative transform duration-300 ease-in-out group-hover:-translate-y-2" />

            <div className="pl-6  w-[75%]">
              <h2 className="text-[18px] text-[#253D4E]">Easy returns</h2>
              <p className="text-[#a4a4a4] text-[15px]  pt-2">Within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
