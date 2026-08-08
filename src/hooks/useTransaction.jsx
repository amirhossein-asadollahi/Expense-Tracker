import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import FinanceContext from "../Contexts/FinanceContext/FinanceContext";
import FormatTrx from "../components/UI/FormatTrx/FormatTrx";
// Helper functions for detail boxes
const useTransaction = () => {
  const { transaction, category } = useContext(FinanceContext);
  const [allTrxs, setAllTrxs] = useState();
  const [allCategories, setAllCategories] = useState();
  const allIcomes = transaction?.filter((item) => {
    return item.trx_type === "i";
  });
  const addUpIncomes = allIcomes?.reduce((prev, curr) => {
    return prev + curr.amount;
  }, 0);

  const allExpenses = transaction?.filter((item) => {
    return item.trx_type === "e";
  });
  const addUpExpenses = allExpenses?.reduce((prev, curr) => {
    return prev + curr.amount;
  }, 0);

  useEffect(() => {
    const trxCount = transaction.length;
    setAllTrxs(trxCount);
  }, [transaction, allTrxs]);

  useEffect(() => {
    const categoryCount = category.length;
    setAllCategories(categoryCount);
  }, [category, allCategories]);

  const categoryInfo = useCallback(
    (categoryId) => {
      const currentCategoryTrx =
        transaction?.filter((trx) => trx.category === categoryId) || [];
      let incomeSum = 0;
      let expenseSum = 0;
      currentCategoryTrx.forEach((item) => {
        if (item.trx_type === "e") expenseSum += item.amount;
        if (item.trx_type === "i") incomeSum += item.amount;
      });
      const negativeCheck = incomeSum - expenseSum < 0;
      return {
        filteredCount: currentCategoryTrx?.length,
        displayAmount: negativeCheck ? expenseSum : incomeSum,
        isNegative: negativeCheck,
        id: categoryId,
      };
    },
    [transaction],
  );

  const calculateSavingUp = () => {
    const savingCategoryIds = new Set(
      category
        .filter((cat) => cat.icon === "wallet_savings")
        .map((item) => item.id),
    );
    return transaction.reduce((sum, trx) => {
      return savingCategoryIds.has(trx.category) ? sum + trx.amount : sum;
    }, 0);
  };

  const expenseAvarage = () => {
    return Number(addUpExpenses / allExpenses.length).toFixed(0);
  };

  const mostIncome = () => {
    const maxIncome = allIcomes.reduce((max, curr) => {
      return max > curr.amount ? max : curr.amount;
    }, allIcomes[0]?.amount);
    return maxIncome;
  };

  const mostExpense = () => {
    const maxExpense = allExpenses.reduce((max, curr) => {
      return max > curr.amount ? max : curr.amount;
    }, allIcomes[0]?.amount);
    return maxExpense;
  };

  const calculateBalance = addUpIncomes - addUpExpenses;
  return {
    addUpIncomes,
    addUpExpenses,
    allTrxs,
    allCategories,
    categoryInfo,
    calculateBalance,
    calculateSavingUp,
    expenseAvarage,
    mostIncome,
    mostExpense,
  };
};

export default useTransaction;
