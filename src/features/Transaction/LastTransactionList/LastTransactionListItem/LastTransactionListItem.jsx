import formatCurrency from "../../../../utils/formatCurrency.js";
import "./LastTransactionListItem.css";

import React from "react";

const LastTransactionListItem = ({ title, category, price, iconColor }) => {
  return (
    <div className="transaction__item">
      <div className="transaction__item-head">
        <p className="transaction__item-title">{title}</p>
      </div>
      <div className="transaction__item-center">{category}</div>
      <div className="transaction__item-price">
        <p className="transaction__item-price-text">{price}</p>
      </div>
    </div>
  );
};

export default LastTransactionListItem;
