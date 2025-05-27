import React from "react";
import ProductLayout from "./ProductLayout";
import Container from "./Container";
import { MdOutlineWatchLater } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";

const TechTalk = () => {
  return (
    <Container>
      <div className="py-[100px]">
        <div className="flex justify-between">
          <div>
            <h2 className="font-semibold font-['Poopins'] text-[36px] mb-[24px]">
              Tech Talk
            </h2>
            <p className="font-['Montserrat'] text-[20px] mb-[48px]">
              Stay up to date with the latest trends, reviews, and insights from
              our experts.
            </p>
          </div>
          <div className="flex items-center justify-center text-[#FF624C] gap-2">
            <p>View All</p>
            <HiArrowLongRight />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className=" py-[52px] px-[52px] rounded-[10px]  hover:border border-[#b9b3b3]  duration-300">
            <img className="w-[]" src="images/watch.png" alt="watch" />
            <p className="w-[] text-[24px] leading-[30px] font-semibold font-['Poopins']">
              Our Category Choices for Top 10 Tech Gadgets in 2023
            </p>
            <div className="flex justify-between items-center">
              <div>
                <button className="py-[7px] px-[20px] bg-[#FF624C] text-white rounded-[10px] mt-[32px]">
                  Review
                </button>
              </div>
              <div className="flex justify-center items-center mt-[20px]">
                <div className="mr-2">
                  <MdOutlineWatchLater />{" "}
                </div>
                <div>10 April 2023</div>
              </div>
            </div>
          </div>
          <div className=" py-[52px] px-[52px] rounded-[10px]  hover:border border-[#b9b3b3]  duration-300">
            <img className="w-[]" src="images/watch.png" alt="watch" />
            <p className="w-[] text-[24px] leading-[30px] font-semibold font-['Poopins']">
              Our Category Choices for Top 10 Tech Gadgets in 2023
            </p>
            <div className="flex justify-between">
              <div>
                <button className="py-[7px] px-[20px] bg-[#FF624C] text-white rounded-[10px] mt-[32px]">
                  Review
                </button>
              </div>
              <div className="flex justify-center items-center mt-[20px]">
                <div className="mr-2">
                  <MdOutlineWatchLater />{" "}
                </div>
                <div>10 April 2023</div>
              </div>
            </div>
          </div>
          <div className=" py-[52px] px-[52px] rounded-[10px]  hover:border border-[#b9b3b3]  duration-300">
            <img className="w-[]" src="images/watch.png" alt="watch" />
            <p className="w-[] text-[24px] leading-[30px] font-semibold font-['Poopins']">
              Our Category Choices for Top 10 Tech Gadgets in 2023
            </p>
            <div className="flex justify-between">
              <div>
                <button className="py-[7px] px-[20px] bg-[#FF624C] text-white rounded-[10px] mt-[32px]">
                  Review
                </button>
              </div>
              <div className="flex justify-center items-center mt-[20px]">
                <div className="mr-2">
                  <MdOutlineWatchLater />{" "}
                </div>
                <div>10 April 2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TechTalk;
