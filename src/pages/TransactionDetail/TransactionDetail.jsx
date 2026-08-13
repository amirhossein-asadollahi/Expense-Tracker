import React, { useContext } from "react";
import "./TransactionDetail.css";
import { Link, useNavigate, useParams } from "react-router";
import FinanceContext from "../../Contexts/FinanceContext/FinanceContext";
import ContentHeader from "../../components/UI/ContentHeader/ContentHeader";
import { BiTrash } from "react-icons/bi";
import { getIconColor, getIconComponent } from "../../utils/availableIcons";
import FormatTrx from "../../components/UI/FormatTrx/FormatTrx";
import { convertToPersianDate } from "../../utils/formatDate";

const TransactionDetail = () => {
  const { trxId } = useParams();
  const navigate = useNavigate();
  const { transaction, category, removeTransaction } =
    useContext(FinanceContext);
  const foundTrx = transaction.find((trx) => trx.id === Number(trxId)) || [];
  const foundCategory =
    category.find((cat) => cat.id === foundTrx.category) || [];
  const ICON = getIconComponent(foundCategory.icon);
  const ICON_COLOR = getIconColor(foundCategory.color);
  const iconBgColor = `${ICON_COLOR}1a`;
  const removeTrxHandler = () => {
    removeTransaction(foundTrx.id);
    navigate("/transaction");
  };
  return (
    <>
      <ContentHeader title={"جزئیات تراکنش"} description={foundTrx.title} />
      <div className="trx__datail">
        <div className="trx__detail-header">
          <h3 className="trx__detail-header--title">اطلاعات تراکنش</h3>
          <div className="trx_detail-actions">
            <button className="action-trx del" onClick={removeTrxHandler}>
              <BiTrash />
              حذف
            </button>
          </div>
        </div>
        <div className="trx__type">
          <div className="trx__type-icon-div">
            <span
              style={{ backgroundColor: iconBgColor, color: ICON_COLOR }}
              className="trx__type-icon"
            >
              <ICON />
            </span>
          </div>
          <div className="trx__type-amount">
            <span className="trx__type-amount--title">مبلغ تراکنش</span>
            <span className="trx__type-amount--value">
              {<FormatTrx value={foundTrx.amount} type={foundTrx.trx_type} />}
            </span>
            <span className="trx__type-amount--toman">تومان</span>
          </div>
        </div>
        <div className="trx__info">
          <div className="trx__info-item">
            <span className="trx__info-item--title">عنوان تراکنش :</span>
            <span className="trx__info-item--value">{foundTrx.title}</span>
          </div>
          <div className="trx__info-item">
            <span className="trx__info-item--title">یادداشت تراکنش :</span>
            <span className="trx__info-item--value">{foundTrx.note}</span>
          </div>
          <div className="trx__info-item">
            <span className="trx__info-item--title">نوع تراکنش :</span>
            <span className="trx__info-item--value">
              {foundTrx.trx_type === "e" ? "هزینه" : "درآمد"}
            </span>
          </div>
          <div className="trx__info-item">
            <span className="trx__info-item--title">تاریخ تراکنش :</span>
            <span className="trx__info-item--value">
              {convertToPersianDate(foundTrx.created_at)}
            </span>
          </div>
          <div className="trx__info-item">
            <span className="trx__info-item--title">دسته بندی تراکنش :</span>
            <span className="trx__info-item--value">{foundCategory.name}</span>
          </div>
        </div>
      </div>
      <Link to={"/transaction"} className="redirect__transaction">
        بازگشت به تراکنش ها
      </Link>
    </>
  );
};

export default TransactionDetail;
