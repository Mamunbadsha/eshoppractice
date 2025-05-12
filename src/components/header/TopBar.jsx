import React from "react";
import Container from "../Container";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="border-b border-[#bfbfbf] border-solid">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <a href="https://maps.app.goo.gl/bnnTNWxkG2Y9bMhQ7" target="-blank" className="">
              <MdLocationOn />
              123 Main Street, Anytown USA
            </a>
            <a href="tel:0246565545">
              <FaPhone />
              +1 (555) 123-4567
            </a>
          </div>
          <div>Right</div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
