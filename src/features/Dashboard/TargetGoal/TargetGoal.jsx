import { Link } from "react-router";
import "./TargetGoal.css";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";

import React from "react";
import { GiGraduateCap } from "react-icons/gi";

const TargetGoal = () => {
  return (
    <div className="target">
      <div className="target__head">
        <p className="target__head-title">اهداف مالی</p>
        <Link to={"/financialgoal"} className="target__head-link">
          مشاهده همه
        </Link>
        npm
      </div>
      <div className="target__goals">
        <div className="goal">
          <div>
            <span className="goal__icon">
              <GiGraduateCap />
            </span>
          </div>
          <div className="goal__detail">
            <p className="goal__detail-title">یادگیری زبان</p>
            <p className="goal__detail-target">از 8,000,000 تومان</p>
            <div className="goal__detail-progress">
              <ProgressBar progress={60} color={"var(--color-savings)"} />
            </div>
            <p className="goal__detail-precent">60%</p>
          </div>
        </div>
        <div className="goal">
          <div>
            <span className="goal__icon">
              <GiGraduateCap />
            </span>
          </div>
          <div className="goal__detail">
            <p className="goal__detail-title">یادگیری زبان</p>
            <p className="goal__detail-target">از 8,000,000 تومان</p>
            <div className="goal__detail-progress">
              <ProgressBar progress={60} color={"var(--color-savings)"} />
            </div>
            <p className="goal__detail-precent">60%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetGoal;
