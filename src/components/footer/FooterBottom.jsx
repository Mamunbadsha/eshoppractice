import React from "react";
import Container from "../Container";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import Select from "react-select/base";

const FooterBottom = () => {
  return (
    <Container>
      <div className="mt-[100px]  border-b border-solid border-[#30303040]  pb-20">
        <div className="flex">
          <div className="mr-[167px]">
            <img src="images/Logo.png" alt="logo" />
            <ul className="mt-[158px] flex flex-col gap-4">
              <li>
                {" "}
                <a href="tel:0246565545" className="flex items-center gap-2 hover:text-[#FF624C] duration-300">
                  {" "}
                  <FaPhone /> +1 (555) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="gmail:mamunbadsha@gmail.com"
                  className="flex items-center gap-2 hover:text-[#FF624C] duration-300"
                >
                  <BiLogoGmail />
                  information@eshop.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/bnnTNWxkG2Y9bMhQ7"
                  target="-blank"
                  className="flex items-center gap-2 hover:text-[#FF624C] duration-300 "

                >
                  <MdLocationOn />
                  123 Main Street, Anytown USA
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-between gap-[130px]">
            <div>
              <h4 className='font-["Popins"] font-semibold text-xl'>Links</h4>
              <ul className="mt-[24px] flex flex-col gap-3">
                <li className="hover:text-[#FF624C] duration-300">
                  Products List
                </li>
                <li className="hover:text-[#FF624C] duration-300">
                  Order Tracking
                </li>
                <li className="hover:text-[#FF624C] duration-300">
                  Products Guide
                </li>
                <li className="hover:text-[#FF624C] duration-300">
                  Shopping Cart
                </li>
                <li className="hover:text-[#FF624C] duration-300">Tech Blog</li>
              </ul>
            </div>
            <div>
              <h4 className='font-["Popins"] font-semibold text-xl'>
                Supports
              </h4>
              <ul className="mt-[24px] flex flex-col gap-3">
                <li className="hover:text-[#FF624C] duration-300">About Us</li>
                <li className="hover:text-[#FF624C] duration-300">
                  Privacy Policy
                </li>
                <li className="hover:text-[#FF624C] duration-300">
                  Return Policy
                </li>
                <li className="hover:text-[#FF624C] duration-300">
                  Help Centre
                </li>
                <li className="hover:text-[#FF624C] duration-300">
                  Store Locations
                </li>
                <li className="hover:text-[#FF624C] duration-300">Careers</li>
              </ul>
            </div>
            <div>
              <h4 className='font-["Popins"] font-semibold text-xl'>
                Categories
              </h4>
              <ul className="mt-[24px] flex flex-col gap-3">
                <li className="hover:text-[#FF624C] duration-300">
                  Computers & Tablets
                </li>
                <li className="hover:text-[#FF624C] duration-300">
                  Mobile Phones & Accessories
                </li>
                <li className="hover:text-[#FF624C] duration-300">
                  TV & Home Theater
                </li>
                <li className="hover:text-[#FF624C] duration-300">
                  Audio & Headphones
                </li>
                <li className="hover:text-[#FF624C] duration-300">
                  Cameras & Camcorders
                </li>
                <li className="hover:text-[#FF624C] duration-300">
                  Gaming Equipment
                </li>
                <li className="hover:text-[#FF624C] duration-300">
                  Home Appliances
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-["Popins"] font-semibold text-xl mb-[24px]'>
                Payments
              </h4>
              <img src="images/payment.png" alt="payment" />
              <h4 className=' mt-[73px]  font-["Popins"] font-semibold text-xl'>
                Follow Us
              </h4>
              <ul className="mt-[24px] flex flex-col gap-4">
                <li className="hover:text-[#FF624C]">Twitter</li>
                <li className="hover:text-[#FF624C]">Instagram</li>
                <li className="hover:text-[#FF624C]">Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 mb-20 text-base text-[#303030] font-['Montserrat'] font-normal">
        <p>Copyright © 2023 E-Shop. All Rights Reserved.</p>
        <div className="flex justify-end items-center gap-x-6">
          <p>Privacy Policy</p>
          <p className="relative before:content-[''] before:w-[1px]  before:h-[90%] before:bg-[#303030bf] before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 after:content-[''] after:w-[1px]  after:h-[90%] after:bg-[#303030bf] after:absolute after:-right-3 after:top-1/2 after:-translate-y-1/2 ">
            Terms & Condition
          </p>
          <p>Sitemap</p>
        </div>
      </div>
    </Container>
  );
};
export default FooterBottom;
