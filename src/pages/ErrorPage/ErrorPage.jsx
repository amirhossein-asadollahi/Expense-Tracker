import { Link } from "react-router";
import "./ErrorPage.css";

import React from "react";

const ErrorPage = () => {
  return (
    <>
      <div className="notfound">
        <h1 className="notfound__code">ERROR</h1>
        <h2 className="notfound__text">مشکلی پیش آمده!!!</h2>
        <button className="redirect__dashboard">
          <Link to={"/"}>داشبورد</Link>
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
