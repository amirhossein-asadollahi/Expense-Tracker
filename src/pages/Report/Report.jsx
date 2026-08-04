import "./Report.css";
import ContentHeader from "../../components/UI/ContentHeader/ContentHeader";
import ThemeIcon from "../../components/UI/ThemeIcon/ThemeIcon";
import React, { useState } from "react";
import useDetailBoxes from "../../hooks/useDetailBoxes";
import DetailBox from "../../components/UI/DetailBox/DetailBox";
import FormatTrx from "../../components/UI/FormatTrx/FormatTrx";
import ExpensePieChart from "../../components/UI/PieChart/ExpensePieChart";
import ReportLineChart from "../../features/Reports/LineChart/ReportLineChart";
import usePeriod from "../../hooks/usePeriod";

const Report = () => {
  const detailBoxes = useDetailBoxes(2, 3);
  const [period, setPeriod] = useState("all");
  const { chartData } = usePeriod(period);
  return (
    <>
      <div className="content__header">
        <ContentHeader title={"گزارش"} description={"گزارش های مالی شما"} />
      </div>
      <div className="detail-boxes-report">
        {detailBoxes.map((box) => {
          const ICON = box.icon;
          return (
            <DetailBox
              key={box.id}
              icon={<ICON />}
              title={box.title}
              value={box.price}
              desc={box.desc}
              iconColor={box.iconColor}
            />
          );
        })}
      </div>
      <div className="report__charts">
        <div className="charts">
          <ExpensePieChart />
        </div>
        <div className="charts">
          <select
            className="chart__select"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option value="daily">امروز</option>
            <option value="weekly">۷ روز اخیر</option>
            <option value="monthly">۳۰ روز اخیر</option>
            <option value="all">همه</option>
          </select>
          <ReportLineChart data={chartData} />
        </div>
      </div>
    </>
  );
};

export default Report;
