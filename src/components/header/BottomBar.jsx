import React, { useEffect, useRef, useState } from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

const BottomBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenOne, setIsDropdownOpenOne] = useState(false);

  const dropdownOneRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  });
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownOneRef.current &&
        !dropdownOneRef.current.contains(e.target)
      ) {
        setIsDropdownOpenOne(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  });

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleDropdownOne = () => {
    setIsDropdownOpenOne(!isDropdownOpen);
  };

  return (
    <div className="bg-[#FF624c]">
      <Container>
        <div className="flex justify-between items-center py-6">
          <div>
            <ul className="flex items-center gap-[80px] text-white fonnt-['Montserrat'] font-bold">
              <li className="relative" ref={dropdownOneRef}>
                <button
                  className="flex items-center gap-4"
                  onClick={handleDropdownOne}
                >
                  <FaBars />
                  All Categories
                </button>
                {isDropdownOpenOne && (
                  <div className="absolute z-10 mt-2 w-30 bg-amber-400 rounded shadow-lg ">
                    <ul className="py-2 font-['Monserrat'] font-normal text-base leading-10 text-black ">
                      <li className="px-2 hover:bg-green-400 duration-300 cursor-pointer ">
                        product one
                      </li>
                      <li className="px-2 hover:bg-green-400 duration-300 cursor-pointer ">
                        product two
                      </li>
                      <li className="px-2 hover:bg-green-400 duration-300 cursor-pointer ">
                        product three
                      </li>
                      <li className="px-2 hover:bg-green-400 duration-300 cursor-pointer ">
                        product four
                      </li>
                      <li className="px-2 hover:bg-green-400 duration-300 cursor-pointer ">
                        product four
                      </li>
                      <li className="px-2 hover:bg-green-400 duration-300 cursor-pointer ">
                        product four
                      </li>
                      <li className="px-2 hover:bg-green-400 duration-300 cursor-pointer ">
                        product four
                      </li>
                      <li className="px-2 hover:bg-green-400 duration-300 cursor-pointer ">
                        product four
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="relative" ref={dropdownRef}>
                <button onClick={handleDropdown}>Products</button>
                {isDropdownOpen && (
                  <div className="absolute z-10 mt-2 w-30 bg-amber-400 rounded shadow-lg ">
                    <ul className="py-2 font-['Monserrat'] font-normal text-base leading-10 text-black ">
                      <li className="px-2 hover:bg-amber-950 duration-300 cursor-pointer ">
                        product one
                      </li>
                      <li className="px-2 hover:bg-amber-950 duration-300 cursor-pointer ">
                        product two
                      </li>
                      <li className="px-2 hover:bg-amber-950 duration-300 cursor-pointer ">
                        product three
                      </li>
                      <li className="px-2 hover:bg-amber-950 duration-300 cursor-pointer ">
                        product four
                      </li>
                      <li className="px-2 hover:bg-amber-950 duration-300 cursor-pointer ">
                        product four
                      </li>
                      <li className="px-2 hover:bg-amber-950 duration-300 cursor-pointer ">
                        product four
                      </li>
                      <li className="px-2 hover:bg-amber-950 duration-300 cursor-pointer ">
                        product four
                      </li>
                      <li className="px-2 hover:bg-amber-950 duration-300 cursor-pointer ">
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
