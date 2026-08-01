import React, { useMemo, useState } from "react";

const usePagination = (data, itemPrePages = 8) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemPrePages);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemPrePages;

    return data.slice(startIndex, startIndex + itemPrePages);
  }, [data, itemPrePages, currentPage]);
  return {
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedData,
  };
};

export default usePagination;
