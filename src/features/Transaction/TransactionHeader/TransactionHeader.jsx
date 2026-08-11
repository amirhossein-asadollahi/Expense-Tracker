import React, { useContext, useEffect, useState } from "react";

import { PiMicrosoftExcelLogo } from "react-icons/pi";

import "./TransactionHeader.css";
import FinanceContext from "../../../Contexts/FinanceContext/FinanceContext";
import ExportExcel from "./ExportExcel/ExportExcel.jsx";

const TransactionHeader = ({ search, categoryName, trxType, setFilters }) => {
  const { category, transaction } = useContext(FinanceContext);
  const searchTransactionHandler = (e) => {
    setFilters((prev) => ({ ...prev, search: e.target.value }));
  };
  const filterTransactionHandler = (e) => {
    setFilters((prev) => ({ ...prev, categoryName: e.target.value }));
  };
  const trxTypeHandler = (e) => {
    setFilters((prev) => ({ ...prev, trxType: e.target.value }));
  };

  return (
    <div className="table__header">
      <div className="table__header-right">
        <input
          value={search}
          onChange={searchTransactionHandler}
          className="table__header-search"
          type="text"
          placeholder={`جستجو...`}
        />
        <select
          className="table__header-select"
          value={categoryName}
          onChange={filterTransactionHandler}
        >
          <option value="all">همه دسته بندی ها</option>
          {category?.map((cat) => {
            return (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            );
          })}
        </select>
        <select
          className="table__header-select"
          value={trxType}
          onChange={trxTypeHandler}
        >
          <option value="">نوع تراکنش ها</option>
          <option value="i">درآمد</option>
          <option value="e">هزینه</option>
        </select>
      </div>
      <div className="table__header-left">
        <ExportExcel transaction={transaction} />
      </div>
    </div>
  );
};

export default TransactionHeader;
