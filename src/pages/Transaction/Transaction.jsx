import "./Transaction.css";
import ContentHeader from "../../components/UI/ContentHeader/ContentHeader";
import ThemeIcon from "../../components/UI/ThemeIcon/ThemeIcon";
import React, { useContext, useState } from "react";
import DetailBox from "../../components/UI/DetailBox/DetailBox";
import { TbChecklist } from "react-icons/tb";
import formatCurrency from "../../utils/formatCurrency";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import TransactionHeader from "../../features/Transaction/TransactionHeader/TransactionHeader";
import TransactionList from "../../features/Transaction/TransactionList/TransactionList";
import Modal from "../../components/UI/Modal/Modal";
import FinanceContext from "../../Contexts/FinanceContext/FinanceContext";
import FormatTrx from "../../components/UI/FormatTrx/FormatTrx";
import useTransaction from "../../hooks/useTransaction";
import useDetailBoxes from "../../hooks/useDetailBoxes";

const Transaction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const detailBoxes = useDetailBoxes(1, 3);
  return (
    <div className="container">
      <div className="content__header">
        <ContentHeader
          title={"تراکنش ها"}
          description={"تراکنش های اخیر شما"}
          btn={"+ تراکنش جدید"}
          setIsOpen={setIsOpen}
        />
      </div>
      <div className="detail__boxes">
        {detailBoxes.map((box) => {
          const ICON = box.icon;
          return (
            <DetailBox
              key={box.id}
              icon={<ICON />}
              title={box.title}
              value={box.price}
              desc={box.desc}
              iconColor={box.iconColor}
            />
          );
        })}
      </div>
      <div className="transactions">
        <div className="transactions__header">
          <TransactionList />
        </div>
      </div>
      <div className="modal">
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Transaction;
