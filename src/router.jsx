import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Transaction from "./pages/Transaction/Transaction";
import Category from "./pages/Category/Category";
import Report from "./pages/Report/Report";
import FinancialGoal from "./pages/FinancialGoal/FinancialGoal";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "transaction", element: <Transaction /> },
      { path: "category", element: <Category /> },
      { path: "report", element: <Report /> },
      { path: "financialgoal", element: <FinancialGoal /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
