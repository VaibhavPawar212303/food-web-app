import Sidebar from "../Sidebar/Sidebar";
import {
  faHome,
  faCog,
  faFish,
  faBucket,
  faColonSign,
  faSign,
  faSignIn,
  faRegistered,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { cartContext } from "../Utilities/context";
import { Link } from "react-router-dom";
import Logo from "../Image/Logo.png";
function Navbar() {
  const cart = useContext(cartContext);
  const [ShowSidebar, setShowSidebar] = useState(false);

  const Links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Dishes",
      path: "/dishes",
      icon: faFish,
    },
    {
      name: "Order",
      path: "/orders",
      icon: faBucket,
    },
    ,
    {
      name: "Login",
      path: "/login",
      icon: faSignIn,
    },
    {
      name: "Register",
      path: "/register",
      icon: faUser,
    },
  ];

  function closeSidebar() {
    setShowSidebar(false);
  }

  function refreshPage() {
    window.location.reload(false);
  }
  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <div className="navbar container">
        <a href="/" className="logo">
          <img src={Logo} alt="logo" className="logo" />
        </a>
        <div className="nav-links">
          {Links.map((link) => (
            <a href={link.path}>{link.name}</a>
          ))}
        </div>
        <Link to="/cart" className="cart-button">
          Cart({productCount}) Added
        </Link>
        <div
          onClick={() => setShowSidebar(true)}
          className={ShowSidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {ShowSidebar && <Sidebar close={closeSidebar} links={Links} />}
    </>
  );
}

export default Navbar;
