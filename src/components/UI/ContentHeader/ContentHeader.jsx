import "./ContentHeader.css";
import ThemeIcon from "../ThemeIcon/ThemeIcon";
import React from "react";

const ContentHeader = ({ title, description, btn, setIsOpen }) => {
  return (
    <header className="header">
      <div className="header__right">
        <h1 className="header__title">{title}</h1>
        <p className="header__desc">{description}</p>
      </div>
      <div className="header__left">
        {btn && (
          <button className="header__btn" onClick={() => setIsOpen(true)}>
            {btn}
          </button>
        )}
        <ThemeIcon />
      </div>
    </header>
  );
};

export default ContentHeader;
