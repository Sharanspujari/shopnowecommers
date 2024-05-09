import React, { useState, useEffect } from "react";
import logo from "../assets/nest-Ecommers-logo.svg"
import { IoIosSearch } from "react-icons/io";
import SelectDropdown from "./dropdown/SelectDropdown";
import { categories } from "../utils/Data";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineArrowPath } from "react-icons/hi2";
import axios from "axios";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { PiGearSix } from "react-icons/pi";
import { MdOutlineLogout } from "react-icons/md";
import { ClickAwayListener } from "@mui/material";
import Nav from "../pages/navbar/Nav";

const Header = () => {
  const [countryList, setCountryList] = useState(null);
  const [openAccountDrop, setOpenAccountDrop] = useState(false);
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
    <>
      <header className="w-full h-auto m-auto py-[30px] mx-0 ">
        <div className=" mx-[10px] relative ">
          <div className="flex items-center ">
            <div className="w-64">
              <img src={logo} />
            </div>

            {/*header Search start here */}
            <div className="w-[42%]  ">
              <div className="relative  py-2  h-[52px] flex items-center border-2 border-[#bce3c9] rounded-md">
                <SelectDropdown
                  dataList={categories}
                  placeholder={"All Categories"}
                  icon={false}
                />

                <div className="w-[80%] pl-[30px] relative">
                  <span className="absolute top-1  left-2 w-[1px] h-[30px] bg-gray-300"></span>

                  <input
                    type="text"
                    className="w-full text-[16px] h-[38px] border-none outline-none"
                    placeholder="Search for items..."
                  />
                  <IoIosSearch className="pointer absolute top-2 right-3 opacity-[0.6] text-[23px]" />
                </div>
              </div>
            </div>

            {/* header search end here */}
            <div className=" flex items-center">
              <div className="ml-auto flex  items-center">
                <div className="countryWrapper ml-4 h-[52px] flex items-center ">
                  <SelectDropdown
                    dataList={countryList}
                    placeholder={"Your Location"}
                    icon={
                      <HiOutlineLocationMarker className="text-[black] mr-[6px] opacity-[0.7]" />
                    }
                  />
                </div>
                <ClickAwayListener
                  onClickAway={() => setOpenAccountDrop(false)}
                >
                  <ul className="flex  items-center  p-4 w-full mb-0  pl-[30px]">
                    <li className="flex inline-block items-center  mr-2 relative">
                      <span className="pointer menuText flex items-center">
                        <HiOutlineArrowPath className="mr-[10px]" />
                        <span className="w-[20px] h-[20px] flex items-center justify-center rounded-full bg-green-600 text-[#fff] absolute -top-[10px] left-[7px]">
                          3
                        </span>
                        Compare
                      </span>
                    </li>
                    <li className="flex inline-block items-center  ml-[20px] relative">
                      <span className="pointer menuText flex items-center">
                        <IoHeartOutline className="mr-[10px]" />
                        <span className="w-[20px] h-[20px] flex items-center justify-center rounded-full bg-green-600 text-[#fff] absolute -top-[10px] left-[7px]">
                          3
                        </span>
                        Wishlist
                      </span>
                    </li>
                    <li className="flex inline-block items-center  ml-[20px] relative">
                      <span className="pointer menuText flex items-center">
                        <IoCartOutline className="mr-[10px]" />
                        <span className="w-[20px] h-[20px] flex items-center justify-center rounded-full bg-green-600 text-[#fff] absolute -top-[10px] left-[7px]">
                          3
                        </span>
                        Cart
                      </span>
                    </li>
                    <li className="flex inline-block items-center  ml-[20px] relative">
                      <span
                        onClick={() => setOpenAccountDrop((prev) => !prev)}
                        className="pointer menuText flex items-center"
                      >
                        <AiOutlineUser />
                        Account
                      </span>

                      {openAccountDrop && (
                        <ul className="absolute top-[30px] border right-0 w-[200px] h-auto bg-[#fff] shadow-md py-[5px] px-0 z-50">
                          <li className="accountDropLi">
                            <button className="accountDropdownBtn">
                              {" "}
                              <AiOutlineUser className="mr-2" />
                              My Account
                            </button>
                          </li>
                          <li className=" accountDropLi">
                            <button className="accountDropdownBtn">
                              <HiOutlineLocationMarker className="mr-2" /> Order
                              Tracking
                            </button>
                          </li>

                          <li className="accountDropLi">
                            <button className="accountDropdownBtn">
                              <IoHeartOutline className="mr-2" />
                              My Wishlist
                            </button>
                          </li>
                          <li className="accountDropLi">
                            <button className="accountDropdownBtn ">
                              <PiGearSix className="mr-2" />
                              Setting
                            </button>
                          </li>
                          <li className="accountDropLi">
                            <button className="accountDropdownBtn">
                              <MdOutlineLogout className="mr-2" />
                              Sign out
                            </button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </ClickAwayListener>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Nav />
    </>
  );
};

export default Header;
