import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Rating } from "@mui/material";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
const ProductDetails = () => {
  return (
    <section className=" w-full h-auto ">
      {/* breadcrumb wrapper */}
      <div className="container mx-auto border-b p-6">
        <ul className="flex items-center gap-3">
          <Link>
            <li className="flex items-center gap-1 text-[14px] text-green-500 hover:text-orange-300">
              <AiOutlineHome /> Home
            </li>
          </Link>
          <RiArrowDropRightLine className="text-gray-500" />
          <Link>
            <li className="text-green-500 text-[14px] hover:text-orange-300">
              Vegetables & Tubers
            </li>
          </Link>
          <RiArrowDropRightLine className="text-gray-500" />
          <Link>
            <li className="text-gray-500 text-[14px]">
              Seeds Of Change Organic
            </li>
          </Link>
        </ul>
      </div>

      {/*product details start from here */}
      <div className="container mx-auto px-16  mt-8">
        <div className="flex">
          {/* left info */}
          <div className="flex  items-center gap-10 w-[75%] ">
            {/* left image */}
            <div className="w-[46%] border rounded-xl">
              <InnerImageZoom
                src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-16-2.jpg"
                zoomSrc="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-16-2.jpg"
              />
            </div>

            {/* right details */}
            <div className="w-[56%]">
              <h1 className="text-[42px] textColor leading-10">
                Seeds of Change Organic Quinoa, Brown
              </h1>
              <div className="flex items-center gap-2 mt-4">
                <Rating
                  name="half-rating-read"
                  defaultValue={4.5}
                  precision={0.5}
                  readOnly
                  size={"small"}
                />
                <span className="text-[#a2a2a2]">(32 reviews)</span>
              </div>
              {/* price wrapper */}
              <div className="flex items-center mt-6">
                <span className="text-green-500 text-[52px]">$38</span>
                <div className="flex flex-col items-center ml-4">
                  <span className="text-yellow-600">26% Off</span>
                  <span className="text-[24px] text-gray-400">$52</span>
                </div>
              </div>
              <p className="mt-6 text-left text-gray-500 text-[16px] ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam rem officia, corrupti reiciendis minima nisi modi,
                quasi, odio minus dolore impedit fuga eum eligendi.
              </p>
            </div>
          </div>
          {/* right sidebar */}
          <div className="[25%]"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
