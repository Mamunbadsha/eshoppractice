import React, { useState } from "react";
import Container from "./Container";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const ProductLayout = ({
  percentTag,
  category,
  title,
  rating,
  totalrating,
  price,
  bg,
}) => {
  let [ratingValue, setRatingValue] = React.useState(
    new Array(+rating).fill(rating)
  );

  return (
    <>
      {v2 || (
        <div className=" border border-transparent hover:border-[#c3c3c3] duration-300 p-6 group rounded-lg ">
          <div className="relative">
            <img className="w-full" src="images/watch.png" alt="watch" />
            {percentTag && (
              <div className="bg-[#FF624C] py-[7px] px-[24px] absolute top-[-8px] right-[-9px] rounded-md font-bold text-white">
                50%
              </div>
            )}
            <div className="flex absolute bottom-[6px] left-[46%] translate-x-[-50%] gap-5 scale-0 group-hover:scale-100 decoration-600">
              <div className="w-[50px] h-[50px] rounded-full bg-white border border-[#FF624C] flex items-center justify-center text-[25px] text-[#FF624C] hover:bg-[#FF624C] hover:text-white duration-300 cursor-pointer">
                <IoCartOutline />
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-white border border-[#FF624C] flex items-center justify-center text-[25px] text-[#FF624C] hover:bg-[#FF624C] hover:text-white duration-300 cursor-pointer">
                <IoCartOutline />
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-white border border-[#FF624C] flex items-center justify-center text-[25px] text-[#FF624C] hover:bg-[#FF624C] hover:text-white duration-300 cursor-pointer">
                <IoCartOutline />
              </div>
            </div>
          </div>
          <div>
            <p className="font-['Montserrat'] font-normal text-sm leading-5 uppercase tracking-[5px] mt-[46px] mb-4">
              {category}
            </p>
            <h3 className="font-['Poppins'] font-semibold text-[20px] leading-[30px] group-hover:text-[#FF624c]   decoration-300">
              {title}
            </h3>
            <div className="flex gap-2 items-center mt-1 mb-6">
              {ratingValue.map((item, index) => (
                <FaStar className="text-amber-400" key={index} />
              ))}
              <span>({totalrating})</span>
            </div>
            <p className=" text-[24px] font-extrabold">${price}</p>
          </div>
        </div>
      )}

      {v2 && (
        <div className=" border border-transparent hover:border-[#c3c3c3] duration-300 p-6 group rounded-lg ">
          <div className="relative">
            <img className="w-full" src="images/watch.png" alt="watch" />
            {percentTag && (
              <div className="bg-[#FF624C] py-[7px] px-[24px] absolute top-[-8px] right-[-9px] rounded-md font-bold text-white">
                50%
              </div>
            )}
            <div className="flex absolute bottom-[6px] left-[46%] translate-x-[-50%] gap-5 scale-0 group-hover:scale-100 decoration-600">
              <div className="w-[50px] h-[50px] rounded-full bg-white border border-[#FF624C] flex items-center justify-center text-[25px] text-[#FF624C] hover:bg-[#FF624C] hover:text-white duration-300 cursor-pointer">
                <IoCartOutline />
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-white border border-[#FF624C] flex items-center justify-center text-[25px] text-[#FF624C] hover:bg-[#FF624C] hover:text-white duration-300 cursor-pointer">
                <IoCartOutline />
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-white border border-[#FF624C] flex items-center justify-center text-[25px] text-[#FF624C] hover:bg-[#FF624C] hover:text-white duration-300 cursor-pointer">
                <IoCartOutline />
              </div>
            </div>
          </div>
          <div>
            <p className="font-['Montserrat'] font-normal text-sm leading-5 uppercase tracking-[5px] mt-[46px] mb-4">
              {category}
            </p>
            <h3 className="font-['Poppins'] font-semibold text-[20px] leading-[30px] group-hover:text-[#FF624c]   decoration-300">
              {title}
            </h3>
            <div className="flex gap-2 items-center mt-1 mb-6">
              {ratingValue.map((item, index) => (
                <FaStar className="text-amber-400" key={index} />
              ))}
              <span>({totalrating})</span>
            </div>
            <p className=" text-[24px] font-extrabold">${price}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductLayout;
