import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import "./styles.css";
const cookies = new Cookies();
const Header = () => (
  <nav className="header app_back">
    <div className="header_title">
      <Link
        style={{ fontSize: "22px", fontWeight: "bold" }}
        to={"/"}
        className="white bold"
      >
        Bot-E
      </Link>
    </div>
  </nav>
);

export default Header;
