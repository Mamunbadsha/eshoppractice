import React, { useEffect, useRef, useState } from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

const BottomBar = () => {
  const [isDropdownOpenOne, setIsDropdownOpenOne] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownOneRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownOneRef.current &&
        !dropdownOneRef.current.contains(e.target)
      ) {
        setIsDropdownOpenOne(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (
  //       dropdownOneRef.current &&
  //       !dropdownOneRef.current.contains(e.target)
  //     ) {
  //       setIsDropdownOpenOne(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  // });

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleDropdownOne = () => {
    setIsDropdownOpenOne(!isDropdownOpenOne);
  };

  return (
    <div className="bg-[#FF624c]">
      <Container>
        <div className="flex justify-between items-center py-6">
          <div>
            <ul className="flex items-center gap-[80px] text-white fonnt-['Montserrat'] font-bold">
              <li className="relative" ref={dropdownOneRef}>
                <button
                  className="flex items-center gap-4 text-[16px] font-[700] font-['Montserrat']"
                  onClick={handleDropdownOne}
                >
                  <FaBars />
                  All Categories
                </button>
                {isDropdownOpenOne && (
                  <div className="absolute z-10 mt-2  bg-white rounded shadow-lg ">
                    <ul className="py-2 font-['Monserrat'] font-normal text-[20px] leading-10 text-black justify-center">
                      <li className="px-2 hover:bg-[#FF624C] duration-300 cursor-pointer ">
                        product one
                      </li>
                      <li className="px-2 hover:bg-[#FF624C] duration-300 cursor-pointer ">
                        product two
                      </li>
                      <li className="px-2 hover:bg-bg-[#FF624C] duration-300 cursor-pointer ">
                        product feature
                      </li>
                      <li className="px-2 hover:bg-[#FF624C] duration-300 cursor-pointer ">
                        product four
                      </li>
                      <li className="px-2 hover:bg-[#FF624C] duration-300 cursor-pointer ">
                        product four
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="relative" ref={dropdownRef}>
                <button onClick={handleDropdown}>Products</button>
                {isDropdownOpen && (
                  <div className="absolute z-10 mt-2 w-[150px]  bg-white rounded shadow-lg ">
                    <ul className=" font-['Monserrat'] font-normal text-[20px] leading-10 text-black justify-center">
                      <li className="px-2 hover:bg-[#FF624C] duration-300 cursor-pointer ">
                        <Link to={"/product-list"}>All products </Link>
                      </li>
                      <li className="px-2 hover:bg-[#FF624C] duration-300 cursor-pointer ">
                        product one
                      </li>
                      <li className="px-2 hover:bg-[#FF624C] duration-300 cursor-pointer ">
                        product two
                      </li>
                      <li className="px-2 hover:bg-bg-[#FF624C] duration-300 cursor-pointer ">
                        product feature
                      </li>
                      <li className="px-2 hover:bg-[#FF624C] duration-300 cursor-pointer ">
                        product four
                      </li>
                      <li className="px-2 hover:bg-[#FF624C] duration-300 cursor-pointer ">
                        product four
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/contract"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center gap-[80px] text-white fonnt-['Montserrat'] font-bold">
              <li>
                <Link className="flex items-center gap-x-4" to={"#"}>
                  LIMITED SALE 👋🏻
                </Link>
              </li>
              <li>
                <Link to={"#"}>Best Seller</Link>
              </li>

              <li>
                <Link to={"#"}>Best Seller</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BottomBar;
