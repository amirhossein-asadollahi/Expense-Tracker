import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./EditModal.css";
import FinanceContext from "../../../Contexts/FinanceContext/FinanceContext";

const EditModal = ({ title, setIsOpen, transactionId }) => {
  const { transaction, category, editTransaction } = useContext(FinanceContext);
  const foundTrx = transaction?.find((item) => item.id === transactionId);
  const foundCategory = category?.find((cat) => cat.id === foundTrx.category);
  console.log(foundCategory.name);
  const [editTitle, setEditTitle] = useState(foundTrx?.title);
  const [editNote, setEditNote] = useState(foundTrx?.note);
  const [editAmount, setEditAmount] = useState(foundTrx?.amount);
  const [editTrxType, setEditTrxType] = useState(foundTrx?.trx_type);
  const [editCategory, setEditCategory] = useState(foundCategory?.id);
  const editTrxHandler = () => {
    const editTrx = {
      title: editTitle,
      note: editNote,
      amount: editAmount,
      trx_type: editTrxType,
      category: editCategory,
      updated_at: new Date().toISOString(),
    };
    editTransaction(transactionId, editTrx);
    setIsOpen(false);
  };
  return (
    <>
      <div className="edit__modal">
        <div className="edit__modal-content">
          <div className="modal__head">
            <h2 className="modal__head-title">{title}</h2>
            <button className="modal__head-btn" onClick={() => setIsOpen(true)}>
              <IoMdClose />
            </button>
          </div>
          <div className="edit__modal-form">
            <div className="edit__modal-form--inputs">
              <label htmlFor="edit-title" className="edit__modal-form--label">
                عنوان تراکنش
              </label>
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                type="text"
                name="edit-title"
                className="edit__modal-input"
              />
            </div>
            <div className="edit__modal-form--inputs">
              <label htmlFor="edit-note" className="edit__modal-form--label">
                یادداشت
              </label>
              <input
                value={editNote}
                onChange={(e) => setEditNote(e.target.value)}
                type="text"
                name="edit-note"
                className="edit__modal-input"
              />
            </div>
            <div className="edit__modal-form--inputs">
              <label htmlFor="edit-amount" className="edit__modal-form--label">
                مبلغ
              </label>
              <input
                value={editAmount}
                onChange={(e) => setEditAmount(e.target.value)}
                type="text"
                name="edit-amount"
                className="edit__modal-input"
              />
            </div>
            <div className="edit__modal-form--inputs">
              <label htmlFor="edit-type" className="edit__modal-form--label">
                نوع تراکنش
              </label>
              <select
                value={editTrxType}
                onChange={(e) => setEditTrxType(e.target.value)}
                type="text"
                name="edit-type"
                className="edit__modal-input"
              >
                <option value="e">هزینه</option>
                <option value="i">درآمد</option>
              </select>
            </div>
            <div className="edit__modal-form--inputs">
              <label
                htmlFor="edit-category"
                className="edit__modal-form--label"
              >
                دسته بندی
              </label>
              <select
                value={editCategory}
                onChange={(e) => setEditCategory(e.target.value)}
                type="text"
                name="edit-category"
                className="edit__modal-input"
              >
                {category?.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="action-btns">
            <button
              className="action-transaction cancel"
              onClick={() => setIsOpen(false)}
            >
              انصراف
            </button>
            <button
              className="action-transaction submit"
              onClick={editTrxHandler}
            >
              ثبت
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;
