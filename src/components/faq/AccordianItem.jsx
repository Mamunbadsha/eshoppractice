import React from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const AccordianItem = ({ title, content, onToggle, isopen,  }) => {
  return (
    <div
      onClick={onToggle}
      className=" mb-[24px] w-full p-3 text-left bg-white py-[32px] px-[48px] pl-[112px] rounded-[25px] font-['Poppins'] font-semibold text-[24px] relative"
    >
      <button>
        <div
          className={`w-[32px] h-[32px] rounded-full ${
            isopen
              ? "bg-transparent border border-[#FF624C] !text-[#FF624C] rotate-[90deg] "
              : "bg-[#FF624C]"
          } text-[20px] flex justify-center items-center text-white mr-[16px] absolute top-[32px] left-[48px]`}
        >
          <FaAngleRight />
        </div>
        {title}
      </button>
      {isopen && (
        <div className="font-['Montserrat'] font-normal text-base text-[#000] mt-[24px]">
          Absolutely! Once your order has been shipped, we'll send you a
          tracking number and a link to our carrier's website where you can
          track your package in real-time. You can also check the status of your
          order by logging into your account and viewing your order history.
        </div>
      )}
     
    </div>
  );
};

export default AccordianItem;
