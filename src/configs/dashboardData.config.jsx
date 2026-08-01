import { CiCreditCard1 } from "react-icons/ci";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import FormatTrx from "../components/UI/FormatTrx/FormatTrx";
export const detailBoxes = [
  {
    id: 1,
    icon: CiCreditCard1,
    title: "موجودی کل",
    price: <FormatTrx value={"23000000"} />,
    desc: "کل دارایی شما",
    iconColor: "--color-chart-food",
  },
  {
    id: 2,
    icon: FaArrowUp,
    title: "کل درآمدها",
    price: 12000000,
    desc: "کل درآمد شما",
    iconColor: "--color-income",
  },
  {
    id: 3,
    icon: FaArrowDown,
    title: "کل هزینه ها",
    price: 32000000,
    desc: "کل هزینه های شما",
    iconColor: "--color-expense",
  },
  {
    id: 4,
    icon: IoWallet,
    title: "پس انداز",
    price: 32000000,
    desc: "پس انداز کل شما",
    iconColor: "--color-savings",
  },
];
