import { Link } from "react-router";
import "./NotFound.css";

import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="notfound">
        <h1 className="notfound__code">404</h1>
        <h2 className="notfound__text">صفحه مورد نظر یافت نشد!</h2>
        <button className="redirect__dashboard">
          <Link to={"/"}>داشبورد</Link>
        </button>
      </div>
    </>
  );
};

export default NotFound;
