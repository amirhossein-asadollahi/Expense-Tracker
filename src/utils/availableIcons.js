import {
  FaCar,
  FaHome,
  FaGamepad,
  FaHeart,
  FaGraduationCap,
  FaMoneyBillWave,
  FaPlane,
  FaShoppingBasket,
  FaUtensils,
  FaDumbbell,
  FaGift,
  FaBriefcase,
} from "react-icons/fa";
import { IoWallet, IoReceipt, IoSettings, IoMedical } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { FaMobileScreenButton, FaShirt } from "react-icons/fa6";

export const AVAILABLE_ICONS = [
  {
    id: "food_basket",
    component: FaShoppingBasket,
    label: "خرید روزمره و سوپرمارکت",
    color: "#10b981",
  },
  {
    id: "restaurant_food",
    component: FaUtensils,
    label: "رستوران و کافه",
    color: "#f59e0b",
  },
  {
    id: "transport_car",
    component: FaCar,
    label: "حمل و نقل و خودرو",
    color: "#3b82f6",
  },
  {
    id: "home_house",
    component: FaHome,
    label: "مسکن و اجاره‌بها",
    color: "#8b5cf6",
  },
  {
    id: "entertainment_game",
    component: FaGamepad,
    label: "تفریح و سرگرمی",
    color: "#ec4899",
  },
  {
    id: "bills_receipt",
    component: IoReceipt,
    label: "قبوض و خدمات عمومی",
    color: "#64748b",
  },
  {
    id: "income_money",
    component: FaMoneyBillWave,
    label: "حقوق و دستمزد",
    color: "#059669",
  },
  {
    id: "health_medical",
    component: IoMedical,
    label: "دارو و درمان",
    color: "#ef4444",
  },
  {
    id: "education_cap",
    component: FaGraduationCap,
    label: "آموزش و تحصیلات",
    color: "#0284c7",
  },
  {
    id: "wallet_savings",
    component: IoWallet,
    label: "پس‌انداز و سرمایه‌گذاری",
    color: "#d97706",
  },
  {
    id: "bank_card",
    component: CiCreditCard1,
    label: "اقساط و کارت اعتباری",
    color: "#4f46e5",
  },
  {
    id: "travel_plane",
    component: FaPlane,
    label: "سفر و گردشگری",
    color: "#06b6d4",
  },
  {
    id: "sports_fitness",
    component: FaDumbbell,
    label: "ورزش و باشگاه",
    color: "#ea580c",
  },
  {
    id: "clothing_apparel",
    component: FaShirt,
    label: "پوشاک و مد",
    color: "#a855f7",
  },
  {
    id: "gifts_donations",
    component: FaGift,
    label: "هدیه و کادو",
    color: "#f43f5e",
  },
  {
    id: "business_freelance",
    component: FaBriefcase,
    label: "کسب‌وکار و پروژه‌ها",
    color: "#1e293b",
  },
  {
    id: "tech_subscriptions",
    component: FaMobileScreenButton,
    label: "شارژ و اشتراک‌ها",
    color: "#6366f1",
  },
  {
    id: "others_settings",
    component: IoSettings,
    label: "متفرقه و عمومی",
    color: "#94a3b8",
  },
];

// تابع فوق‌العاده کاربردی برای رندر داینامیک آیکون در جدول‌ها
export const getIconComponent = (iconCode) => {
  const iconObj = AVAILABLE_ICONS.find((item) => item.id === iconCode);
  return iconObj ? iconObj.component : IoSettings; // اگر پیدا نشد سورس پیش‌فرض
};

export const getIconColor = (iconColor) => {
  const iconCodeColor = AVAILABLE_ICONS.find((item) => item.id === iconColor);
  return iconCodeColor ? iconCodeColor.color : "#94a3b8"; // اگر پیدا نشد سورس پیش‌فرض
};
