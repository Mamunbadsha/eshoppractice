import React from "react";

const PaginationLayout = ({
  totalItems,
  itemPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemPerPage);
  const maxPagesToShow = 10;
  const maxPagesToShowBeforeAfter = 3;

  let startPage = Math.max(1, currentPage - maxPagesToShowBeforeAfter);
  let endPage = Math.min(totalPages, currentPage + maxPagesToShowBeforeAfter);

  if (endPage - startPage + 1 < maxPagesToShow) {
    if (startPage > 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  }

  const pageNumbers = [];

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center p-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-gray-300 disabled:opacity-50 hover:bg-gray-500 cursor-pointer"
      >
        &lt;
      </button>

      {pageNumbers.map((number, index) => (
        <button
          key={index}
          onClick={() => onPageChange(number)}
          className="px-3  py-1 mx-2 rounded bg-gray-300 disabled:opacity-50 hover:bg-gray-500 cursor-pointer"
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-gray-300 disabled:opacity-50 hover:bg-gray-500 cursor-pointer"
      >
        &gt;
      </button>

      <span className="ml-12">
        showing{currentPage * itemPerPage} of {totalItems}results
      </span>
    </div>
  );
};

export default PaginationLayout;
