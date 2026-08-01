import React, { useContext, useReducer } from "react";
import "./Modal.css";
import formatCurrency from "../../../utils/formatCurrency";
import FinanceContext from "../../../Contexts/FinanceContext/FinanceContext";
const reducer = (state, action) => {
  switch (action.type) {
    case "title":
      return {
        ...state,
        title: action.payload,
      };
    case "note":
      return {
        ...state,
        note: action.payload,
      };
    case "price":
      return {
        ...state,
        price: action.payload,
      };
    case "trxType":
      return {
        ...state,
        trxType: action.payload,
      };
    case "categoryNumber":
      return {
        ...state,
        categoryNumber: action.payload,
      };
    case "reset":
      return { ...initialFormState, categoryNumber: Number(action.payload) };
    default: {
      return state;
    }
  }
};

const initialFormState = {
  title: "",
  note: "",
  price: "",
  trxType: "e",
  categoryNumber: "",
};
const Modal = ({ isOpen, setIsOpen }) => {
  const { category, addTransaction } = useContext(FinanceContext);
  const [trx, dispatch] = useReducer(reducer, initialFormState);
  const clearInputs = () => {
    dispatch({ type: "reset", payload: category[0]?.id ?? "" });
  };

  const addTrxHandler = () => {
    const newTrx = {
      title: trx.title,
      amount: Number(trx.price),
      trx_type: trx.trxType,
      note: trx.note,
      category: Number(trx.categoryNumber),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    addTransaction(newTrx);
    clearInputs();
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && (
        <div className="modal__screen">
          <div className="modal__screen-form">
            <span
              className="close-x-btn"
              title="انصراف"
              onClick={() => setIsOpen(false)}
            >
              X
            </span>
            <div className="modal__screen-detail">
              <label htmlFor="transaction-title" className="detail-label">
                عنوان تراکنش
              </label>
              <input
                value={trx.title}
                onChange={(e) =>
                  dispatch({ type: "title", payload: e.target.value })
                }
                className="detail-input"
                type="text"
                name="transaction-title"
                placeholder="مثال : خرید لپ تاپ"
              />
            </div>
            <div className="modal__screen-detail">
              <label htmlFor="transaction-note" className="detail-label">
                یادداشت تراکنش
              </label>
              <input
                value={trx.note}
                onChange={(e) =>
                  dispatch({ type: "note", payload: e.target.value })
                }
                className="detail-input"
                type="text"
                name="transaction-note"
                placeholder="توضیحات اضافی تراکنش"
              />
            </div>
            <div className="modal__screen-detail">
              <label htmlFor="transaction-amount" className="detail-label">
                مبلغ
              </label>
              <input
                value={trx.price}
                onChange={(e) =>
                  dispatch({ type: "price", payload: e.target.value })
                }
                className="detail-input"
                type="text"
                name="transaction-amount"
                placeholder={formatCurrency("45000000")}
              />
            </div>
            <div className="modal__screen-detail">
              <label htmlFor="transaction-type" className="detail-label">
                نوع تراکنش
              </label>
              <select
                value={trx.trxType}
                name="transaction-type"
                onChange={(e) =>
                  dispatch({ type: "trxType", payload: e.target.value })
                }
                className="detail-input"
              >
                <option value="e">هزینه</option>
                <option value="i">درآمد</option>
              </select>
            </div>
            <div className="modal__screen-detail">
              <label htmlFor="transaction-category" className="detail-label">
                نوع تراکنش
              </label>
              <select
                value={trx.categoryNumber}
                name="transaction-category"
                onChange={(e) =>
                  dispatch({ type: "categoryNumber", payload: e.target.value })
                }
                className="detail-input"
              >
                {category.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
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
                onClick={addTrxHandler}
              >
                ثبت
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
