import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { RouterProvider } from "react-router";
import router from './router'
const App = () => <RouterProvider router={router} />

export default App;
