import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="ht-home">
      <Link className="ht-link" to={"/head-and-tail"}>
        Head And Tail
      </Link>
      <Link className="ht-link" to={"/about"}>
        About
      </Link>
      <Link
        className="ht-link"
        to={"/"}
        onClick={() => {
          localStorage.removeItem("access-token");
        }}
      >
        Logout
      </Link>
    </div>
  );
}

export default HomePage;
