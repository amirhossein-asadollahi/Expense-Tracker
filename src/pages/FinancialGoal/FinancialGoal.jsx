import "./FinancialGoal.css";
import ContentHeader from "../../components/UI/ContentHeader/ContentHeader";
import ThemeIcon from "../../components/UI/ThemeIcon/ThemeIcon";
import React from "react";

const FinancialGoal = () => {
  return (
    <div className="content__header">
      <ContentHeader
        title={"اهداف مالی"}
        description={"اهداف آینده شما از نظر مالی"}
      />
      {/* <ThemeIcon /> */}
    </div>
  );
};

export default FinancialGoal;
