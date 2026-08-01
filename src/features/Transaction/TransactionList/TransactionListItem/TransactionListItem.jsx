import { IoIosMore } from "react-icons/io";
import "./TransactionListItem.css";

import React, { useContext } from "react";
import formatCurrency from "../../../../utils/formatCurrency";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";
import FinanceContext from "../../../../Contexts/FinanceContext/FinanceContext";

const TransactionListItem = ({ typeTag, categoryTag, desc, price, date, trxId }) => {
  const {removeTransaction} = useContext(FinanceContext)
  return (
    <tr>
      <td>{typeTag}</td>
      <td>{categoryTag}</td>
      <td>{desc}</td>
      <td>{price}</td>
      <td>{date}</td>
      <td>
        <div className="list__item-buttons">
          <button className="list__item-btn" title="ویرایش تراکنش">
            <MdOutlineModeEdit />
          </button>
          <button className="list__item-btn trash" title="حذف تراکنش" onClick={() => removeTransaction(trxId)}>
            <FaRegTrashCan />
          </button>
          <button className="list__item-btn" title="جزئیات تراکنش">
            <CgDetailsMore />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TransactionListItem;
