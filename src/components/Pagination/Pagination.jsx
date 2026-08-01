import "./Pagination.css";

import React, { useState } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={() => {
          return currentPage !== 1 && onPageChange((prev) => prev - 1);
        }}
      >
        قبلی
      </button>
      {pages.map((page) => {
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`pagination-item ${currentPage === page ? "active" : null}`}
          >
            {page}
          </button>
        );
      })}
      <button
        className="pagination-btn"
        onClick={() => {
          return currentPage !== totalPages && onPageChange((prev) => prev + 1);
        }}
      >
        بعدی
      </button>
    </div>
  );
};

export default Pagination;
