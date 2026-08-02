import { CiCreditCard1 } from "react-icons/ci";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import FormatTrx from "../components/UI/FormatTrx/FormatTrx";
import useTransaction from "../hooks/useTransaction";
import { TbCategory } from "react-icons/tb";

const useDetailBoxes = (firstBoxId, secondBoxId) => {
  const {
    addUpIncomes,
    addUpExpenses,
    calculateBalance,
    calculateSavingUp,
    allTrxs,
    allCategories,
  } = useTransaction();

  const detailBoxes = [
    {
      id: 1,
      icon: CiCreditCard1,
      title: "موجودی کل",
      price: Math.abs(calculateBalance),
      desc: "کل دارایی شما",
      iconColor: "--color-chart-food",
    },
    {
      id: 2,
      icon: CiCreditCard1,
      title: "تعداد تراکنش ها",
      price: allTrxs,
      desc: "کل تراکنش های شما",
      iconColor: "--color-chart-food",
    },
    {
      id: 3,
      icon: TbCategory,
      title: "تعداد دسته بندی ها",
      price: allCategories,
      desc: "کل دسته بندی های شما",
      iconColor: "--color-chart-food",
    },
    {
      id: 4,
      icon: FaArrowUp,
      title: "کل درآمدها",
      price: addUpIncomes,
      desc: "کل درآمد شما",
      iconColor: "--color-income",
    },
    {
      id: 5,
      icon: FaArrowDown,
      title: "کل هزینه ها",
      price: addUpExpenses,
      desc: "کل هزینه های شما",
      iconColor: "--color-expense",
    },
    {
      id: 6,
      icon: IoWallet,
      title: "پس انداز",
      price: calculateSavingUp(),
      desc: "پس انداز کل شما",
      iconColor: "--color-savings",
    },
  ];
  const filteredBoxes = detailBoxes.filter(
    (item) => item.id !== firstBoxId && item.id !== secondBoxId,
  );
  return filteredBoxes;
};

export default useDetailBoxes;
