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
const Footer = () => {
  return (
    <footer className="w-full h-auto mt-6 mb-4 px-2">
      <div className="container mx-auto">
        <div className="flex  justify-between ">
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

        <div className=" flex items-center mt-5 ">
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
              <div className="flex p-4 ">
                <div className="socilaIconsWrapper">
                  <FaFacebookF />
                </div>
                <div className="socilaIconsWrapper">
                  <FaTwitter />
                </div>
                <div className="socilaIconsWrapper">
                  <FaInstagram />
                </div>
                <div className="socilaIconsWrapper">
                  <FaPinterestP />
                </div>
                <div className="socilaIconsWrapper">
                  <FaYoutube />
                </div>
              </div>
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
