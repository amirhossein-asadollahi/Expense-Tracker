import "./SidebarItem.css";

import React from "react";

const SidebarItem = ({ title, logo }) => {
  return (
    <div className="sidebar__item">
      <span className="sidebar__item-logo">{logo}</span>
      <p className="sidebar__item-title">{title}</p>
    </div>
  );
};

export default SidebarItem;
