import "./Dashboard.css";

import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ContentHeader from "../../components/UI/ContentHeader/ContentHeader";
import ThemeIcon from "../../components/UI/ThemeIcon/ThemeIcon";
import DetailBox from "../../components/UI/DetailBox/DetailBox";
import { CiCreditCard1 } from "react-icons/ci";
import formatCurrency from "../../utils/formatCurrency";
import LastTransactionList from "../../features/Transaction/LastTransactionList/LastTransactionList.jsx";
import ExpensePieChart from "../../components/UI/PieChart/ExpensePieChart.jsx";
import PieChartHeader from "../../components/UI/PieChart/PieChartHeader/PieCharHeader.jsx";
import DashboardSummary from "../../features/Dashboard/DashboardSummary/DashboardSummary.jsx";
import TargetGoal from "../../features/Dashboard/TargetGoal/TargetGoal.jsx";
import useTransaction from "../../hooks/useTransaction.jsx";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import FormatTrx from "../../components/UI/FormatTrx/FormatTrx.jsx";
import useDetailBoxes from "../../hooks/useDetailBoxes.jsx";

const Dashboard = () => {
  const detailBoxes = useDetailBoxes(2);
  return (
    <>
      <div className="content__header">
        <ContentHeader title={"داشبورد"} description={"داشبورد مالی شما"} />
      </div>
      <div className="detail__boxes">
        {detailBoxes.map((box) => {
          const ICON = box.icon;
          return (
            <DetailBox
              key={box.id}
              icon={<ICON />}
              title={box.title}
              value={<FormatTrx value={box.price} />}
              desc={box.desc}
              iconColor={box.iconColor}
            />
          );
        })}
      </div>
      <div className="transaction__data">
        <div className="last__transaction">
          <LastTransactionList headTitle={"آخرین تراکنش ها"} />
        </div>
        <div className="transaction__chart">
          <div className="transaction__chart-header">
            <PieChartHeader title={"هزینه ها بر اساس دسته بندی"} />
          </div>
          <ExpensePieChart />
        </div>
      </div>
      <div className="transaction__analyse">
        <div className="transaction__sumary">
          <DashboardSummary />
        </div>
        <div className="transaction__goal">
          <TargetGoal />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
