import React from "react";
import logo from "../assets/logo.jpg";
import { IoIosSearch } from "react-icons/io";
import SelectDropdown from "./dropdown/SelectDropdown";
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
            <div className="  w-full py-2 px-4 h-[48px] flex items-center border border-[#bce3c9] rounded-sm ">
              <SelectDropdown />

              <div className="w-[79%] pl-[30px] relative">
                <input
                  type="text"
                  className="w-full text-[16px] h-[38px] border-none outline-none"
                  placeholder="Search for items..."
                />
                <IoIosSearch className="pointer absolute top-2 right-0 opacity-[0.6] text-[23px]" />
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
