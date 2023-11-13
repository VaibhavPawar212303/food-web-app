import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const [ShowSidebar, setShowSidebar] = useState(false);
  const Links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog,
    },
  ];
  function closeSidebar() {
    setShowSidebar(false);
  }
  return (
    <>
      <div className="navbar container">
        <a href="#!" className="logo">
          Dappled
        </a>
        <div className="nav-links">
          {Links.map((link) => (
            <a href={link.path}>{link.name}</a>
          ))}
        </div>
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
