import "./SidebarCtegoryItem.css";

import React from "react";

const SidebarCtegoryItem = ({ title, logo, count }) => {
  return (
    <div className="sidebar__category-item">
      <div className="sidebar__category-item--right">
        <span className="sidebar__category-item--logo">{logo}</span>
        <p className="sidebar__category-item--title">{title}</p>
      </div>
      <p className="sidebar__category-item--count">{count}</p>
    </div>
  );
};

export default SidebarCtegoryItem;
