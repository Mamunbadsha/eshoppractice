import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
const TopLeftBar = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div
          className="flex items-center gap-[50px]
            relative after:content-[''] after:absolute after:w-[1px]  
            after:h-[32px] after:bg-[#BFBFBF] after:left-[62%] after:top-[50%]
           after:-translate-y-1/2
            "
        >
          <a
            href="https://maps.app.goo.gl/bnnTNWxkG2Y9bMhQ7"
            target="-blank"
            className="flex items-center gp-2"
          >
            <IoLocationOutline />
            <span className="ml-[10px]"> 123 Main Street, Anytown USA</span>
          </a>
          <a href="tel:0246565545" className="flex items-center gp-2">
            <FiPhone className="mr-[8px]" />
            +1 (555) 123-4567
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopLeftBar;
