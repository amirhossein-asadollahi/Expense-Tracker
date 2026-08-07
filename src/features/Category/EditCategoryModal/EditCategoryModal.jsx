import React, { useContext, useState } from "react";
import "./EditCategoryModal.css";
import FinanceContext from "../../../Contexts/FinanceContext/FinanceContext";
import { AVAILABLE_ICONS } from "../../../utils/availableIcons";
import { IoMdClose } from "react-icons/io";
const EditCategoryModal = ({ setIsOpen, categoryId }) => {
  const { category, editCategory } = useContext(FinanceContext);
  const foundCategory = category?.find((cat) => cat.id === categoryId);
  const [editName, setEditName] = useState(foundCategory?.name);
  const [editIcon, setEditIcon] = useState(foundCategory?.icon);
  const editCategoryHandler = () => {
    const editCat = {
      name: editName,
      icon: editIcon,
    };
    editCategory(categoryId, editCat);
    setIsOpen(false);
  };
  return (
    <>
      <div className="edit__modal">
        <div className="edit__modal-content">
          <div className="modal__head">
            <h2 className="modal__head-title">ویرایش دسته بندی</h2>
            <button className="modal__head-btn" onClick={() => setIsOpen(true)}>
              <IoMdClose />
            </button>
          </div>
          <div className="edit__modal-form">
            <div className="edit__modal-form--inputs">
              <label htmlFor="edit-title" className="edit__modal-form--label">
                عنوان دسته بندی
              </label>
              <input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                type="text"
                name="edit-title"
                className="edit__modal-input"
              />
            </div>
            <div className="edit__modal-form--inputs">
              <label htmlFor="edit-type" className="edit__modal-form--label">
                نوع دسته بندی
              </label>
              <select
                value={editIcon}
                onChange={(e) => setEditIcon(e.target.value)}
                type="text"
                name="edit-type"
                className="edit__modal-input"
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
              onClick={editCategoryHandler}
            >
              ثبت
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCategoryModal;
