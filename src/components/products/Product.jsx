import React from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
const Product = () => {
  return (
    <div className="w-full h-auto border overflow-hidden rounded-xl p-[15px]">
      <div className="">
        <img
          src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-4-2.jpg"
          className="w-50 h-50"
        />
        <div>
          <span className="text-[#b3b3b3] text-[13px]">Snack</span>
          <h4 className="text-[#253D4E] text-[16px] font-semibold hover:text-green-600 opacity-85 my-2 mx-0 leading-5">
            <Link>
              Seeds of Change Organic <br /> Quinoa, Brown, & Red Rice
            </Link>
          </h4>
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            readOnly
            size={"small"}
          />
          <span className="block text-[#a2a2a2] text-[14px] ">
            By <a className="text-green-500">NestFood</a>
          </span>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center justify-between ">
              <span className="text-green-500 text-[19px]">$28.8</span>
              <span className="ml-3 text-[#a2a2a2] text-[15px] mt-1.6 line-through">
                $32.8
              </span>
            </div>
            <button className="bg-green-100 text-green-600 px-4 py-1.5 mr-1 rounded flex items-center gap-1">
              <IoCartOutline className="text-[19px]"/> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
