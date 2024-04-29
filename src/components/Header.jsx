import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";
import { IoIosSearch } from "react-icons/io";
import SelectDropdown from "./dropdown/SelectDropdown";
import { categories } from "../utils/Data";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineArrowPath } from "react-icons/hi2";
import axios from "axios";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  const [countryList, setCountryList] = useState(null);

  // this function is used to get coutry list
  const fetchCountryList = async (URL) => {
    try {
      const response = await axios.get(URL);
      let countries = response?.data.map((country, i) => {
        return country.name.common;
      });
      setCountryList(countries);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchCountryList("https://restcountries.com/v3.1/all");
  }, []);

  return (
    <header className="w-full  h-auto m-auto py-[30px] mx-0">
      <div className="py-0 px-[45px] relative ">
        <div className="flex items-center ">
          <div className="w-1/6">
            <img src={logo} className="h-16 w-20" />
          </div>

          {/*header Search start here */}
          <div className="w-5/12   mr-12  ">
            <div className="relative  w-full py-2 px-4 h-[48px] flex items-center border border-[#bce3c9] rounded-sm ">
              <SelectDropdown
                dataList={categories}
                placeholder={"All Categories"}
                icon={false}
              />

              <div className="w-[74%] pl-[30px] relative">
                <span className="absolute top-1  left-2 w-[1px] h-[30px] bg-gray-300"></span>

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
          <div className="w-5/12 flex items-center">
            <div className="ml-auto flex  items-center">
              <div className="countryWrapper w-full py-2 px-4 h-[48px] flex items-center ">
                <SelectDropdown
                  dataList={countryList}
                  placeholder={"Your Location"}
                  icon={
                    <HiOutlineLocationMarker className="text-[black] mr-[6px] opacity-[0.7]" />
                  }
                />
              </div>

              <ul className="flex  items-center  p-4 w-full mb-0  pl-[30px] mr-[30px] ">
                <li className="flex inline-block items-center  mr-4 relative">
                  <span className="pointer menuText flex items-center">
                    <HiOutlineArrowPath className="mr-[10px]" />
                    <span className="w-[20px] h-[20~px] flex items-center justify-center rounded-full bg-cyan-600 text-[#fff] absolute -top-[10px] left-[7px]">
                      3
                    </span>
                    Compare
                  </span>
                </li>
                <li className="flex inline-block items-center  ml-[20px] relative">
                  <span className="pointer menuText flex items-center">
                    <IoHeartOutline className="mr-[10px]" />
                    <span className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-cyan-600 text-[#fff] absolute -top-[10px] left-[7px]">
                      3
                    </span>
                    Wishlist
                  </span>
                </li>
                <li className="flex inline-block items-center  ml-[20px] relative">
                  <span className="pointer menuText flex items-center">
                    <IoCartOutline className="mr-[10px]" />
                    <span className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-cyan-600 text-[#fff] absolute -top-[10px] left-[7px]">
                      3
                    </span>
                    Cart
                  </span>
                </li>
                <li className="flex inline-block items-center  ml-[20px] relative">
                  <span className="pointer menuText flex items-center">
                    <AiOutlineUser />
                    Account
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
