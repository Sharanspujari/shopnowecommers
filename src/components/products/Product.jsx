import React from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TbArrowsShuffle } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";

const Product = ({ tag, title }) => {
  return (
    <div className="w-full h-auto border overflow-hidden relative rounded-xl p-[15px] hover:border-green-200 hover:shadow-md group">
      {tag !== null && tag !== undefined && (
        <span
          className={`${tag} absolute top-0 left-0  w-14 text-center z-50 text-[#fff] p-1 text-[14px] rounded-br-2xl`}
        >
          {title}
        </span>
      )}

      <div>
        <Link>
          <div className="w-full overflow-hidden relative">
            <img
              src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-4-2.jpg"
              className="w-50 h-50 transition-all duration-300 ease-in-out hover:scale-150"
            />
            {/* overley */}

            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-[25px]  opacity-0  group-hover:opacity-100 group-hover:transform group-hover:scale-75">
              <ul className="bg-[#fff] text-green-400 border border-green-200 rounded-md w-[125px] h-auto flex items-center justify-between ">
                <li>
                  <Tooltip
                    title="Add To Wishlist"
                    arrow="green"
                    placement="top"
                  >
                    <a className="block p-[10px] border-r border-green-200">
                      <FaRegHeart className="hover:text-yellow-500" />
                    </a>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Compare" arrow placement="top">
                    <a className="block p-[10px] border-r border-green-200">
                      <TbArrowsShuffle className="hover:text-yellow-500" />
                    </a>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Quick View" arrow placement="top">
                    <a className="block p-[10px] ">
                      <MdOutlineRemoveRedEye className="hover:text-yellow-500" />
                    </a>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </Link>
        <div>
          <span
            className="text-[#b3b3b3] text-[13px]
          "
          >
            Snack
          </span>
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

          <div className="flex items-center justify-between mt-4 mb-3">
            <div className="flex items-center justify-between ">
              <span className="text-green-500 text-[19px]">$28.8</span>
              <span className="ml-3 text-[#a2a2a2] text-[15px] mt-1.6 line-through">
                $32.8
              </span>
            </div>
            <button className="bg-green-100 text-green-600 px-4 py-1.5 mr-1 rounded flex items-center gap-1 hover:bg-green-600 hover:text-[#fff] hover:shadow-md transform transition-transform translate-y-1 duration-300 ease-in-out ">
              <IoCartOutline className="text-[19px]" /> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
