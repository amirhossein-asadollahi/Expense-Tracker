import React, { useContext, useState } from "react";
import "./EditGoalModal.css";
import FinanceContext from "../../../Contexts/FinanceContext/FinanceContext";
import DatePicker from "react-datepicker";
import { faIR } from "date-fns-jalali/locale";
import { IoMdClose } from "react-icons/io";
const EditGoalModal = ({ setIsOpen, goalId }) => {
  const { goal, editGoal } = useContext(FinanceContext);
  const foundGoal = goal?.find((item) => item.id === goalId);
  const [editTitle, setEditTitle] = useState(foundGoal?.title);
  const [editTargetAmount, setEditTargetAmount] = useState(
    foundGoal?.target_amount,
  );
  const [editCurrentAmount, setEditCurrentAmount] = useState(
    foundGoal?.current_amount,
  );
  const [editTargetDate, setEditTargetDate] = useState(foundGoal?.target_date);
  const [editIcon, setEditIcon] = useState(foundGoal?.icon);
  const editGoalHandler = () => {
    const isComplete = Number(editCurrentAmount) >= Number(editTargetAmount);
    const editFinanceGoal = {
      title: editTitle,
      target_amount: editTargetAmount,
      current_amount: editCurrentAmount,
      target_date: editTargetDate,
      icon: editIcon,
      status: isComplete ? "c" : "a",
    };
    editGoal(goalId, editFinanceGoal);
    setIsOpen(false);
  };
  return (
    <>
      <div className="edit__modal">
        <div className="edit__modal-content">
          <div className="modal__head">
            <h2 className="modal__head-title">ویرایش هدف</h2>
            <button className="modal__head-btn" onClick={() => setIsOpen(true)}>
              <IoMdClose />
            </button>
          </div>
          <div className="edit__modal-form">
            <div className="edit__modal-form--inputs">
              <label htmlFor="edit-title" className="edit__modal-form--label">
                عنوان هدف
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
                مبلغ هدف
              </label>
              <input
                value={editTargetAmount}
                onChange={(e) => setEditTargetAmount(e.target.value)}
                type="text"
                name="edit-note"
                className="edit__modal-input"
              />
            </div>
            <div className="edit__modal-form--inputs">
              <label htmlFor="edit-amount" className="edit__modal-form--label">
                مبلغ فعلی
              </label>
              <input
                value={editCurrentAmount}
                onChange={(e) => setEditCurrentAmount(e.target.value)}
                type="text"
                name="edit-amount"
                className="edit__modal-input"
              />
            </div>
            <div className="edit__modal-form--inputs">
              <label htmlFor="edit-type" className="edit__modal-form--label">
                نوع هدف
              </label>
              <select
                value={editIcon}
                onChange={(e) => setEditIcon(e.target.value)}
                type="text"
                name="edit-type"
                className="edit__modal-input"
              >
                <option value="e">هزینه</option>
                <option value="i">درآمد</option>
              </select>
            </div>
            <div className="edit__modal-form--inputs">
              <label htmlFor="">تاریخ هدف</label>
              <DatePicker
                selected={editTargetDate}
                onChange={(date) => setEditTargetDate(date)}
                locale={faIR} // فعال‌سازی زبان و تقویم شمسی
                calendarStartDay={6}
                dateFormat="yyyy/MM/dd"
                className="goal__input date-input"
              />
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
              onClick={editGoalHandler}
            >
              ثبت
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditGoalModal;
