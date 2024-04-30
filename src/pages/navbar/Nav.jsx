import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoGridOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="w-full h-[70px] m-auto border-t border-b flex items-center">
      <div className="container mx-auto ">
        <div className="flex items-center mx-auto">
          <div className="w-full  sm:w-1/4 md:w-1/3 lg:w-[270px] px-2">
            <button
              type="button"
              className="text-white flex text-[18px]  w-[254px] pointer items-center bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300   font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              <IoGridOutline />
              &nbsp; Browse All Categories&nbsp; <MdKeyboardArrowDown />
            </button>
          </div>

          <div className="w-full  sm:w-7/12 md:w-2/3 lg:w-10/12 px-2">
            <nav>
              <ul className="flex mb-0">
                <li className="mr-4">
                  <button
                    type="button"
                    className="navLi"                  >
                    <Link>Deals</Link>
                  </button>
                </li>
                <li className="mr-4">
                  <button type="button" className="navLi">
                    <Link>Home</Link>
                  </button>
                </li>
                <li className="mr-4">
                  <button
                    type="button"
                    className="navLi"                  >
                    <Link>About</Link>
                  </button>
                </li>
                <li className="mr-4">
                  <button
                    type="button"
                    className="navLi"                  >
                    <Link>Shop</Link>
                  </button>
                </li>
                <li className="mr-4">
                  <button
                    type="button"
                    className="navLi"                  >
                    <Link>Venders</Link>
                  </button>
                </li>
                <li className="mr-4">
                  <button
                    type="button"
                    className="navLi"                  >
                    <Link>Mega menu</Link>
                  </button>
                </li>
                <li className="mr-4">
                  <button
                    type="button"
                    className="navLi"                  >
                    <Link>Blog</Link>
                  </button>
                </li>
                <li className="mr-4">
                  <button
                    type="button"
                    className="navLi"                  >
                    <Link>Pages</Link>
                  </button>
                </li>
                <li className="mr-4">
                  <button
                    type="button"
                    className="navLi"                  >
                    <Link>Contact</Link>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-full  sm:w-1/3 md:w-1/3  lg:w-1/6 px-2">ff</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
