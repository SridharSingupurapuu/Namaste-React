import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="HeaderContainer">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="list-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>
            <a>Cart</a>
          </li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
            className="btnName"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
