import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Product from "../components/products/Product";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoGridOutline } from "react-icons/io5";
import { TbSortAscending2 } from "react-icons/tb";
import { ClickAwayListener } from "@mui/material";
const ProductListing = () => {
  const [isShowOpen, setIsShowOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  return (
    <section className="w-full h-auto py-8 px-4">
      <div className="container mx-auto">
        {/* bread crumb holder */}
        <div className="breadCrumbBg w-full h-auto py-[45px] px-[85px] rounded-xl">
          <h1 className="text-[40px] textColor font-semibold">Snack</h1>
          <ul className="flex items-center gap-4 mt-2">
            <Link>
              <li className="flex items-center text-[green] gap-1 hover:text-orange-400">
                <AiOutlineHome /> Home
              </li>
            </Link>
            <RiArrowDropRightLine className="text-gray-500" />
            <li className="text-gray-500">Shop</li>
            <RiArrowDropRightLine className="text-gray-500" />
            <li className="text-gray-500">Snack</li>
          </ul>
        </div>

        {/* Sidebar and products lists */}
        <div className="mt-12">
          <div className="flex gap-5 justify-between">
            <div className="w-[18%]">
              <Sidebar />
            </div>

            <div className="w-[82%]">
              <div className="flex items-center ">
                <p className="text-gray-400">
                  We found <strong className="text-green-500">29</strong> items
                  for you!
                </p>
                <div className="ml-auto flex items-center">
                  <ClickAwayListener onClickAway={() => setIsShowOpen(false)}>
                    <div className="mr-6 relative">
                      <button
                        onClick={() => setIsShowOpen(!isShowOpen)}
                        className="border px-4 py-3 flex items-center gap-3 rounded-lg text-[13px] text-gray-500 hover:shadow-md"
                      >
                        <IoGridOutline className="text-[18px]" /> Show: 50
                        <MdKeyboardArrowDown className="ml-1 text-[17px]" />
                      </button>
                      {/* dropdown list */}

                      {isShowOpen && (
                        <ul className="absolute top-[46px]  right-0 w-[152px] h-auto bg-[#fff] shadow-md py-[5px] px-0 z-10">
                          <li className="accountDropLi">
                            <button className="accountDropdownBtn">50</button>
                          </li>
                          <li className=" accountDropLi">
                            <button className="accountDropdownBtn">100</button>
                          </li>

                          <li className="accountDropLi">
                            <button className="accountDropdownBtn">150</button>
                          </li>
                          <li className="accountDropLi">
                            <button className="accountDropdownBtn ">200</button>
                          </li>
                          <li className="accountDropLi">
                            <button className="accountDropdownBtn">All</button>
                          </li>
                        </ul>
                      )}
                    </div>
                  </ClickAwayListener>
                  <ClickAwayListener onClickAway={() => setIsSortOpen(false)}>
                    <div className="relative">
                      <button
                        onClick={() => setIsSortOpen(!isSortOpen)}
                        className="border px-4 py-3 flex items-center gap-3 rounded-lg text-[13px] text-gray-500 hover:shadow-md"
                      >
                        <TbSortAscending2 className="text-[20px]" /> Sort by:
                        Featured <MdKeyboardArrowDown className="ml-2" />
                      </button>
                      {isSortOpen && (
                        <ul className="absolute top-[46px] right-0 w-[206px] h-auto bg-[#fff] shadow-md py-[5px] px-0 z-20">
                          <li className="accountDropLi">
                            <button className="accountDropdownBtn">
                              Featured
                            </button>
                          </li>
                          <li className=" accountDropLi">
                            <button className="accountDropdownBtn">
                              Price: Low to High
                            </button>
                          </li>

                          <li className="accountDropLi">
                            <button className="accountDropdownBtn">
                              Price: High to Low
                            </button>
                          </li>
                          <li className="accountDropLi">
                            <button className="accountDropdownBtn ">
                              Release Date
                            </button>
                          </li>
                          <li className="accountDropLi">
                            <button className="accountDropdownBtn">
                              Avg. Rating
                            </button>
                          </li>
                        </ul>
                      )}
                    </div>
                  </ClickAwayListener>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-5 py-[30px] px-0 ">
                <div className="w-full">
                  <Product tag={"pinkBadge"} title="Hot" />
                </div>
                <div className="w-full">
                  <Product tag="greenBadge" title="New" />
                </div>
                <div className="w-full">
                  <Product tag="blueBadge" title="Sale" />
                </div>
                <div className="w-full">
                  <Product tag="orangeBadge" title="-14%" />
                </div>
                <div className="w-full">
                  <Product tag="greenBadge" title="New" />
                </div>
                <div className="w-full">
                  <Product tag="blueBadge" title="Sale" />
                </div>
                <div className="w-full">
                  <Product tag="greenBadge" title="New" />
                </div>
                <div className="w-full">
                  <Product tag="orangeBadge" title="-14%" />
                </div>
                <div className="w-full">
                  <Product />
                </div>
                <div className="w-full">
                  <Product tag={"pinkBadge"} title="Hot" />
                </div>
                <div className="w-full">
                  <Product tag="orangeBadge" title="-14%" />
                </div>
                <div className="w-full">
                  <Product />
                </div>
                <div className="w-full">
                  <Product tag={"pinkBadge"} title="Hot" />
                </div>
                <div className="w-full">
                  <Product tag="orangeBadge" title="-14%" />
                </div>
                <div className="w-full">
                  <Product />
                </div>
                <div className="w-full">
                  <Product tag="orangeBadge" title="-14%" />
                </div>
                <div className="w-full">
                  <Product />
                </div>
                <div className="w-full">
                  <Product tag={"pinkBadge"} title="Hot" />
                </div>
                <div className="w-full">
                  <Product tag="orangeBadge" title="-14%" />
                </div>
                <div className="w-full">
                  <Product />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
