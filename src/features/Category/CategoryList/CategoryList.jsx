import "./CategoryList.css";
import React, { useContext } from "react";
import CategoryListItem from "./CategoryListItem/CategoryListItem";
import Pagination from "../../../components/Pagination/Pagination";
import useFetch from "../../../hooks/useFetch";
import FinanceContext from "../../../Contexts/FinanceContext/FinanceContext";
import { AVAILABLE_ICONS } from "../../../utils/availableIcons";
import usePagination from "../../../hooks/usePagination";

const CategoryList = () => {
  const { category } = useContext(FinanceContext);
  const { currentPage, setCurrentPage, totalPages, paginatedData } =
    usePagination(category, 5);
  return (
    <>
      <table className="table">
        <thead className="table__head">
          <tr className="table__head-row">
            <th className="table__head-cell">دسته بندی</th>
            <th className="table__head-cell">تعداد تراکنش</th>
            <th className="table__head-cell">مجموع(تومان)</th>
            <th className="table__head-cell">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData?.map((item, index) => {
            const foundIcon = AVAILABLE_ICONS.find((logo) => {
              return logo.id === item.icon;
            });
            const ICON = foundIcon?.component;
            const ICON_COLOR = foundIcon?.color;
            return (
              <CategoryListItem
                key={item.id}
                name={item.name}
                icon={<ICON />}
                created_at={item.created_at}
                color={ICON_COLOR}
                categoryId={item.id}
              />
            );
          })}
        </tbody>
      </table>
      <div className="pagination__category">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default CategoryList;
