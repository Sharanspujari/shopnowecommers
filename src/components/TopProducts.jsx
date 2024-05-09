import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import capsicumImage from "../assets/capsicum-2.jpg";
const TopProducts = ({ title }) => {
  return (
    <div>
      <h3 className="topSellingHead ">{title}</h3>
      <div className="flex items-center mt-7 relative transform duration-300 ease-in-out hover:-translate-y-2">
        <div className="bg-[#d5d5d5] w-[30%]  rounded-xl">
          <Link>
            <img src={capsicumImage} className="w-full rounded-xl h-full" />
          </Link>
        </div>

        <div className="px-4 w-[70%]">
          <Link>
            <h4 className="font-medium text-[#253D4E] hover:text-green-400">
              Nestle Original Coffee-Mate Coffee Creamer
            </h4>
          </Link>
          <div className="flex items-center gap-2">
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
              size={"small"}
            />
            <span className="text-[#a2a2a2]">(4.5)</span>
          </div>
          <div className="flex items-center mt-3 ">
            <span className="text-green-500 text-[19px]">$28.8</span>
            <span className="ml-3 text-[#a2a2a2] text-[15px] mt-1.6 line-through">
              $32.8
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-7 relative transform duration-300 ease-in-out hover:-translate-y-2">
        <div className="bg-[#d5d5d5] w-[30%] rounded-xl">
          <Link>
            <img src={capsicumImage} className="w-full h-full rounded-xl" />
          </Link>
        </div>

        <div className="px-4 w-[70%]">
          <Link>
            <h4 className="font-medium text-[#253D4E] hover:text-green-400">
              Nestle Original Coffee-Mate Coffee Creamer
            </h4>
          </Link>
          <div className="flex items-center gap-2">
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
              size={"small"}
            />
            <span className="text-[#a2a2a2]">(4.5)</span>
          </div>
          <div className="flex items-center mt-3 ">
            <span className="text-green-500 text-[19px]">$28.8</span>
            <span className="ml-3 text-[#a2a2a2] text-[15px] mt-1.6 line-through">
              $32.8
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-7 relative transform duration-300 ease-in-out hover:-translate-y-2">
        <div className="bg-[#d5d5d5] w-[30%] rounded-xl ">
          <Link>
            <img src={capsicumImage} className="w-full h-full rounded-xl" />
          </Link>
        </div>

        <div className="px-4 w-[70%]">
          <Link>
            <h4 className="font-medium text-[#253D4E] hover:text-green-400">
              Nestle Original Coffee-Mate Coffee Creamer
            </h4>
          </Link>
          <div className="flex items-center gap-2">
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
              size={"small"}
            />
            <span className="text-[#a2a2a2]">(4.5)</span>
          </div>
          <div className="flex items-center mt-3 ">
            <span className="text-green-500 text-[19px]">$28.8</span>
            <span className="ml-3 text-[#a2a2a2] text-[15px] mt-1.6 line-through">
              $32.8
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
