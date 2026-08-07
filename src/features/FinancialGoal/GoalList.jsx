import React, { useContext } from "react";
import "./GoalList.css";
import usePagination from "../../hooks/usePagination";
import GoalListItem from "./GoalListItem/GoalListItem";
import Pagination from "../../components/Pagination/Pagination";
import FinanceContext from "../../Contexts/FinanceContext/FinanceContext";
import {
  AVAILABLE_ICONS,
  getIconColor,
  getIconComponent,
} from "../../utils/availableIcons";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
const GoalList = () => {
  const { goal } = useContext(FinanceContext);
  const { currentPage, setCurrentPage, totalPages, paginatedData } =
    usePagination(goal, 5);
  console.log(goal);
  return (
    <>
      <table className="table">
        <thead className="table__head">
          <tr className="table__head-row">
            <th className="table__head-cell">هدف</th>
            <th className="table__head-cell">مبلغ هدف</th>
            <th className="table__head-cell">پس انداز شده</th>
            <th className="table__head-cell">درصد پیشرفت</th>
            <th className="table__head-cell">تاریخ هدف</th>
            <th className="table__head-cell">وضعیت</th>
            <th className="table__head-cell"></th>
          </tr>
        </thead>
        <tbody>
          {paginatedData?.map((item, index) => {
            const goalPrgoress =
              Number(item.current_amount / item.target_amount) * 100;
            const ICON = getIconComponent(item?.icon);
            const ICON_COLOR = getIconColor(item?.color);
            return (
              <GoalListItem
                key={item.id}
                status={item.status}
                targetAmount={item.target_amount}
                currentAmount={item.current_amount}
                targetDate={item.target_date}
                progress={
                  <div>
                    <span style={{ color: "var(--color-text-secondary)" }}>
                      {Math.floor(goalPrgoress)}%
                    </span>
                    <ProgressBar
                      progress={Math.floor(goalPrgoress)}
                      color={ICON_COLOR}
                    />
                  </div>
                }
                title={item.title}
                icon={<ICON />}
                created_at={item.created_at}
                color={ICON_COLOR}
                goalId={item.id}
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

export default GoalList;
