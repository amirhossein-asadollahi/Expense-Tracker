import Pagination from "../../../components/Pagination/Pagination";
import FormatTrx from "../../../components/UI/FormatTrx/FormatTrx";
import FinanceContext from "../../../Contexts/FinanceContext/FinanceContext";
import useFetch from "../../../hooks/useFetch";
import useTransaction from "../../../hooks/useTransaction";
import { convertToPersianDate } from "../../../utils/formatDate";
import TransactionHeader from "../TransactionHeader/TransactionHeader";
import "./TransactionList.css";
import TransactionListItem from "./TransactionListItem/TransactionListItem";
import React, { useContext, useState } from "react";

const TransactionList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { addUpIncomes, addUpExpenses, allTrxs } = useTransaction();
  const { transaction, category } = useContext(FinanceContext);
  const [filters, setFilters] = useState({
    search: "",
    categoryName: "all",
    trxType: "",
  });
  const filteredTransactions = transaction
    .filter((trx) =>
      trx.title.toLowerCase().includes(filters.search?.toLowerCase()),
    )
    .filter((item) => {
      if (filters.categoryName === "all") return true;
      return item.category === Number(filters.categoryName);
    })
    .filter((type) => {
      if (filters.trxType === "") return true;
      return type.trx_type === filters.trxType;
    });
  return (
    <>
      <TransactionHeader {...filters} setFilters={setFilters} />
      <div className="table-data">
        <table className="table">
          <thead>
            <tr className="table__head">
              <th className="table__head-text">نوع</th>
              <th className="table__head-text">دسته بندی</th>
              <th className="table__head-text">شرح</th>
              <th className="table__head-text">مبلغ(تومان)</th>
              <th className="table__head-text">تاریخ</th>
              <th className="table__head-text"></th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions?.map((item, index) => {
              const foundCategory = category.find((cat) => {
                return cat.id === item.category;
              });
              return (
                <TransactionListItem
                  key={item.id}
                  trxId={item.id}
                  typeTag={
                    item.trx_type === "e" ? (
                      <span className="badge expense-badge">هزینه</span>
                    ) : (
                      <span className="badge income-badge">درآمد</span>
                    )
                  }
                  categoryTag={
                    <span
                      style={{
                        backgroundColor: foundCategory?.color,
                        color: "var(--color-bg-card)",
                        padding: "0 8px",
                        borderRadius: "8px",
                      }}
                    >
                      {foundCategory?.name}
                    </span>
                  }
                  desc={
                    <span style={{ color: "var(--color-text-primary)" }}>
                      {item?.title}
                    </span>
                  }
                  price={
                    <FormatTrx value={item?.amount} type={item?.trx_type} />
                  }
                  date={
                    <span style={{ color: "var(--color-text-primary)" }}>
                      {convertToPersianDate(item.created_at)}
                    </span>
                  }
                />
              );
            })}
          </tbody>
        </table>
        <div className="table__footer">
          <p className="transaction-show-count">نمایش 1 تا 10 از 24</p>
          <div className="table__pagination">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionList;
