import { Link } from "react-router";
import "./LastTransactionList.css";

import React, { useContext } from "react";
import LastTransactionListItem from "./LastTransactionListItem/LastTransactionListItem";
import { RiShoppingCartFill } from "react-icons/ri";
import formatCurrency from "../../../utils/formatCurrency.js";
import FinanceContext from "../../../Contexts/FinanceContext/FinanceContext.js";
import FormatTrx from "../../../components/UI/FormatTrx/FormatTrx.jsx";

const LastTransactionList = ({ headTitle }) => {
  const { transaction, category } = useContext(FinanceContext);
  return (
    <div className="transaction__list">
      <div className="transaction__list-header">
        <p className="transaction__list-header-title">{headTitle}</p>
        <Link to={"/transaction"} className="transaction__list-header-link">
          مشاهده همه
        </Link>
      </div>
      <div className="transaction__list-item">
        {transaction
          .slice(-5)
          .reverse()
          .map((item) => {
            const foundCategory = category.find(
              (cat) => item.category === cat.id,
            );
            return (
              <LastTransactionListItem
                key={item.id}
                title={item.title}
                category={
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
                price={<FormatTrx value={item?.amount} type={item?.trx_type} />}
                iconColor={"--color-chart-food"}
              />
            );
          })}
      </div>
    </div>
  );
};

export default LastTransactionList;
