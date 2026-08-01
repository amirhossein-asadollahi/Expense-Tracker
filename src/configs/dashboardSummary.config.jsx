import { FaArrowDown, FaArrowUp, FaChartLine } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import formatCurrency from "../utils/formatCurrency";

export const Summaries = [
    {
        id:1,
        icon:<GrTransaction />,
        title:'تعداد تراکنش ها',
        value:'48 مورد',
        iconColor:'--color-chart-food'
    },
    {
        id:2,
        icon:<FaChartLine />,
        title:'میانگین هزینه روزانه',
        value:formatCurrency("43000"),
        iconColor:'--color-chart-food'
    },
    {
        id:3,
        icon:<FaArrowDown />,
        title:'بیشترین هزینه',
        value:formatCurrency(24000000),
        iconColor:'--color-expense'
    },
    {
        id:4,
        icon:<FaArrowUp />,
        title:'بیشترین درآمد',
        value:formatCurrency(32000000),
        iconColor:'--color-income'
    },
    
]