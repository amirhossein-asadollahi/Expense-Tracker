import { MdOutlineModeEdit } from "react-icons/md";
import "./CategoryListItem.css";
import React, { useContext, useMemo, useState } from "react";
import { IoIosMore } from "react-icons/io";
import { FaRegTrashCan } from "react-icons/fa6";
import FormatTrx from "../../../../components/UI/FormatTrx/FormatTrx";
import useTransaction from "../../../../hooks/useTransaction";
import FinanceContext from "../../../../Contexts/FinanceContext/FinanceContext";
import EditCategoryModal from "../../EditCategoryModal/EditCategoryModal";

const CategoryListItem = ({ name, icon, created_at, color, categoryId }) => {
  const { categoryInfo } = useTransaction();
  const { removeCategory } = useContext(FinanceContext);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const iconBgColor = `${color}1a`;
  return (
    <>
      <tr className="table__body-row">
        <td className="table__body-cell">
          <div className="table__body--title">
            <span
              className="category__icon-data"
              style={{
                backgroundColor: iconBgColor,
                color: color,
                fontSize: 20,
                padding: "10px",
                borderRadius: "12px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
              }}
            >
              {icon}
            </span>
            <span className="category__title--text">{name}</span>
          </div>
        </td>
        <td className="table__body-cell">
          {categoryInfo(categoryId).filteredCount}
        </td>
        <td className="table__body-cell">
          <FormatTrx
            value={categoryInfo(categoryId).displayAmount}
            type={categoryInfo(categoryId).isNegative ? "e" : "i"}
          />
        </td>
        <td className="table__body-cell">
          <div className="category-action">
            <button
              className="action-btn"
              title="ویرایش دسته بندی"
              onClick={() => setIsCategoryOpen(true)}
            >
              <MdOutlineModeEdit />
            </button>
            <button
              className="action-btn trash"
              title="حذف دسته بندی"
              onClick={() => removeCategory(categoryId)}
            >
              <FaRegTrashCan />
            </button>
            <button className="action-btn" title="جزئیات دسته بندی">
              <IoIosMore />
            </button>
          </div>
        </td>
      </tr>
      {isCategoryOpen && (
        <EditCategoryModal
          setIsOpen={setIsCategoryOpen}
          categoryId={categoryId}
        />
      )}
    </>
  );
};

export default CategoryListItem;
