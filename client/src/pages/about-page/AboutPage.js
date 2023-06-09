import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div>
      <Link to={"/home"} replace={true}>
        Home
      </Link>
      <h3>About Us</h3>
      <p>We are a great</p>
    </div>
  );
}

export default AboutPage;
