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
        IT Courses Bot
      </Link>
    </div>
    {
      <div
        className="pointer danger"
        onClick={() => {
          cookies.remove("users_id");
          cookies.remove("user_name");
          cookies.remove("user_email");
          alert("Logged out successfully");
          window.location.reload();
        }}
      >
        Logout
      </div>
    }
  </nav>
);

export default Header;
