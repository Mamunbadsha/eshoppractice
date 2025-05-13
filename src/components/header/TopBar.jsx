import React from "react";
import Container from "../Container";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import TopLeftBar from "./topbarcomponents/TopLeftBar";
import TopRightBar from "./topbarcomponents/TopRightBar";

const TopBar = () => {
  return (
    <div className="border-b border-[#bfbfbf] border-solid py-[22px]">
      <Container>
        <div className="flex justify-between items-center  font-['Montserrat'] font-normal text-sm ">
          <TopLeftBar />
          <TopRightBar />
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
