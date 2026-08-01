import React, { useContext, useEffect, useState } from "react";

import { PiMicrosoftExcelLogo } from "react-icons/pi";

import "./TransactionHeader.css";
import FinanceContext from "../../../Contexts/FinanceContext/FinanceContext";

const TransactionHeader = ({ search, categoryName, trxType, setFilters }) => {
  const { category } = useContext(FinanceContext);
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
        <button className="table__header-excel">
          خروجی اکسل <PiMicrosoftExcelLogo />
        </button>
      </div>
    </div>
  );
};

export default TransactionHeader;
