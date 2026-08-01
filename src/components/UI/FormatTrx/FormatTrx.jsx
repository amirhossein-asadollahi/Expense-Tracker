import "./FormatTrx.css";
import React from "react";

const FormatTrx = ({ value, type }) => {
  const formatValue = Number(value).toLocaleString("fa-IR");
  const amountColor =
    type === "e" ? (
      <span className="expense-color">{formatValue} - </span>
    ) : type === "i" ? (
      <span className="income-color">{formatValue} + </span>
    ) : (
      formatValue
    );
  return amountColor;
};

export default FormatTrx;
