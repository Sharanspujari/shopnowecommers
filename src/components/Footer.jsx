import React from "react";
import logo from "../assets/nest-Ecommers-logo.svg";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { ImHeadphones } from "react-icons/im";
import { BsSend } from "react-icons/bs";
import { GoStopwatch } from "react-icons/go";
import AppStore from "../assets/app-store.jpg";
import PlayStore from "../assets/google-play.jpg";
import PaymentIcon from "../assets/payment-method.png";
import { FiPhoneCall } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import newsLetterImage from "../assets/newsLetterImage-9.png";
import NewsLetter from "../components/newsLetter/NewsLetter";
import priceTagIcon from "../assets/priceicon-1.svg";
import deliveryIcon from "../assets/deliveryhandicon-2.svg";
import DealsIcon from "../assets/docicon-3.svg";
import WideAssortIcon from "../assets/assorticon-4.svg";
import EasyReturnIcon from "../assets/easyreturnicon-5.svg";

const Footer = () => {
  return (
    <footer className="w-full h-auto mt-2 mb-4">
      <section className="w-full h-auto py-6 px-4">
        <div className="container mx-auto">
          <div className="newsLetterBg w-full rounded-3xl h-auto flex pt-20 px-[70px] relative">
            <div className="w-[56%] ">
              <div className="ml-8 ">
                <h2 className="text-[38px] text-[#253D4E] leading-10 font-medium mb-4">
                  Stay home & get your daily <br /> needs from our shop
                </h2>

                <p className="text-[#a0a0a0] text-[18px] font-medium">
                  Start You'r Daily Shopping with{" "}
                  <span className="text-green-600">Nest Mart</span>
                </p>
              </div>
              <NewsLetter />
            </div>
            <div className="w-[44%]">
              <img src={newsLetterImage} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits cards section */}
      <section className="w-full h-auto py-6 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-5 gap-4">
            <div className="flex items-center justify-between bg-[#F4F6FA] py-4 px-6 justify-between  rounded-xl  group">
              <img
                src={priceTagIcon}
                className="w-[25%] relative transform duration-300 ease-in-out group-hover:-translate-y-2"
              />

              <div className="pl-6 w-[75%]">
                <h2 className="text-[18px] text-[#253D4E]">
                  Best prices & <br /> offers
                </h2>
                <p className="text-[#a4a4a4] text-[15px]  pt-2">
                  Orders $50 or more
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between bg-[#F4F6FA] py-3 px-6  rounded-xl group">
              <img
                src={deliveryIcon}
                className="w-[25%] relative transform duration-300 ease-in-out group-hover:-translate-y-2"
              />

              <div className="pl-6 w-[75%]">
                <h2 className="text-[18px] text-[#253D4E]">Free delivery</h2>
                <p className="text-[#a4a4a4] text-[15px]  pt-2">
                  24/7 amazing services
                </p>
              </div>
            </div>

            <div className="flex items-center bg-[#F4F6FA] py-5 px-6  rounded-xl group">
              <img
                src={DealsIcon}
                className="w-[25%] relative transform duration-300 ease-in-out group-hover:-translate-y-2"
              />

              <div className="pl-6  w-[75%]">
                <h2 className="text-[18px] text-[#253D4E]">Great daily deal</h2>
                <p className="text-[#a4a4a4] text-[15px]  pt-2">
                  When you sign up
                </p>
              </div>
            </div>

            <div className="flex items-center bg-[#F4F6FA] py-5 px-6 rounded-xl group">
              <img
                src={WideAssortIcon}
                className="w-[25%] relative transform duration-300 ease-in-out group-hover:-translate-y-2"
              />

              <div className="pl-6  w-[75%]">
                <h2 className="text-[18px] text-[#253D4E]">Wide assortment</h2>
                <p className="text-[#a4a4a4] text-[15px]  pt-2">
                  Mega Discounts
                </p>
              </div>
            </div>
            <div className="flex items-center bg-[#F4F6FA] py-5 px-6 rounded-xl group">
              <img
                src={EasyReturnIcon}
                className="w-[25%] relative transform duration-300 ease-in-out group-hover:-translate-y-2"
              />

              <div className="pl-6  w-[75%]">
                <h2 className="text-[18px] text-[#253D4E]">Easy returns</h2>
                <p className="text-[#a4a4a4] text-[15px]  pt-2">
                  Within 30 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div className="flex  justify-between mx-2">
          <div className="w-[20%] ">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <br />
            <p className="footerContactInfo">
              Awesome grocery store website template
            </p>
            <br />
            <p className="footerContactInfo  mb-2">
              <GrLocation className="inline-block text-green-500 mb-1 mr-2" />
              <strong>Address:</strong> 5171 W Campbell Ave <br /> undefined
              Kent, Utah 53127 United States
            </p>
            <span></span>
            <p className="footerContactInfo mb-2">
              <ImHeadphones className="inline-block text-green-500 mb-1 mr-2" />
              <strong>Call Us:</strong> (+91)- 540-025-124553
            </p>
            <p className="footerContactInfo  mb-2">
              <BsSend className="inline-block text-green-500 mb-2 mr-2" />
              <strong>Email:</strong> Email:sale@Nest.com
            </p>
            <p className="footerContactInfo  mb-2">
              <GoStopwatch className="inline-block text-green-500 mb-1 mr-2" />
              <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
            </p>
          </div>

          <div className="w-[62%] mr-3 ml-4">
            <div className="flex w-full items-center justify-between  mr-8 ">
              <div>
                <h3 className="mb-4 text-[23px] font-medium text-[#253D4E]">
                  Company
                </h3>
                <ul className="flex items-flex-start flex-col text-[#5a5a5a]">
                  <li className="foorterPageLinks">
                    <Link>About Us</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link> Delivery Information</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link>Privacy Policy</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link>Terms & Conditions</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link>Contact Us</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link>Support Center</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link>Careers</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-[23px] font-medium text-[#253D4E]">
                  Account
                </h3>

                <ul className="flex items-flex-start flex-col text-[#5a5a5a]">
                  <li className="foorterPageLinks">
                    <Link> Sign In</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link> View Cart</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link>My Wishlist</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link>Track My Order</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link>Help Ticket</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link>Shipping Details</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link>Compare products</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-[23px] font-medium text-[#253D4E]">
                  Corporate
                </h3>

                <ul className="flex items-flex-start flex-col text-[#5a5a5a]">
                  <li className="foorterPageLinks">
                    <Link> Become a Vendor</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link> Affiliate Program</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link>Farm Business</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link>Farm Careers</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link>Our Suppliers</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link>Accessibility</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link>Promotions</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-[23px] font-medium text-[#253D4E]">
                  Popular
                </h3>

                <ul className="flex items-flex-start flex-col text-[#5a5a5a]">
                  <li className="foorterPageLinks">
                    <Link> Milk & Flavoured Milk</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link> Butter and Margarine</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link>Eggs Substitutes</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link>Marmalades</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link>Sour Cream and Dips</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link>Tea & Kombucha</Link>
                  </li>
                  <li className="foorterPageLinks">
                    <Link>Cheese</Link>
                  </li>
                </ul>
              </div>{" "}
            </div>
          </div>

          <div className="w-[18%] ml-8">
            <h3 className="mb-6 text-[23px] font-medium text-[#253D4E]">
              Install App
            </h3>

            <p className="text-[#5a5a5a]">From App Store or Google Play</p>
            <div className="flex gap-3 my-6 ">
              <Link>
                <img src={AppStore} />
              </Link>
              <Link>
                <img src={PlayStore} />
              </Link>
            </div>

            <p className="text-[#5a5a5a]">Secured Payment Gateways</p>
            <div className="mt-6">
              <Link>
                <img src={PaymentIcon} />
              </Link>
            </div>
          </div>
        </div>
        <hr className="mt-6" />

        <div className=" flex items-center mt-5 mx-2">
          <div className="w-[30%]   ">
            <p className="text-[#7E7E7E]">
              © 2024, Nest - HTML Ecommerce Template <br /> All rights reserved
            </p>
          </div>

          <div className="flex items-center justify-center  w-[40%] ml-24">
            <div className="flex  items-center mr-12">
              <span>
                <FiPhoneCall className="text-[38px] text-gray-600" />
              </span>
              <div className="ml-2 ">
                <h3 className="text-green-600 text-[24px]">9800-999</h3>
                <p className="mb-0 text-[12px] text-gray-500">
                  Working 8:00 - 22:00
                </p>
              </div>
            </div>

            <div className="flex  items-center">
              <span>
                <FiPhoneCall className="text-[38px] text-gray-600" />
              </span>
              <div className="ml-2  ">
                <h3 className="text-green-600 text-[24px]">9800-999</h3>
                <p className="mb-0 text-[12px] text-gray-500">
                  24/7 Support Center
                </p>
              </div>
            </div>
          </div>

          <div className="w-[30%] flex flex-col items-end ml-24 ">
            <div className="flex items-center ">
              <h3>Follow Us</h3>
              <ul className="flex p-4 ">
                <Link>
                  <li className="socilaIconsWrapper">
                    <FaFacebookF />
                  </li>
                </Link>
                <Link>
                  <li className="socilaIconsWrapper">
                    <FaTwitter />
                  </li>
                </Link>
                <Link>
                  <li className="socilaIconsWrapper">
                    <FaInstagram />
                  </li>
                </Link>
                <Link>
                  <li className="socilaIconsWrapper">
                    <FaPinterestP />
                  </li>
                </Link>
                <Link>
                  <li className="socilaIconsWrapper">
                    <FaYoutube />
                  </li>
                </Link>
              </ul>
            </div>
            <p className="text-gray-500">
              Up to 15% discount on your first subscribe
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
