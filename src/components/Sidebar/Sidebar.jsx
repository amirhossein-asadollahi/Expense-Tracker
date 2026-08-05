import React from "react";
import "./Sidebar.css";
import SidebarLogo from "./SidebarHeader/SidebarHeader";
import SidebarItem from "./SidebarItem/SidebarItem";
import { ImHome } from "react-icons/im";
import { GrTransaction } from "react-icons/gr";
import { TbCategory } from "react-icons/tb";
import { MdInsertChartOutlined } from "react-icons/md";
import { PiTargetBold } from "react-icons/pi";
import { NavLink } from "react-router";
import { navItems } from "../../configs/sidebarItem.config";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <SidebarLogo />
      <div className="sidebar__items">
        <ul className="sidebar__items-ul">
          {navItems.map((navItem) => {
            return (
              <li key={navItem.to} className="sidebar__items-li">
                <NavLink
                  to={navItem.to}
                  end={navItem.end}
                  className={({ isActive }) =>
                    isActive ? "sidebar__link sidebar--active" : "sidebar__link"
                  }
                >
                  <SidebarItem title={navItem.title} logo={navItem.icon} />
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
