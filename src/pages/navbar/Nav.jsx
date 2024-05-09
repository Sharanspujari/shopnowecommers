import React, { useEffect, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoGridOutline } from "react-icons/io5";
import { ImHeadphones } from "react-icons/im";
import { Link } from "react-router-dom";

const Nav = () => {
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let position = window.pageYOffset;
      console.log("position: ", position);
      if (position > 100) {
        headerRef.current.classList.add("headerFixed");
      } else {
        headerRef.current.classList.remove("headerFixed");
      }
    });
  },[]);
  return (
    <div ref={headerRef} className="headerFixed w-full h-[70px] m-auto border-t border-b flex items-center  bg-[#fff] z-50 shadow-md">
      <div className="container  mx-auto ">
        <div className="flex relative  ml-4 items-center justify-between  mx-auto">
          <div className="flex items-center justify-center ">
            <button
              type="button"
              className="text-white flex text-[15px]  pointer items-center bg-gradient-to-r from-green-500 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-500   font-medium rounded-lg  px-5 py-3 text-center"
            >
              <IoGridOutline />
              &nbsp; Browse All Categories&nbsp; <MdKeyboardArrowDown />
            </button>
          </div>

          <div className="w-auto ml-0 mr-36 static ">
            <nav>
              <ul className="flex items-center mb-0">
                <li>
                  <button type="button" className="navLi">
                    <Link>Deals</Link>
                  </button>
                </li>
                <li className="ml-1 ">
                  <button type="button" className="navLi">
                    <Link>Home</Link>
                  </button>
                </li>
                <li className="ml-1">
                  <button type="button" className="navLi">
                    <Link>About</Link>
                  </button>
                </li>
                <li className="ml-1">
                  <button type="button" className="navLi">
                    <Link>Shop</Link>
                  </button>
                </li>
                <li className="ml-1">
                  <button type="button" className="navLi">
                    <Link>Venders</Link>
                  </button>
                </li>
                <li className="flex ml-1 static group">
                  <Link>
                    <button type="button" className="navLi ">
                      Mega menu <MdKeyboardArrowDown className="ml-2" />
                    </button>
                  </Link>

                  {/* ṃegamenu dropdown start here */}
                  <div className="absolute hidden  group-hover:block  px-[25px] py-[30px] top-[100%] left-0 w-full h-auto bg-[#fff] border shadow-md   z-50  transition-all duration-300 ease-in-out ">
                    <div className="flex justify-between ">
                      <div>
                        <h4 className="text-green-500 font-extrabold text-xl hover:text-yellow-500 cursor-pointer">
                          Fruit & Vegetables
                        </h4>
                        <ul className="mt-5">
                          <li className="text-[16px] text-gray-500 hover:text-green-500 mb-3">
                            <Link to="">Meat & Poultry</Link>
                          </li>
                          <li className="text-[16px] text-gray-500 hover:text-green-500 mb-3">
                            <Link to=""> Fresh Vegetables</Link>
                          </li>
                          <li className="text-[16px] text-gray-500 hover:text-green-500 mb-3">
                            <Link to="">Herbs & Seasoning</Link>
                          </li>
                          <li className="text-[16px] text-gray-500 hover:text-green-500 mb-3">
                            <Link to="">Cuts & Sprouts </Link>
                          </li>
                          <li className="text-[16px] text-gray-500 hover:text-green-500 mb-3 ">
                            <Link to="">Exotic Fruits & Veggies</Link>
                          </li>
                          <li className="text-[16px] text-gray-500 hover:text-green-500 mb-3">
                            <Link to="">Packaged Produce</Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-green-500 font-extrabold text-xl hover:text-yellow-500 cursor-pointer">
                          Breakfast & Dairy
                        </h4>
                        <ul className="mt-5">
                          <li className="text-[16px] text-gray-500 hover:text-green-500 mb-3">
                            <Link to="">Milk & Flavoured Milk</Link>
                          </li>
                          <li className="text-[16px] text-gray-500 hover:text-green-500 mb-3">
                            <Link to="">Butter and Margarine</Link>
                          </li>
                          <li className="text-[16px] text-gray-500 hover:text-green-500 mb-3">
                            <Link to="">Eggs Substitutes</Link>
                          </li>
                          <li className="text-[16px] text-gray-500 hover:text-green-500 mb-3">
                            <Link to="">Marmalades</Link>
                          </li>
                          <li className="text-[16px] text-gray-500 hover:text-green-500 mb-3 ">
                            <Link to="">Sour Cream</Link>
                          </li>
                          <li className="text-[16px] text-gray-500 hover:text-green-500 mb-3">
                            <Link to="">Cheese</Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-green-500 font-extrabold text-xl hover:text-yellow-500 cursor-pointer">
                          Meat & Seafood
                        </h4>

                        <ul className="mt-5 ">
                          <li className="text-[16px] text-gray-500 hover:text-green-500 mb-3">
                            <Link to=""> Breakfast Sausage</Link>
                          </li>
                          <li className="text-[16px] text-gray-500 hover:text-green-500 mb-3">
                            <Link to=""> Dinner Sausage</Link>
                          </li>
                          <li className="text-[16px] text-gray-500 hover:text-green-500 mb-3">
                            <Link to="">Chicken </Link>
                          </li>
                          <li className="text-[16px] text-gray-500 hover:text-green-500 mb-3">
                            <Link to="">Sliced Deli Meat </Link>
                          </li>
                          <li className="text-[16px] text-gray-500 hover:text-green-500 mb-3 ">
                            <Link to="">Wild Caught Fillets</Link>
                          </li>
                          <li className="text-[16px] text-gray-500 hover:text-green-500 mb-3">
                            <Link to="">Crab and Shellfish</Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <img
                          src="https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-menu.png"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  {/* megamenu dropdown end here */}
                </li>
                <li className="ml-1">
                  <button type="button" className="navLi">
                    <Link>Blog</Link>
                  </button>
                </li>

                <li className="ml-1 z-20 relative group">
                  <Link>
                    <button type="button" className="navLi">
                      {" "}
                      Pages
                      <MdKeyboardArrowDown className="ml-2" />
                    </button>
                  </Link>
                  {/* submenu of pages */}
                  <div className="absolute hidden font-bold group-hover:block  top-[100%] left-0 w-[200px] h-auto bg-[#fff] border shadow-md py-[10px] px-0 z-50  transition-all duration-300 ease-in-out ">
                    <ul>
                      <li className="accountDropLi">
                        <button className="accountDropdownBtn">
                          <Link to="/about">About Us</Link>
                        </button>
                      </li>
                      <li className="accountDropLi">
                        <button className="accountDropdownBtn">
                          <Link to="/contact">Contact Us</Link>
                        </button>
                      </li>
                      <li className="accountDropLi">
                        <button className="accountDropdownBtn">
                          <Link to="/myaccount">My Account</Link>
                        </button>
                      </li>
                      <li className="accountDropLi">
                        <button className="accountDropdownBtn">
                          <Link to="/login">Login</Link>
                        </button>
                      </li>
                      <li className="accountDropLi">
                        <button className="accountDropdownBtn">
                          <Link to="/register">Register</Link>
                        </button>
                      </li>
                      <li className="accountDropLi">
                        <button className="accountDropdownBtn">
                          <Link to="/forgotpassword">Forgot password</Link>
                        </button>
                      </li>
                      <li className="accountDropLi">
                        <button className="accountDropdownBtn">
                          <Link to="/resetpassword">Reset Password</Link>
                        </button>
                      </li>
                      <li className="accountDropLi">
                        <button className="accountDropdownBtn">
                          <Link to="/purchaseguide">Purchase Guide</Link>
                        </button>
                      </li>
                      <li className="accountDropLi">
                        <button className="accountDropdownBtn">
                          <Link to="/privacypolicy">Privacy Policy</Link>
                        </button>
                      </li>
                      <li className="accountDropLi">
                        <button className="accountDropdownBtn">
                          <Link to="/termsofservice">terms of Services</Link>
                        </button>
                      </li>
                      <li className="accountDropLi">
                        <button className="accountDropdownBtn">
                          <Link to="/about">404 page</Link>
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="mr-2 p-2">
                  <button type="button" className="navLi">
                    <Link>Contact</Link>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="px-2 flex items-center ">
            <div className="flex w-full items-center">
              <span>
                <ImHeadphones className="text-[38px] text-gray-600" />
              </span>
              <div className="ml-2 w-full ">
                <h3 className="text-green-600 text-[24px]">9800-999</h3>
                <p className="mb-0 text-[12px] text-gray-500">
                  24/7 Support Center
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
