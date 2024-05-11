import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const ProductListing = () => {
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
            <div className="w-[82%]">lists</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
