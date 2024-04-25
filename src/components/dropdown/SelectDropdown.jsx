import React, { useState } from "react";

const SelectDropdown = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(true);

  return (
    <div className="pointer w-[22%]  text-[16px] font-500 relative">
      <span
        onClick={() => setIsOpenSelect((prev) => !prev)}
        className="block py-[15px] px-0"
      >
        All Categories
      </span>
      <span className="absolute top-3  right-0 w-[1px] h-[30px] bg-gray-300"></span>
      {isOpenSelect && (
        <div className=" w-[300px]  h-auto absolute -left-4 top-[100%] bg-[#fff] z-99 shadow-lg  p-[15px]">
          <div>
            <input
              type="text"
              className=" w-full h-[40px] border border-[#bce3c9] outline-none py-0 px-[15px] rounded-sm"
            />
            <ul className="w-full m-0 mt-[10px] py-[10px] px-0 max-h-64 overflow-y-scroll">
              <li className="listItem" onClick={() => setIsOpenSelect(false)}>
                Milks and Dairies
              </li>
              <li className="listItem" onClick={() => setIsOpenSelect(false)}>
                Wines & Drinks
              </li>
              <li className="listItem" onClick={() => setIsOpenSelect(false)}>
                Clothing & beauty
              </li>
              <li className="listItem" onClick={() => setIsOpenSelect(false)}>
                Fresh Seafood
              </li>
              <li className="listItem" onClick={() => setIsOpenSelect(false)}>
                Pet Foods & Toy
              </li>
              <li className="listItem" onClick={() => setIsOpenSelect(false)}>
                Fast food
              </li>
              <li className="listItem" onClick={() => setIsOpenSelect(false)}>
                Baking material
              </li>
              <li className="listItem" onClick={() => setIsOpenSelect(false)}>
                Vegetables
              </li>
              <li className="listItem" onClick={() => setIsOpenSelect(false)}>
                Fresh Fruit
              </li>
              <li className="listItem" onClick={() => setIsOpenSelect(false)}>
                Bread and Juice
              </li>
              <li className="listItem" onClick={() => setIsOpenSelect(false)}>
                Milks and Dairies
              </li>
              <li className="listItem" onClick={() => setIsOpenSelect(false)}>
                Wines & Drinks
              </li>
              <li className="listItem" onClick={() => setIsOpenSelect(false)}>
                Clothing & beauty
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;
