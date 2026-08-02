import "./Report.css";
import ContentHeader from "../../components/UI/ContentHeader/ContentHeader";
import ThemeIcon from "../../components/UI/ThemeIcon/ThemeIcon";
import React from "react";
import useDetailBoxes from "../../hooks/useDetailBoxes";
import DetailBox from "../../components/UI/DetailBox/DetailBox";
import FormatTrx from "../../components/UI/FormatTrx/FormatTrx";

const Report = () => {
  const detailBoxes = useDetailBoxes(2, 3);
  return (
    <>
      <div className="content__header">
        <ContentHeader title={"گزارش"} description={"گزارش های مالی شما"} />
      </div>
      <div className="detail-boxes-report">
        {detailBoxes.map((box) => {
          const ICON = box.icon;
          return (
            <DetailBox
              key={box.id}
              icon={<ICON />}
              title={box.title}
              value={box.price}
              desc={box.desc}
              iconColor={box.iconColor}
            />
          );
        })}
      </div>
    </>
  );
};

export default Report;
