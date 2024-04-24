import React from "react";
import logo from "../assets/logo.jpg";
const Header = () => {
  return (
    <header className="w-full  h-auto m-auto py-[30px] mx-0">
      <div className="py-0 px-[45px] ">
        <div className="flex">
          <div className="w-1/6">
            <img src={logo} className="h-16 w-20" />
          </div>

          {/*header Search start here */}
          <div className="w-5/12 flex items-center">
            <div className="  w-full py-2 px-4 h-[48px] flex items-center border border-cyan-500 ">
              <div className="pointer w-[20%] text-[16px] font-500 relative">
                All Categories
                <span className="absolute top-0  right-0 w-[1px] h-[30px] bg-gray-300"></span>
              </div>
              <div className="w-[80%] pl-[30px]">
                <input
                  type="text"
                  className="w-full text-[16px] h-[38px] border-none outline-none"
                />
              </div>
            </div>
          </div>
          {/* header search end here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
