import { Link } from "react-router";
import Pagination from "../../../components/Pagination/Pagination";
import FormatTrx from "../../../components/UI/FormatTrx/FormatTrx";
import FinanceContext from "../../../Contexts/FinanceContext/FinanceContext";
import useFetch from "../../../hooks/useFetch";
import usePagination from "../../../hooks/usePagination";
import useTransaction from "../../../hooks/useTransaction";
import { convertToPersianDate } from "../../../utils/formatDate";
import TransactionHeader from "../TransactionHeader/TransactionHeader";
import "./TransactionList.css";
import TransactionListItem from "./TransactionListItem/TransactionListItem";
import React, { useContext, useMemo, useState } from "react";

const TransactionList = () => {
  const { addUpIncomes, addUpExpenses, allTrxs } = useTransaction();
  const { transaction, category } = useContext(FinanceContext);
  console.log(transaction);
  console.log(category);
  const [filters, setFilters] = useState({
    search: "",
    categoryName: "all",
    trxType: "",
  });
  const filteredTransactions = useMemo(() => {
    return transaction
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
  }, [transaction, filters]);

  const { currentPage, setCurrentPage, totalPages, paginatedData } =
    usePagination(filteredTransactions, 6);
  return (
    <>
      <TransactionHeader {...filters} setFilters={setFilters} />
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
          {paginatedData?.map((item, index) => {
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
                price={<FormatTrx value={item?.amount} type={item?.trx_type} />}
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
        <div className="table__pagination">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default TransactionList;
