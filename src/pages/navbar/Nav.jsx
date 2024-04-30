import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoGridOutline } from "react-icons/io5";
import { MdOutlineHeadphones } from "react-icons/md";

import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="w-full h-[70px] m-auto border-t border-b flex items-center">
      <div className="container  mx-auto ">
        <div className="flex ml-4 items-center  mx-auto">
          <div className="w-full flex items-center sm:w-1/4 md:w-1/3 lg:w-[270px] px-2">
            <button
              type="button"
              className="text-white flex text-[17px]  w-[264px] pointer items-center bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300   font-medium rounded-lg  px-5 py-2 text-center me-2 mb-2"
            >
              <IoGridOutline />
              &nbsp; Browse All Categories&nbsp; <MdKeyboardArrowDown />
            </button>
          </div>

          <div className="w-full ml-6  sm:w-7/12 md:w-2/3 lg:w-10/12 px-2">
            <nav>
              <ul className="flex items-center mb-0">
                <li className="mr-2">
                  <button type="button" className="navLi">
                    <Link>Deals</Link>
                  </button>
                </li>
                <li className="mr-4">
                  <button type="button" className="navLi">
                    <Link>Home</Link>
                  </button>
                </li>
                <li className="mr-4">
                  <button type="button" className="navLi">
                    <Link>About</Link>
                  </button>
                </li>
                <li className="mr-4">
                  <button type="button" className="navLi">
                    <Link>Shop</Link>
                  </button>
                </li>
                <li className="mr-4">
                  <button type="button" className="navLi">
                    <Link>Venders</Link>
                  </button>
                </li>
                <li className="mr-4 flex items-center w-44">
                  <Link>
                    <button type="button" className="navLi ">
                      Mega menu <MdKeyboardArrowDown />
                    </button>
                  </Link>
                </li>
                <li className="mr-4">
                  <button type="button" className="navLi">
                    <Link>Blog</Link>
                  </button>
                </li>

                <li className="mr-4">
                  <Link>
                    <button type="button" className="navLi">
                      {" "}
                      Pages<MdKeyboardArrowDown />
                    </button>
                  </Link>
                </li>

                <li className="mr-4">
                  <button type="button" className="navLi">
                    <Link>Contact</Link>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="  w-[100%] px-2 flex items-center">
            <div className="flex w-full items-center">
              <span>
                <MdOutlineHeadphones className="text-[25px]"/>
              </span>
              <div className="ml-4 w-full ">
                <h3 className="text-cyan-600 text-[26px]">9800-999</h3>
                <p className="mb-0 text-sm">24/7 Support Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
