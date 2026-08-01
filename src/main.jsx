import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/global.css";
import ThemeProvider from "./Contexts/ThemeContext/ThemeProvider.jsx";
import FinanceProvider from "./Contexts/FinanceContext/FinanceProvider.jsx";

createRoot(document.getElementById("root")).render(
  <FinanceProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </FinanceProvider>,
);
