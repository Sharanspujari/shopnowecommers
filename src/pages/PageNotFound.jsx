import React from "react";
import NotFoundImg from "../assets/page-404.png";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <>
      <section className="w-full h-auto px-4 ">
        <div className="container mx-auto">
          <div className="w-[50%]  h-auto py-32 px-32 m-auto">
            <img src={NotFoundImg} className="w-[60%] m-auto h-24" />

            <h1 className="text-[#253D4E] text-[60px] mt-3">Page Not Found</h1>
            <p className="mt-3 text-[#989898] text- ">
              The link you clicked may be broken or the page may have been
              removed. visit the
              <Link to={"/"}>
                <span className="text-green-500 "> Homepage </span>
              </Link>
              or
              <Link to={"/"}>
                <span className="text-green-500 "> Contact Us </span>
              </Link>
              us about the problem
            </p>
            <div className="mt-3">
              <Link to="/">
                <button className="py-2 px-4 bg-green-500 mt-4 m-auto text-[#fff] flex items-center gap-2 rounded hover:bg-yellow-400 relative transform hover:-translate-y-2 duration-300 ease-in-out">
                  <AiOutlineHome />
                  Back To Home Page
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
