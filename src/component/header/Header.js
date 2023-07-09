import React, { useState } from "react";
import "./Header.css";
import OutsideClickHandler from "react-outside-click-handler";
import { BiMenuAltRight } from "react-icons/bi";
import Sidebar from "../sidebar/Sidebar";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyls = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <div className="header-section">
      <div className="menu-slider">
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <Sidebar className="h-menu" style={getMenuStyls(menuOpened)} />
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
      <div className="header-left">
        <span>Dashboard</span>
      </div>
      <div className="header-right">
        <div className="searchbar">
          <input type="text" className="search-input" placeholder="Search.." />
          <i className="search-icon fas fa-search"></i>
        </div>
        <span className="icon">
          <i className="fa-regular fa-bell"></i>
        </span>
        <img src="./images/user.png" alt="user" />
      </div>
    </div>
  );
};

export default Header;
