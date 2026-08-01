const formatCurrency = (value) => {
  return Number(value).toLocaleString("fa-IR") + " تومان";
};

export default formatCurrency;
