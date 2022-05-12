import React from "react";
import { Link } from "react-router-dom";

import "../style/navbar.scss";

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/contact">CONTACT</Link>
      <Link to="/store">STORE</Link>
    </div>
  );
}
