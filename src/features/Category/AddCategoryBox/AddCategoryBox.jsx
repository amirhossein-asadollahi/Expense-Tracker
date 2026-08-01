import { AVAILABLE_ICONS } from "../../../utils/availableIcons";
import "./AddCategoryBox.css";
import React, { useContext, useState } from "react";
import FinanceContext from "../../../Contexts/FinanceContext/FinanceContext";

const AddCategoryBox = () => {
  const [categoryTitle, setCategoryTitle] = useState("");
  const [iconTitle, setIconTitle] = useState(
    AVAILABLE_ICONS[0]?.id || "food_basket",
  );
  const [iconColor, setIconColor] = useState(
    AVAILABLE_ICONS[0]?.color || "#10b981",
  );
  const { addCategory } = useContext(FinanceContext);
  const setIconHandler = (e) => {
    const selectedIcon = e.target.value;
    const findIconId = AVAILABLE_ICONS.find((item) => item.id === selectedIcon);
    setIconTitle(selectedIcon);
    if (findIconId) {
      setIconColor(findIconId.color);
    }
  };
  const addCategoryHandler = () => {
    if (!categoryTitle.trim()) return;
    const newCategory = {
      name: categoryTitle,
      icon: iconTitle,
      color: iconColor,
      created_at: new Date().toISOString(),
    };
    addCategory(newCategory);
    setCategoryTitle("");
    setIconTitle(AVAILABLE_ICONS[0]?.id || "food_basket");
    setIconColor(AVAILABLE_ICONS[0]?.color || "#10b981");
  };
  return (
    <div className="add__category">
      <h2 className="add__category-title">افزودن دسته بندی جدید</h2>
      <div className="category__inputs">
        <div className="category-detail">
          <label htmlFor="title" className="category-text">
            نام دسته بندی
          </label>
          <input
            value={categoryTitle}
            onChange={(e) => setCategoryTitle(e.target.value)}
            type="text"
            name="title"
            className="category-detail-input"
            placeholder="مثال: خوراک و مواد غذایی"
          />
        </div>
        <div className="category-detail">
          <label htmlFor="icon" className="category-text">
            نوع دسته بندی
          </label>
          <select
            value={iconTitle}
            onChange={setIconHandler}
            name="icon"
            className="category-detail-input"
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
        <button className="add-category-btn" onClick={addCategoryHandler}>
          + افزودن دسته بندی
        </button>
      </div>
    </div>
  );
};

export default AddCategoryBox;
