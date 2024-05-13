import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ClickAwayListener } from "@mui/base";

const SelectDropdown = ({ dataList, placeholder, icon }) => {
  console.log("dataList: ", dataList);
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(placeholder);
  const [data, setData] = useState(dataList);
  console.log("data: ", data);
  const [data2, setData2] = useState(dataList);
  console.log("data2: ", data2);

  const openSelect = () => {
    setIsOpenSelect(() => setIsOpenSelect(!isOpenSelect));
  };

  const closeSelect = (index, value) => {
    setSelectedIndex(index);
    setSelectedItem(value);
    setIsOpenSelect(false);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    console.log("value: ", value);
    const isFiltered = data2.filter((sdata, i) => {
      return sdata.toLowerCase().includes(value.toLowerCase());
    });
    setData(isFiltered);
  };

  return (
    <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
      <div className=" dropSelect pointer w-[30%] text-[16px]  z-50  font-500 relative">
        {icon}
        <span
          onClick={openSelect}
          className={`openSelect block py-[15px] px-4 text-[15px] ${
            icon && "text-[#279a65]"
          }`}
        >
          {selectedItem.length > 14
            ? selectedItem.substr(0, 14) + "..."
            : selectedItem}
          <MdKeyboardArrowDown className="downarrow absolute top-5 right-1 text-[17px] text-gray-500" />
        </span>

        {isOpenSelect && (
          <div className="menu w-[260px]  h-auto absolute -left-4 top-[100%] bg-[#fff] z-99 shadow-lg  p-[15px]">
            <div>
              <input
                type="text"
                onChange={handleSearch}
                className=" w-full h-[40px] border border-[#bce3c9] outline-none py-0 px-[15px] mr-3 rounded-sm"
                placeholder="Search here..."
              />

              <ul className="w-full m-0 mt-[10px] py-[10px] px-0 max-h-64 overflow-y-scroll">
                <li
                  key={0}
                  className={`listItem rounded-md ${
                    selectedIndex === 0 ? "bg-gray-200 font-bold" : ""
                  }`}
                  onClick={() => closeSelect(0, placeholder)}
                >
                  {placeholder}
                </li>
                {data?.map((item, i) => {
                  return (
                    <li
                      key={i + 1}
                      className={`listItem rounded-md${
                        selectedIndex === i + 1 ? "bg-gray-200 font-bold " : ""
                      }`}
                      onClick={() => closeSelect(i + 1, item)}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default SelectDropdown;
