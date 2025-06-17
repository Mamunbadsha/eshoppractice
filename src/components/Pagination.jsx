import React, { useState } from "react";
import ProductLayout from "./ProductLayout";
import PaginationLayout from "./PaginationLayout";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const products = Array.from({ length: 160 }, (_, index) => ({
    id: index + 1,
    name: `product ${index + 1}`,
    price: (Math.random() * 100).toFixed(2),
  }));
  const itemPerPage = 10;
  const startIndex = (currentPage - 1) * itemPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemPerPage);

  return (
    <div className="flex gap-1 flex-wrap">
      {currentProducts.map((item, index) => (
        <div key={index} className="w-[24%]">
          <ProductLayout
            percentTag={true}
            category="LAPTOP"
            title={item.name}
            rating="4"
            totalrating="100"
            price="2,199.00"
            correctprice="$118.00"
            stock={false}
            stockAmount="50"
            discounted={true}
          />
        </div>
      ))}
      <PaginationLayout
        totalItems={products.length}
        itemPerPage={itemPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Pagination;
