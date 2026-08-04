import { FaArrowUp } from "react-icons/fa";
import DetailBox from "../../../components/UI/DetailBox/DetailBox";
import "./CategoryDetailBoxes.css";
import React from "react";
import FormatTrx from "../../../components/UI/FormatTrx/FormatTrx";
import useTransaction from "../../../hooks/useTransaction";
import { TbChecklist } from "react-icons/tb";
import useDetailBoxes from "../../../hooks/useDetailBoxes";

const CategoryDetailBoxes = () => {
  const detailBoxes = useDetailBoxes(1, 2);
  return (
    <div className="detail">
      {detailBoxes.map((item) => {
        const ICON = item.icon;
        return (
          <div className="box">
            <DetailBox
              key={item.id}
              icon={<ICON />}
              title={item.title}
              value={item.price}
              desc={item.desc}
              iconColor={item.iconColor}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryDetailBoxes;
