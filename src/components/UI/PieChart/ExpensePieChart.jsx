import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import "./ExpensePieChart.css";
import useDetailBoxes from "../../../hooks/useDetailBoxes.jsx";
import React, { useContext } from "react";
import formatCurrency from "../../../utils/formatCurrency.js";

const ExpensePieChart = () => {
  const detailBoxes = useDetailBoxes(2, 3);
  //this function writed by AI
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const RADIAN = Math.PI / 180;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={16}
        fontWeight={500}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  //this function writed by AI
  const renderLegendText = (value, entry) => {
    return (
      <span
        style={{
          color: "var(--color-text-secondary)",
          marginRight: "8px",
          display: "inline-block",
          fontSize: "16px",
          fontFamily: "inherit",
        }}
      >
        {value}: {formatCurrency(entry.payload.price)}
      </span>
    );
  };
  return (
    <div className="pie__chart" style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <PieChart>
          <Tooltip
            formatter={(value) => formatCurrency(value)}
            contentStyle={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              paddingRight: "8px",
              border: "1px solid #e2e8f0",
              fontFamily: "inherit",
              direction: "rtl",
            }}
          />
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            iconType="circle"
            formatter={renderLegendText}
            wrapperStyle={{
              right: 10,
              direction: "rtl", // راست به چپ کردن کل باکس لجند
              lineHeight: "28px", // ایجاد فاصله عمودی مناسب بین سطرها
            }}
          />
          <Pie
            data={detailBoxes}
            cx="35%"
            cy="50%"
            outerRadius={100}
            innerRadius={50}
            dataKey={"price"}
            nameKey={"title"}
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {detailBoxes.map((item) => {
              return <Cell key={item.id} fill={`var(${item.iconColor})`} />;
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpensePieChart;
