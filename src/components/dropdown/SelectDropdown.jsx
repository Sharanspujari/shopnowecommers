import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ClickAwayListener } from "@mui/base";
const SelectDropdown = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(" All Categories");

  const openSelect = () => {
    setIsOpenSelect((prev) => setIsOpenSelect(!prev));
  };

  const closeSelect = (index, value) => {
    setSelectedIndex(index);
    setSelectedItem(value);
    setIsOpenSelect(false);
  };

  return (
    <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
      <div className="pointer w-[25%]  text-[16px] font-500 relative">
        <span onClick={openSelect} className="block py-[15px] px-0">
          {selectedItem}
          <MdKeyboardArrowDown className="absolute top-5 right-1 text-[19px]" />
        </span>
        {isOpenSelect && (
          <div className=" w-[300px]  h-auto absolute -left-4 top-[100%] bg-[#fff] z-99 shadow-lg  p-[15px]">
            <div>
              <input
                type="text"
                className=" w-full h-[40px] border border-[#bce3c9] outline-none py-0 px-[15px] rounded-sm"
             placeholder="Search here..."
             />
              <ul className="w-full m-0 mt-[10px] py-[10px] px-0 max-h-64 overflow-y-scroll">
                <li
                  className={`listItem ${
                    selectedIndex === 0 ? "bg-gray-200 font-bold" : ""
                  }`}
                  onClick={() => closeSelect(0, " All Categories")}
                >
                  All Categories
                </li>
                <li
                  className={`listItem ${
                    selectedIndex === 1 ? "bg-gray-200 font-bold" : ""
                  }`}
                  onClick={() => closeSelect(1, " Milks and Dairies")}
                >
                  Milks and Dairies
                </li>
                <li
                  className={`listItem ${
                    selectedIndex === 2 ? "bg-gray-200 font-bold" : ""
                  }`}
                  onClick={() => closeSelect(2, " Wines & Drinks")}
                >
                  Wines & Drinks
                </li>
                <li
                  className={`listItem ${
                    selectedIndex === 3 ? "bg-gray-200 font-bold" : ""
                  }`}
                  onClick={() => closeSelect(3, "Clothing & beauty")}
                >
                  Clothing & beauty
                </li>
                <li
                  className={`listItem ${
                    selectedIndex === 4 ? "bg-gray-200 font-bold" : ""
                  }`}
                  onClick={() => closeSelect(4, " Fresh Seafood")}
                >
                  Fresh Seafood
                </li>
                <li
                  className={`listItem ${
                    selectedIndex === 5 ? "bg-gray-200 font-bold" : ""
                  }`}
                  onClick={() => closeSelect(5, "Pet Foods & Toy")}
                >
                  Pet Foods & Toy
                </li>
                <li
                  className={`listItem ${
                    selectedIndex === 6 ? "bg-gray-200 font-bold" : ""
                  }`}
                  onClick={() => closeSelect(6, "Fast food")}
                >
                  Fast food
                </li>
                <li
                  className={`listItem ${
                    selectedIndex === 7 ? "bg-gray-200 font-bold" : ""
                  }`}
                  onClick={() => closeSelect(7, " Baking material")}
                >
                  Baking material
                </li>
                <li
                  className={`listItem ${
                    selectedIndex === 8 ? "bg-gray-200 font-bold" : ""
                  }`}
                  onClick={() => closeSelect(8, "Vegetables")}
                >
                  Vegetables
                </li>
                <li
                  className={`listItem ${
                    selectedIndex === 9 ? "bg-gray-200 font-bold" : ""
                  }`}
                  onClick={() => closeSelect(9, "Fresh Fruit")}
                >
                  Fresh Fruit
                </li>
                <li
                  className={`listItem ${
                    selectedIndex === 10 ? "bg-gray-200 font-bold" : ""
                  }`}
                  onClick={() => closeSelect(10, " Bread and Juice")}
                >
                  Bread and Juice
                </li>
                <li
                  className={`listItem ${
                    selectedIndex === 11 ? "bg-gray-200 font-bold" : ""
                  }`}
                  onClick={() => closeSelect(11, " Milks and Dairies")}
                >
                  Milks and Dairies
                </li>
                <li
                  className={`listItem ${
                    selectedIndex === 12
                      ? "bg-gray-200 font-bold font-bold"
                      : ""
                  }`}
                  onClick={() => closeSelect(12, " Wines & Drinks")}
                >
                  Wines & Drinks
                </li>
                <li
                  className={`listItem ${
                    selectedIndex === 13 ? "bg-gray-200 font-bold" : ""
                  }`}
                  onClick={() => closeSelect(13, " Clothing & beauty")}
                >
                  Clothing & beauty
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default SelectDropdown;
