import React from "react";
import useTransaction from "./useTransaction";
import FormatTrx from "../components/UI/FormatTrx/FormatTrx";
import { FaArrowDown, FaArrowUp, FaChartLine } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";

const useSummaries = () => {
  const { allTrxs, expenseAvarage, mostIncome, mostExpense } = useTransaction();
  const summaries = [
    {
      id: 1,
      icon: <GrTransaction />,
      title: "تعداد تراکنش ها",
      value: <FormatTrx value={allTrxs} />,
      iconColor: "--color-chart-food",
    },
    {
      id: 2,
      icon: <FaChartLine />,
      title: "میانگین هزینه",
      value: <FormatTrx value={expenseAvarage()} />,
      iconColor: "--color-chart-food",
    },
    {
      id: 3,
      icon: <FaArrowDown />,
      title: "بیشترین هزینه",
      value: <FormatTrx value={mostExpense()} type={"e"} />,
      iconColor: "--color-expense",
    },
    {
      id: 4,
      icon: <FaArrowUp />,
      title: "بیشترین درآمد",
      value: <FormatTrx value={mostIncome()} type={"i"} />,
      iconColor: "--color-income",
    },
  ];
  return summaries;
};

export default useSummaries;
