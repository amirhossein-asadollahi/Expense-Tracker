import "./Category.css";

import React, { useState } from "react";
import ContentHeader from "../../components/UI/ContentHeader/ContentHeader";
import ThemeIcon from "../../components/UI/ThemeIcon/ThemeIcon";
import CategoryDetailBoxes from "../../features/Category/CategoryDetailBoxes/CategoryDetailBoxes";
import CategoryList from "../../features/Category/CategoryList/CategoryList";
import AddCategoryBox from "../../features/Category/AddCategoryBox/AddCategoryBox";
import useFetch from "../../hooks/useFetch";

const Category = () => {
  return (
    <div className="category">
      <div className="content__header">
        <ContentHeader
          title={"دسته بندی"}
          description={"دسته بندی های مالی شما"}
        />
      </div>
      <div className="data__box">
        <CategoryDetailBoxes />
      </div>
      <div className="category__show">
        <div className="category__list">
          <CategoryList />
        </div>
        <div className="category__add">
          <AddCategoryBox />
        </div>
      </div>
    </div>
  );
};

export default Category;
