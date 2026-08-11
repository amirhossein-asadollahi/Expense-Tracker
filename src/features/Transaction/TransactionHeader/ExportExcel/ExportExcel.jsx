import React from "react";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { utils, writeFileXLSX } from "xlsx";
import { convertToPersianDate } from "../../../../utils/formatDate";
import "./ExportExcel.css";

//this component geberated by AI
const ExportExcel = ({ transaction }) => {
  const exportExcelHandler = () => {
    const formattedData = transaction?.map((item) => ({
      "عنوان تراکنش": item.title,
      تاریخ: convertToPersianDate(item.created_at),
      "نوع تراکنش": item.trx_type === "e" ? "هزینه" : "درآمد",
      "مبلغ (تومان)": item.amount,
      توضیحات: item.note,
    }));

    const worksheet = utils.json_to_sheet(formattedData);

    if (!worksheet["!views"]) {
      worksheet["!views"] = [];
    }

    worksheet["!views"].push({
      RTL: true,
    });

    worksheet["!cols"] = [
      { wch: 15 },
      { wch: 12 },
      { wch: 12 },
      { wch: 15 },
      { wch: 25 },
    ];

    const workbook = utils.book_new();

    utils.book_append_sheet(workbook, worksheet, "تراکنش‌ها");

    writeFileXLSX(workbook, "Transactions_Report.xlsx");
  };

  return (
    <button className="table__header-excel" onClick={exportExcelHandler}>
      خروجی اکسل
      <PiMicrosoftExcelLogo />
    </button>
  );
};

export default ExportExcel;
