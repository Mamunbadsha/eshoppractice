import React from "react";
import ProductLayout from "./ProductLayout";
import Container from "./Container";

const FeatureProduct = () => {
  return (
    <Container>
      <div className="flex gap-1">
        <ProductLayout percentTag={true} category="LAPTOP" title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."rating= "5" totalrating="100" price="2,199.00" bg="yellow" />
        <ProductLayout percentTag={true} category="LAPTOP" title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."rating= "5" totalrating="100" price="2,199.00" bg="pink" />
        <ProductLayout percentTag={true} category="LAPTOP" title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."rating= "5" totalrating="100" price="2,199.00" bg="gray" />
        <ProductLayout percentTag={true} category="LAPTOP" title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."rating= "5" totalrating="100" price="2,199.00" bg="orange" />
        <ProductLayout percentTag={true} category="LAPTOP" title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."rating= "5" totalrating="100" price="2,199.00" bg="green" />

      </div>
    </Container>
  );
};

export default FeatureProduct;
