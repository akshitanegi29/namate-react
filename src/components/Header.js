import { LOGO_URL } from "../../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const {loggedInUser} = useContext(UserContext);
  return (
    <div className="flex justify-between border-black border-2 m-2">
      <div className="logo-container w-24">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex py-6 px-3">
          <li className="p-2">
            <Link to="/">Home</Link>
            </li>
          <li className="p-2">
            <a href="/about">About Us</a>
            </li>
          <li className="p-2">
            <Link to="contact">Contact Us</Link>
            </li>
          <li className="p-2">Cart</li>
          <li className="p-2"><Link to="grocery">GroceryMart</Link></li>
          <li className="py-2 px-1"> {useOnlineStatus() ? "🟢": "🔴"}</li>
          <button
            className="login-toggle p-2 bg-red-300 rounded-lg"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
          <li className="p-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
