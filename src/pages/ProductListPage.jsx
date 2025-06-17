import React, { useState } from "react";
import Container from "../components/Container";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import PlLayOut from "../components/PlLayOut";
import Price from "../components/Price";
import { IoIosCheckmark } from "react-icons/io";
import Pagination from "../components/Pagination";
import PaginationLayout from "../components/PaginationLayout";

const ProductListPage = () => {
  const catagories = [
    "Computers & Tablets",
    "Mobile & Accessories",
    "TV & Home Theater",
    "Audio & Headphones",
    "Cameras & Camcorders",
    "Gaming Equipment",
    "Home Appliances",
  ];
  const cata = [
    { title: "Mobile", count: 536 },
    { title: "sumsung", count: 247 },
    { title: "ASUS", count: 189 },
    { title: "Dell", count: 330 },
    { title: "Mobile", count: 57 },
    { title: "HP", count: 100 },
    { title: "Mobile", count: 56 },
  ];

  const [isopen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isopen);
  };
  const ontoggle = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <div className="flex">
        <div className="w-[20%] bg-[#f4f4f4] rounded-4xl ">
          <div className=" px-[48px] py-[48px]">
            <button onClick={toggle} className=" flex text-[30px] font-bold">
              Catagories
              <span className="ml-16 mt-3 text-[30px]">
                {isopen ? <FaAngleDown /> : <FaAngleUp />}
              </span>
            </button>
            {isopen && (
              <ul className="mt-[20px]">
                {catagories.map((item, index) => (
                  <li className="py-[12px] cursor-pointer flex gap-2 items-center group hover:font-bold duration-300 ">
                    <span className="w-[16px] h-[16px] border group-hover:bg-[#FF624C] flex items-center">
                      <IoIosCheckmark className="group-hover:text-[#ffff]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            <div className="w-[259px] ml-[-30px] mt-6 h-[1px] bg-gray-400"></div>
          </div>
          <div className="ml-10 mt-10">
            <button onClick={ontoggle} className=" flex text-[30px] font-bold">
              Brands
              <span className="ml-30 mt-2 text-[30px]">
                {open ? <FaAngleDown /> : <FaAngleUp />}
              </span>
            </button>
            {open && (
              <ul>
                {cata.map((item, index) => (
                  <li className="py-[12px] flex gap-2 items-center  cursor-pointer group hover:font-bold ">
                    <span className="w-[16px] h-[16px] border group-hover:bg-[#FF624C] flex items-center">
                      <IoIosCheckmark className="group-hover:text-[#ffff]" />
                    </span>
                    <div className="flex justify-between items-center w-full mr-6">
                      <span>{item.title}</span>
                      <span>({item.count})</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {open && (
              <div className="text-[20px] font-bold mt-6">
                More Brands
                <div className="w-[120px] h-[1px] bg-black"></div>
              </div>
            )}

            <div className="w-[259px] ml-[-30px] mt-10 h-[1px] bg-gray-400"></div>
          </div>
          <Price />
        </div>

        <div className="w-[80%] ">
          <Pagination />
        </div>
      </div>
    </Container>
  );
};

export default ProductListPage;
