import React from "react";
import { BsSend } from "react-icons/bs";
const NewsLetter = () => {

  return (
    <div className="absolute w-[444px] bottom-24 left-[7.1%] z-30 ">
      <BsSend className="absolute top-[24px] left-[20px] text-[17px] text-gray-500" />
      <input
        placeholder="Your email address"
        className="w-full h-full bg-[#fff] rounded-full py-[21px] outline-none pl-14 pr-[175px]"
      />
      <button className="bg-[#3bb77e] text-[#fff] py-[20px] px-11 rounded-full absolute top-0 right-0">
        Subscribe
      </button>
    </div>
  );
};

export default NewsLetter;
