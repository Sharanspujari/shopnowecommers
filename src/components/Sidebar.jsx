import React from "react";
import milkCateIcon from "../assets/milkcategory-1.svg";
import clotheCateIcon from "../assets/clothcategory-2.svg";
import petsFoodCateIcon from "../assets/petFoodcategory-3.svg";
import BakingCateICon from "../assets/bakingcategory-4.svg";
import FreshFruitCateIcon from "../assets/freshFruitcategory-5.svg";
import Slider from "@mui/material/Slider";
import { FiFilter } from "react-icons/fi";
import Checkbox from "@mui/material/Checkbox";
import OfferBannerImage from "../assets/banneroffer-11.png";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function valuetext(value) {
  return `${value}°C`;
}

const Sidebar = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className=" sticky top-20 ">
        <div className="card">
          <h3 className="topSellingHead ">Category</h3>
          <div className="mt-8 flex flex-col mb-4 gap-4">
            <div className="border flex items-center justify-around p-2 rounded-md  hover:shadow-md hover:border-green-300 group">
              <div className="flex items-center gap-3 w-[75%]">
                <img src={milkCateIcon} className="w-[30px] h-[30px]" />
                <h5 className="text-gray-600 pointer text-[15px] group-hover:text-green-400">
                  Milks & Dairies
                </h5>
              </div>
              <span className="bg-[#BCE3C9] rounded-full w-[26px] h-[26px] flex items-center text-[14px] justify-center text-[#253D4E]">
                42
              </span>
            </div>

            <div className="border flex items-center justify-around p-2 rounded-md   hover:border-green-300 hover:shadow-md group">
              <div className="flex items-center gap-3 w-[75%]">
                <img src={petsFoodCateIcon} className="w-[30px] h-[30px]" />
                <h5 className="text-gray-600 pointer  text-[15px] group-hover:text-green-400">
                  Clothing
                </h5>
              </div>
              <span className="bg-[#BCE3C9] rounded-full w-[26px] h-[26px] flex items-center text-[14px] justify-center text-[#253D4E]">
                42
              </span>
            </div>
            <div className="border flex items-center justify-around p-2 rounded-md  hover:border-green-300 hover:shadow-md group">
              <div className="flex items-center gap-3 w-[75%]">
                <img src={clotheCateIcon} className="w-[30px] h-[30px]" />
                <h5 className="text-gray-600 pointer  text-[15px] group-hover:text-green-400">
                  Pet Foods
                </h5>
              </div>
              <span className="bg-[#BCE3C9] rounded-full w-[26px] h-[26px] flex items-center text-[14px] justify-center text-[#253D4E]">
                42
              </span>
            </div>
            <div className="border flex items-center justify-around p-2  rounded-md  hover:border-green-300 hover:shadow-md group">
              <div className="flex items-center gap-3 w-[75%]">
                <img src={BakingCateICon} className="w-[30px] h-[30px]" />
                <h5 className="text-gray-600 pointer  text-[15px] group-hover:text-green-400">
                  Baking material
                </h5>
              </div>
              <span className="bg-[#BCE3C9] rounded-full w-[26px] h-[26px] flex items-center text-[14px] justify-center text-[#253D4E]">
                42
              </span>
            </div>
            <div className="border flex items-center justify-around p-2 rounded-md  hover:border-green-300 hover:shadow-md group">
              <div className="flex items-center gap-3 w-[75%]">
                <img src={FreshFruitCateIcon} className="w-[30px] h-[30px]" />
                <h5 className="text-gray-600 pointer  text-[15px] group-hover:text-green-400">
                  Fresh Fruit
                </h5>
              </div>
              <span className="bg-[#BCE3C9] rounded-full w-[26px] h-[26px] flex items-center text-[14px] justify-center text-[#253D4E]">
                42
              </span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="topSellingHead w-full mb-4">Filter By Price</h3>

          <Slider
            min={0}
            step={1}
            max={1000}
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            color="success"
          />

          <div className="flex pt-2 pb-2">
            <span className="text-[15px] text-gray-500">
              From:<strong className="text-green-600">${value[0]}</strong>
            </span>
            <span className="ml-auto text-[15px] text-gray-500">
              To:<strong className="text-green-600">${value[1]}</strong>
            </span>
          </div>

          <div>
            <h5 className="font-semibold text-[#253D4E] mt-2">Color</h5>
            <ul className="max-h-[330px] overflow-scroll">
              <li className="text-[15px] text-gray-500">
                <Checkbox {...label} color="success" />
                Red(56)
              </li>
              <li className="text-[15px] text-gray-500">
                <Checkbox {...label} color="success" />
                Green (78)
              </li>
              <li className="text-[15px] text-gray-500">
                <Checkbox {...label} color="success" />
                Blue (54)
              </li>

              <h5 className="mt-4 font-semibold text-[#253D4E]">
                Item Condition
              </h5>

              <li className="text-[15px] text-gray-500">
                <Checkbox {...label} color="success" />
                New (1506)
              </li>
              <li className="text-[15px] text-gray-500">
                <Checkbox {...label} color="success" />
                Refurbished (27)
              </li>
              <li className="text-[15px] text-gray-500">
                <Checkbox {...label} color="success" />
                Used (45)
              </li>
            </ul>
          </div>
          <button className=" bg-green-600 text-white py-2 px-8 rounded-md hover:bg-yellow-500 text-[15px] flex items-center gap-2">
            <FiFilter /> Filter
          </button>
        </div>

        <div className="relative">
          <img src={OfferBannerImage} className="rounded-xl" />
          <div className="absolute top-12 left-8">
            <span className="text-gray-400">Organic</span>
            <h3 className="text-[20px] font-bold text-[#253D4E]">
              Save 17% <br />
              on <strong className="text-green-500">Organic</strong> <br />{" "}
              Juice
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
