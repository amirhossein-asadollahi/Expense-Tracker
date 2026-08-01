import { RiShoppingCartFill } from "react-icons/ri";
import "./SidebarCategory.css";
import SidebarCategoryItem from './SidebarCtegoryItem/SidebarCtegoryItem'
import React from "react";
import { FaCarAlt, FaFileContract } from "react-icons/fa";
import { IoIosMore, IoLogoGameControllerB } from "react-icons/io";

const SidebarCategory = () => {
  return (
    <div className="sidebar__category">
      <div className="sidebar__category-header">
        <p className="sidebar__category-header--title">دسته بندی ها</p>
        <a href="#" className="sidebar__category-header--link">+ افزودن دسته بندی</a>
      </div>
      <ul className="sidebar__category-items">
        <li className="sidebar__category-item-li">
          <SidebarCategoryItem
            title={"خوراک و مواد غذایی"}
            logo={<RiShoppingCartFill />}
            count={24}
          />
        </li>
        <li className="sidebar__category-item-li">
          <SidebarCategoryItem
            title={"حمل و نقل"}
            logo={<FaCarAlt />}
            count={18}
          />
        </li>
        <li className="sidebar__category-item-li">
          <SidebarCategoryItem
            title={"تفریح و سرگرمی"}
            logo={<IoLogoGameControllerB />}
            count={12}
          />
        </li>
        <li className="sidebar__category-item-li">
          <SidebarCategoryItem
            title={"قبوض و شارز"}
            logo={<FaFileContract />}
            count={10}
          />
        </li>
        <li className="sidebar__category-item-li">
          <SidebarCategoryItem title={"سایر"} logo={<IoIosMore />} count={9} />
        </li>
      </ul>
    </div>
  );
};

export default SidebarCategory;
