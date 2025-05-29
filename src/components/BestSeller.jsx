import React from "react";
import ProductLayout from "./ProductLayout";
import Container from "./Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import { HiArrowLongRight } from "react-icons/hi2";
const BestSeller = () => {
  return (
    <div className="mt-[80px] mb-6 ">
      <Container>
        <div className="flex justify-between mb-[48px] max-w-[902px]">
          <div>
            <h2 className="font-['Poppins'] font-semibold text-[36px]">
              Best Seller
            </h2>
          </div>
          <div className="flex justify-center items-center gap-[16px]">
            <div>
              <p className="font-['Montserrat'] font-bold text-[16px] text-[#FF624C] flex gap-2 ">
                View All{" "}
                <HiArrowLongRight className="justify-center mt-[3px] " />
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-[74px] relative">
          <div>
            <div className=" flex  max-w-[902px] gap-[1px]">
              <div className="flex gap-1 flex-wrap">
                <div className="max-w-[285px]">
                  <ProductLayout
                    percentTag={true}
                    category="LAPTOP"
                    title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                    rating="5"
                    totalrating="100"
                    price="2,199.00"
                    stock={false}
                    stockAmount="50"
                    correctprice="$118.00"
                    discounted={true}
                  />
                </div>
                <div className="max-w-[285px]">
                  <ProductLayout
                    percentTag={false}
                    category="LAPTOP"
                    title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                    rating="5"
                    totalrating="100"
                    price="2,199.00"
                    stock={false}
                    stockAmount="50"
                  />
                </div>
                <div className="max-w-[285px]">
                  <ProductLayout
                    percentTag={false}
                    category="LAPTOP"
                    title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                    rating="5"
                    totalrating="100"
                    price="2,199.00"
                    stock={false}
                    stockAmount="50"
                  />
                </div>
                <div className="max-w-[285px]">
                  <ProductLayout
                    percentTag={false}
                    category="LAPTOP"
                    title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                    rating="5"
                    totalrating="100"
                    price="2,199.00"
                    stock={false}
                    stockAmount="50"
                  />
                </div>
                <div className="max-w-[285px]">
                  <ProductLayout
                    percentTag={false}
                    category="LAPTOP"
                    title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                    rating="5"
                    totalrating="100"
                    price="2,199.00"
                    stock={false}
                    stockAmount="50"
                  />
                </div>
                <div className="max-w-[285px]">
                  <ProductLayout
                    percentTag={true}
                    category="LAPTOP"
                    title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                    rating="5"
                    totalrating="100"
                    price="2,199.00"
                    stock={false}
                    stockAmount="50"
                    correctprice="$118.00"
                    discounted={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" absolute top-[-100px] right-[0px]">
            <img src="images/bannerimg.png" alt="banner" />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default BestSeller;
