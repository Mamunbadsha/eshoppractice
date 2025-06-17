import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import CartIcon from "../../icons/CartIcon";
import ManIcon from "../../icons/ManIcon";
import Container from "../Container";
import { Link } from "react-router-dom";

const MiddleBar = () => {
  return (
    <Container>
      <div className="flex justify-between items-center py-[32px]">
        <div>
         <Link to={"/"}>
          <img src="images/Logo.png" alt="logo" />
         </Link>
        </div>
        <div className="flex  items-center">
          <div className="relative mr-[40px]">
            <input
              type="text"
              placeholder="Search Products ..."
              className="w-[332px] border border-gray-400 py-[18px] px-6 rounded-lg mr-[0px] "
            />
            <IoSearchSharp className="text-3xl absolute top-1/2 -translate-y-1/2 right-[20px]" />
          </div>
          <div className="relative pl-[50px] mr-[90px]">
            <div className="absolute top-[5px] left-0 ">
              <CartIcon />
            </div>
            <p className="font-['Montserrat'] font-normal text-base leading-6 text-[#303030]">
              Cart
            </p>
            <span className="font-['Montserrat'] font-bold text-sm leading-5">
              $15000
            </span>
          </div>
          <div>
            <div
              className="relative pl-[50px] 
              after:content-[''] after:absolute after:w-[1px] 
              after:h-[32px] after:bg-[#BFBFBF]  after:left-[-45px]   after:top-[50%] after:-translate-y-1/2 "
            >
              <div className="absolute top-[5px] left-0 ">
                <ManIcon />
              </div>
              <p className="font-['Monstrerrat'] font-normal text-base leading-5">
                User
              </p>
              <span className="font-['Monstrerrat'] font-bold text-sm leading-5">
                Account
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MiddleBar;
