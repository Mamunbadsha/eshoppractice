import React from "react";
import Container from "./Container";
import { FaStar } from "react-icons/fa";

const ProductLayout = () => {
  return (
    <Container>
      <div className="border-2 border-gray-300 p-6 bg-red-500">
        <div>
          <img src="images/watch.png" alt="watch" />
        </div>
        <div>
          <p>L A P T O P</p>
          <h3>S21 Laptop Ultra HD LED Screen Feature 2023 ...</h3>
          <div className="flex gap-2 items-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span>(100)</span>
          </div>
          <p>$1,199.00</p>
        </div>
      </div>
    </Container>
  );
};

export default ProductLayout;
