import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Sidebar({ links, close }) {
  return (
    <div className="sidebar" onClick={close}>
      {links.map((link) => (
        <a className="sidebar-link" href={link.path}>
          <FontAwesomeIcon icon={link.icon} />
          {link.name}
        </a>
      ))}
    </div>
  );
}

export default Sidebar;
