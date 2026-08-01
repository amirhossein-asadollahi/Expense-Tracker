import React, { useEffect, useState } from "react";
import FinanceContext from "./FinanceContext.js";
import useFetch from "../../hooks/useFetch.jsx";
import Loading from "../../components/Loading/Loading.jsx";
const FinanceProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const {
    data: categoryData,
    loading: categoryLoading,
    error: categoryError,
  } = useFetch("http://127.0.0.1:8000/api/category/");
  const {
    data: transactionData,
    loading: transactionLoading,
    error: transactionError,
  } = useFetch("http://127.0.0.1:8000/api/transaction/");
  useEffect(() => {
    if (categoryData) {
      setCategory(categoryData);
    }
  }, [categoryData]);

  useEffect(() => {
    if (transactionData) {
      setTransaction(transactionData);
    }
  }, [transactionData]);

  const addCategory = async (newCategory) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/category/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCategory),
      });
      if (response.ok) {
        const createdCategory = await response.json();
        setCategory((prev) => [...prev, createdCategory]);
      } else {
        throw new Error(`سرور با خطا مواجه شد: ${response.status}`);
      }
    } catch (err) {
      console.log(`error: ${err}`);
    }
  };

  const addTransaction = async (newTransactio) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/transaction/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTransactio),
      });
      if (response.ok) {
        const createdTransaction = await response.json();
        setTransaction((prev) => [...prev, createdTransaction]);
      } else {
        throw new Error(`سرور با خطا مواجه شد: ${response.status}`);
      }
    } catch (err) {
      console.log(`error: ${err}`);
    }
  };

  const removeCategory = async (categoryId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/category/${categoryId}/`,
        {
          method: "DELETE",
        },
      );
      if (response.ok) {
        setCategory((prev) => prev.filter((cat) => cat.id !== category));
        setTransaction((prev) =>
          prev.filter((trx) => trx.category !== category),
        );
      } else {
        throw new Error(`سرور با خطا مواجه شد: ${response.status}`);
      }
    } catch (err) {
      console.log(`error: ${err}`);
    }
  };

  const removeTransaction = async (transactionId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/transaction/${transactionId}/`,
        {
          method: "DELETE",
        },
      );
      if (response.ok) {
        setTransaction((prev) =>
          prev.filter((trx) => trx.id !== transactionId),
        );
      } else {
        throw new Error(`سرور با خطا مواجه شد: ${response.status}`);
      }
    } catch (err) {
      console.log(`error: ${err}`);
    }
  };

  if (transactionLoading && categoryLoading) {
    return <Loading />;
  }
  return (
    <FinanceContext.Provider
      value={{
        category,
        transaction,
        addCategory,
        addTransaction,
        removeCategory,
        removeTransaction,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

export default FinanceProvider;
