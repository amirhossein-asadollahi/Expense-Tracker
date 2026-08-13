import { IoIosMore } from "react-icons/io";
import "./TransactionListItem.css";

import React, { useContext, useState } from "react";
import formatCurrency from "../../../../utils/formatCurrency";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";
import FinanceContext from "../../../../Contexts/FinanceContext/FinanceContext";
import EditModal from "../../EditModal/EditModal";
import { useNavigate } from "react-router";

const TransactionListItem = ({
  typeTag,
  categoryTag,
  desc,
  price,
  date,
  trxId,
}) => {
  const { removeTransaction } = useContext(FinanceContext);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <tr
        onClick={() => navigate(`/transaction/${trxId}`)}
        className="transaction-row"
      >
        <td>{typeTag}</td>
        <td>{categoryTag}</td>
        <td>{desc}</td>
        <td>{price}</td>
        <td>{date}</td>
        <td className="list__item-buttons">
          <button
            className="list__item-btn"
            title="ویرایش تراکنش"
            onClick={() => setIsEditModalOpen(true)}
          >
            <MdOutlineModeEdit />
          </button>
          <button
            className="list__item-btn trash"
            title="حذف تراکنش"
            onClick={() => removeTransaction(trxId)}
          >
            <FaRegTrashCan />
          </button>
          {/* <button className="list__item-btn" title="جزئیات تراکنش">
              <CgDetailsMore />
            </button> */}
        </td>
      </tr>
      {isEditModalOpen && (
        <EditModal
          title={"ویرایش تراکنش"}
          setIsOpen={setIsEditModalOpen}
          transactionId={trxId}
        />
      )}
    </>
  );
};

export default TransactionListItem;
