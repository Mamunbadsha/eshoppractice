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
  correctprice,
  discounted,
  images,
  isstock,
  v2 = false,
}) => {
  let [ratingValue, setRatingValue] = React.useState(
    new Array(+rating).fill(rating)
  );

  return (
    <>
      {v2 || (
        <div className=" border border-transparent hover:border-[#c3c3c3] duration-300 p-6 group rounded-lg ">
          <div className="relative">
            {images ? (
              <img className="w-full" src="images/watch.png" alt="watch" />
            ) : (
              <img className="w-full" src="images/new.png" alt="watch" />
            )}
            {percentTag && (
              <div className="bg-[#FF624C] py-[7px] px-[24px] absolute top-[-8px] right-[-9px] rounded-md font-bold text-white">
                50%
              </div>
            )}
            <div className="flex absolute bottom-[6px] left-[46%] translate-x-[-50%] gap-5 scale-0 group-hover:scale-100 transition-all duration-700">
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
            {discounted ? (
              <div className="flex justify-between">
                <p className=" text-[24px] font-bold">${price}</p>
                <p className=" text-[24px] font-light text-[#b7aeae] line-through ">
                  {correctprice}
                </p>
              </div>
            ) : (
              <div>
                <p className=" text-[24px] font-bold">${price}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {v2 && (
        // version two 💕

        <div className=" border border-transparent hover:bg-[#EAEAEA] duration-300 p-10  group rounded-lg bg-white">
          <div className="relative">
            <img className="w-full" src="images/pl.png" alt="watch" />
            {percentTag && (
              <div className="bg-[#FF624C] h-[100px] w-[100px] absolute top-[0px] right-[0px] rounded-full font-bold text-white">
                <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  50%
                </p>
              </div>
            )}
          </div>
          <div>
            <p className="font-['Montserrat'] font-normal text-sm leading-5 uppercase tracking-[5px] mt-[46px] mb-4">
              {category}
            </p>
            <h3 className="font-['Poppins']  font-semibold text-[20px] leading-[30px] group-hover:text-[#FF624c]   decoration-300">
              {title}
            </h3>
            <div className="flex gap-2 items-center mt-1 mb-6">
              {ratingValue.map((item, index) => (
                <FaStar className="text-amber-400" key={index} />
              ))}
              <span>({totalrating})</span>
            </div>
            {discounted ? (
              <div className="flex justify-between">
                <p className=" text-[24px] font-bold">${price}</p>
                <p className=" text-[24px] font-light line-through text-[#b7aeae]">
                  {correctprice}
                </p>
              </div>
            ) : (
              <div>
                <p className=" text-[24px] font-extrabold">${price}</p>
              </div>
            )}
          </div>

          {isstock ? (
            <div className="w-[383px] h-[30px] bg-[#FAFAFA] rounded-[25px] mt-[32px] group ">
              <div className="w-[50%] h-[30px] bg-[#0e0d0d] rounded-[25px] relative group-hover:bg-[#FF624C] transition-all duration-300">
                <p className="justify-center items-center flex text-white absolute top-[0px] right-[0px]">
                  {" "}
                  50 AVAILABLE
                </p>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </>
  );
};

export default ProductLayout;
