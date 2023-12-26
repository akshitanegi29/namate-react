import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li> {useOnlineStatus() ? "🟢": "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
            </li>
          <li>
            <a href="/about">About Us</a>
            </li>
          <li>
            <Link to="contact">Contact Us</Link>
            </li>
          <li>Cart</li>
          <li><Link to="grocery">GroceryMart</Link></li>
          <button
            className="login-toggle"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
