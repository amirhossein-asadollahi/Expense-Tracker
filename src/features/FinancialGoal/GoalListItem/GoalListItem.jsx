import React, { useContext, useEffect, useState } from "react";
import "./GoalListItem.css";
import FinanceContext from "../../../Contexts/FinanceContext/FinanceContext";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineModeEdit } from "react-icons/md";
import FormatTrx from "../../../components/UI/FormatTrx/FormatTrx";
import { convertToPersianDate } from "../../../utils/formatDate";
import EditGoalModal from "../EditGoalModal/EditGoalModal";
const GoalListItem = ({
  title,
  targetAmount,
  currentAmount,
  targetDate,
  color,
  icon,
  createdAt,
  status,
  goalId,
  progress,
}) => {
  const { removeGoal } = useContext(FinanceContext);
  const [isGoalOpen, setIsGoalOpen] = useState(false);

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
            <span className="category__title--text">{title}</span>
          </div>
        </td>
        <td className="table__body-cell">
          {<FormatTrx value={targetAmount} type={"s"} />}
        </td>
        <td className="table__body-cell">
          {<FormatTrx value={currentAmount} type={"i"} />}
        </td>
        <td className="table__body-cell">{progress}</td>
        <td className="table__body-cell">{convertToPersianDate(targetDate)}</td>
        <td className="table__body-cell">
          {status === "a" ? (
            <span className="active-badge">فعال</span>
          ) : (
            <span className="complete-badge">تکمیل شده</span>
          )}
        </td>

        <td className="table__body-cell">
          <div className="category-action">
            <button
              className="action-btn"
              title="ویرایش هدف"
              onClick={() => setIsGoalOpen(true)}
            >
              <MdOutlineModeEdit />
            </button>
            <button
              className="action-btn trash"
              title="حذف هدف"
              onClick={() => removeGoal(goalId)}
            >
              <FaRegTrashCan />
            </button>
          </div>
        </td>
      </tr>
      {isGoalOpen && (
        <EditGoalModal setIsOpen={setIsGoalOpen} goalId={goalId} />
      )}
    </>
  );
};

export default GoalListItem;
