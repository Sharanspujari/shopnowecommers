import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { RiArrowDropRightLine } from "react-icons/ri";
const ProductDetails = () => {
  return (
    <section className=" w-full h-auto ">
      <div className="container mx-auto border-b p-6">
        <ul className="flex items-center gap-3">
          <Link>
            <li className="flex items-center gap-1 text-[14px] text-green-500 hover:text-orange-300">
              <AiOutlineHome /> Home
            </li>
          </Link>
          <RiArrowDropRightLine className="text-gray-500"/>
          <Link>
            <li className="text-green-500 text-[14px] hover:text-orange-300">
              Vegetables & Tubers
            </li>
          </Link>
          <RiArrowDropRightLine className="text-gray-500"/>
          <Link>
            <li className="text-gray-500 text-[14px]">Seeds Of Change Organic</li>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default ProductDetails;
