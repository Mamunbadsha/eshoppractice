import React from "react";
import ProductLayout from "./ProductLayout";
import Container from "./Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import { FaAngleDown } from "react-icons/fa";

const NewProduct = () => {
  return (
    <div className="mt-[80px]">
      <Container>
        <div className="flex justify-between mb-[48px]">
          <div>
            <h2 className="font-['Poppins'] font-semibold text-[36px]">
              New Products
            </h2>
          </div>
          <div className="flex justify-center items-center gap-[16px]">
            <div>
              <p className="font-['Montserrat'] font-[400] text-[16px] mr-[10px] text-[#303030]">
                Sort by
              </p>
            </div>
            <div className="relative">
              <select
                name="currency"
                className="text-[#FF624C]  appearance-none mr-[80px] font-['Montserrat']  font-bold text-[16px]"
              >
                <option value="USD">All Categories</option>
                <option value="USD">USD</option>
                <option value="BDT">BDT</option>
                <option value="DRT">FDT</option>
                <option value="SSD">KDT</option>
              </select>
              <div className="pointer-events-none absolute right-0 top-[14px] -translate-y-1/2 text-[#FF624C]">
                <FaAngleDown />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex gap-5">
          <ProductLayout
            percentTag={true}
            category="LAPTOP"
            title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            rating="5"
            totalrating="100"
            price="2,199.00"
            correctprice="$118.00"
            stock={false}
            stockAmount="50"
            discounted={true}
          />
          <ProductLayout
            percentTag={false}
            category="LAPTOP"
            title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            rating="3"
            totalrating="100"
            price="2,199.00"
            stock={false}
            stockAmount="50"
          />
          <ProductLayout
            percentTag={true}
            category="LAPTOP"
            title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            rating="2"
            totalrating="100"
            price="2,199.00"
            correctprice="$118.00"
            stock={false}
            stockAmount="50"
            discounted={true}
          />
          <ProductLayout
            percentTag={true}
            category="LAPTOP"
            title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            rating="4"
            totalrating="100"
            price="2,199.00"
            correctprice="$118.00"
            stock={false}
            stockAmount="50"
            discounted={true}
          />
          <ProductLayout
            percentTag={false}
            category="LAPTOP"
            title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            rating="1"
            totalrating="100"
            price="2,199.00"
            stock={false}
            stockAmount="50"
          />
        </div>
        <div className="flex justify-center mt-[80px] mb-[20px]">
          <Button
            text="Load More"
            bg="transparent"
            border="1px solid #FF624C"
            color="#FF624C"
            paddingX="40px"
            paddingY="16px"
          />
        </div>
      </Container>
    </div>
  );
};
export default NewProduct;
