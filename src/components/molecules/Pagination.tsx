import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages = 10,
  onPageChange,
}) => {
  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex space-x-2 justify-center py-4">
    {Array.from({ length: totalPages }, (_, index) => {
      const page = index + 1;
      return (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`w-8 h-8 flex items-center justify-center rounded-full transition-all ${
            page === currentPage
              ? "bg-[#7692ff] text-white"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          {page}
        </button>
      );
    })}
  </div>
);
};

export default Pagination;