import React from "react";
import ProductLayout from "./ProductLayout";
import Container from "./Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";

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
              <p className="font-['Montserrat'] font-bold text-[16px] text-[#FF624C]">
                Sort by
              </p>
            </div>
            <div>
              <select name="currency" className="text-[#FF624C] ">
                <option value="USD">All Categories</option>
                <option value="USD">USD</option>
                <option value="BDT">BDT</option>
                <option value="DRT">FDT</option>
                <option value="SSD">KDT</option>
              </select>
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
            stock={false}
            stockAmount="50"
          />
          <ProductLayout
            percentTag={false}
            category="LAPTOP"
            title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            rating="3"
            totalrating="100"
            price="2,199.00"
            stock={true}
            stockAmount="50"
          />
          <ProductLayout
            percentTag={true}
            category="LAPTOP"
            title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            rating="2"
            totalrating="100"
            price="2,199.00"
            stock={true}
            stockAmount="50"
          />
          <ProductLayout
            percentTag={true}
            category="LAPTOP"
            title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            rating="4"
            totalrating="100"
            price="2,199.00"
            stock={true}
            stockAmount="50"
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
          />
        </div>
      </Container>
    </div>
  );
};
export default NewProduct;
