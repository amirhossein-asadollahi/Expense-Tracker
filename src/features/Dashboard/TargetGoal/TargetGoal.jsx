import { Link } from "react-router";
import "./TargetGoal.css";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";

import React, { useContext } from "react";
import { GiGraduateCap } from "react-icons/gi";
import FinanceContext from "../../../Contexts/FinanceContext/FinanceContext";
import { getIconColor, getIconComponent } from "../../../utils/availableIcons";
import FormatTrx from "../../../components/UI/FormatTrx/FormatTrx";

const TargetGoal = () => {
  const { goal } = useContext(FinanceContext);
  console.log(goal.slice(-2));
  return (
    <div className="target">
      <div className="target__head">
        <p className="target__head-title">اهداف مالی</p>
        <Link to={"/financialgoal"} className="target__head-link">
          مشاهده همه
        </Link>
      </div>
      <div className="target__goals">
        {goal.slice(-2)?.map((item) => {
          const ICON = getIconComponent(item?.icon);
          const goalPrgoress =
            Number(item.current_amount / item.target_amount) * 100;
          const ICON_COLOR = getIconColor(item?.color);
          return (
            <div className="goal">
              <div>
                <span className="goal__icon">
                  <ICON />
                </span>
              </div>
              <div className="goal__detail">
                <p className="goal__detail-title">{item.title}</p>
                <p className="goal__detail-target">
                  از {<FormatTrx value={item.target_amount} />} تومان
                </p>
                <div className="goal__detail-progress">
                  <ProgressBar
                    progress={Math.floor(goalPrgoress)}
                    color={ICON_COLOR}
                  />
                </div>
                <p className="goal__detail-precent">
                  % {<FormatTrx value={goalPrgoress} />}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TargetGoal;
