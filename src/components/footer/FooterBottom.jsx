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
                <a href="tel:0246565545" className="flex items-center gap-2">
                  {" "}
                  <FaPhone /> +1 (555) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="gmail:mamunbadsha@gmail.com"
                  className="flex items-center gap-2"
                >
                  <BiLogoGmail />
                  information@eshop.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/bnnTNWxkG2Y9bMhQ7"
                  target="-blank"
                  className="flex items-center gap-2"
                >
                  <MdLocationOn />
                  123 Main Street, Anytown USA
                </a>
              </li>
            </ul>
          </div>
          <div className="mr-[96px]">
            <h4 className='font-["Popins"] font-semibold text-xl'>Links</h4>
            <ul className="mt-[24px] flex flex-col gap-3">
              <li>Products List</li>
              <li>Order Tracking</li>
              <li>Products Guide</li>
              <li>Shopping Cart</li>
              <li>Tech Blog</li>
            </ul>
          </div>
          <div className="mr-[96px]">
            <h4 className='font-["Popins"] font-semibold text-xl'>Supports</h4>
            <ul className="mt-[24px] flex flex-col gap-3">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Return Policy</li>
              <li>Help Centre</li>
              <li>Store Locations</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="mr-[96px]">
            <h4 className='font-["Popins"] font-semibold text-xl'>
              Categories
            </h4>
            <ul className="mt-[24px] flex flex-col gap-3">
              <li>Computers & Tablets</li>
              <li>Mobile Phones & Accessories</li>
              <li>TV & Home Theater</li>
              <li>Audio & Headphones</li>
              <li>Cameras & Camcorders</li>
              <li>Gaming Equipment</li>
              <li>Home Appliances</li>
            </ul>
          </div>
          <div className="mr-[80px]">
            <h4 className='font-["Popins"] font-semibold text-xl mb-[24px]'>
              Payments
            </h4>
            <img src="images/payment.png" alt="payment" />
            <h4 className=' mt-[73px]  font-["Popins"] font-semibold text-xl'>
              Follow Us
            </h4>

            <ul className="mt-[24px] flex flex-col gap-3">
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
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

      
      <div>
        {function App() {
          const countriesWithFlag = [
            {
              name: "USA",
              flag: "https://flagcdn.com/us.svg",
              value: "us",
              language: "en",
            },
            {
              name: "USA",
              flag: "https://flagcdn.com/bd.svg",
              value: "bd",
              language: "bd",
            },
          ];

          const options = countriesWithFlag.map((country) => ({
            value: country.value,
            language: country.value,
            label: (
              <div className="flex items-center">
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="w-4 h-4 mr-2"
                />
                <span>{country.name}</span>
              </div>
            ),
          }));

         return(
          <>
          
         <Select 
         
         options={options}
         onChange={(selected)=> console.log('Selected:', selected.value)}
         className="w-[200px]"
         classNamesPrefix="select" 
         />
          
        <div>
          <h1>this is my countru language</h1>
        </div>


          </>
         )

        }}
      </div>
    </Container>
  );
};

export default FooterBottom;
