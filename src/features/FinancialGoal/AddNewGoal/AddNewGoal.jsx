import React, { useContext, useState } from "react";
import "./AddNewGoal.css";
import { GoGoal } from "react-icons/go";
import FormatTrx from "../../../components/UI/FormatTrx/FormatTrx";
import FinanceContext from "../../../Contexts/FinanceContext/FinanceContext";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { faIR } from "date-fns-jalali/locale";
import { AVAILABLE_ICONS } from "../../../utils/availableIcons";

registerLocale("fa-IR", faIR);
const AddNewGoal = () => {
  const { addGoal } = useContext(FinanceContext);
  const [goalTitle, setGoalTitle] = useState("");
  const [goalTargetAmount, setGoalTargetAmount] = useState("");
  const [goalTargetDate, setGoalTargetDate] = useState(new Date());
  const [iconTitle, setIconTitle] = useState(
    AVAILABLE_ICONS[0]?.id || "food_basket",
  );
  const [iconColor, setIconColor] = useState(
    AVAILABLE_ICONS[0]?.color || "#10b981",
  );
  const setIconHandler = (e) => {
    const selectedIcon = e.target.value;
    const findIconId = AVAILABLE_ICONS.find((item) => item.id === selectedIcon);
    setIconTitle(selectedIcon);
    if (findIconId) {
      setIconColor(findIconId.color);
    }
  };
  const addNewGoalHandler = () => {
    const isoDate = goalTargetDate ? goalTargetDate.toISOString() : null;
    const newGoal = {
      title: goalTitle,
      target_amount: goalTargetAmount,
      current_amount: "0",
      target_date: isoDate,
      icon: iconTitle,
      color: iconColor,
      status: "a",
    };
    if (addGoal) addGoal(newGoal);
    setGoalTitle("");
    setGoalTargetAmount("");
    setGoalTargetDate(new Date());
    setIconTitle(AVAILABLE_ICONS[0]?.id || "food_basket");
    setIconColor(AVAILABLE_ICONS[0]?.color || "#10b981");
  };
  console.log(goalTargetDate);
  return (
    <>
      <div className="new__goal">
        <div className="new__goal-head">
          <span className="new__goal-icon">
            <GoGoal />
          </span>
          <h2 className="new__goal-title">افزودن هدف جدید</h2>
        </div>
        <div className="goal__input-container">
          <label htmlFor="goal-title" className="input-label">
            نام هدف
          </label>
          <input
            value={goalTitle}
            onChange={(e) => setGoalTitle(e.target.value)}
            type="text"
            name="goal-title"
            className="goal__input"
            placeholder="مثال: خرید ماشین"
          />
        </div>
        <div className="goal__input-container">
          <label htmlFor="goal-amount" className="input-label">
            مبلغ هدف(تومان)
          </label>
          <input
            value={goalTargetAmount}
            onChange={(e) => setGoalTargetAmount(e.target.value)}
            type="text"
            name="goal-amount"
            className="goal__input"
            placeholder={`مثال: 50,000,000`}
          />
        </div>
        <div className="goal__input-container">
          <label htmlFor="goal-date" className="input-label">
            تاریخ هدف
          </label>
          <DatePicker
            selected={goalTargetDate}
            onChange={(date) => setGoalTargetDate(date)}
            locale={faIR} // فعال‌سازی زبان و تقویم شمسی
            calendarStartDay={6}
            dateFormat="yyyy/MM/dd"
            className="goal__input date-input"
          />
        </div>
        <div className="goal__input-container">
          <label htmlFor="goal-icon" className="input-label">
            نوع هدف
          </label>
          <select
            value={iconTitle}
            onChange={setIconHandler}
            name="goal-icon"
            className="goal__input"
            placeholder=""
          >
            {AVAILABLE_ICONS.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <button className="add-goal-btn" onClick={addNewGoalHandler}>
          + افزودن هدف
        </button>
      </div>
    </>
  );
};

export default AddNewGoal;
