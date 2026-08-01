import { FaArrowUp } from "react-icons/fa";
import DetailBox from "../../../components/UI/DetailBox/DetailBox";
import "./CategoryDetailBoxes.css";
import React from "react";
import FormatTrx from "../../../components/UI/FormatTrx/FormatTrx";
import useTransaction from "../../../hooks/useTransaction";
import { TbChecklist } from "react-icons/tb";

const CategoryDetailBoxes = () => {
  const { allCategories } = useTransaction();
  return (
    <div className="detail">
      <div className="box">
        <DetailBox
          icon={<TbChecklist />}
          title={"تعداد دسته بندی"}
          value={<FormatTrx value={allCategories} />}
          desc={"توضیحات"}
          iconColor={"--color-balance"}
        />
      </div>
      <div className="box">
        <DetailBox
          icon={<FaArrowUp />}
          title={"درآمد"}
          value={"23000"}
          desc={"توضیحات"}
          iconColor={"--color-balance"}
        />
      </div>
      <div className="box">
        <DetailBox
          icon={<FaArrowUp />}
          title={"درآمد"}
          value={"23000"}
          desc={"توضیحات"}
          iconColor={"--color-balance"}
        />
      </div>
      <div className="box">
        <DetailBox
          icon={<FaArrowUp />}
          title={"درآمد"}
          value={"23000"}
          desc={"توضیحات"}
          iconColor={"--color-balance"}
        />
      </div>
    </div>
  );
};

export default CategoryDetailBoxes;
