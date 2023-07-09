import React from "react";
import "./Sidebar.css";
import { FiSettings } from "react-icons/fi";
import { RiDashboard2Line } from "react-icons/ri";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="sidebar-section">
      <h2 className="logoname">Board.</h2>
      <div className="sidebar">
        <ul className="sidebar-menu">
          <li className="sidebar-item-active">
            <RiDashboard2Line className="icon" />
            Dashboard
          </li>
          <li className="sidebar-item">
            <BsTags className="icon" />
            Transactions
          </li>
          <li className="sidebar-item">
            <AiOutlineSchedule className="icon" />
            Schedules
          </li>
          <li className="sidebar-item">
            <BiUserCircle className="icon" />
            Users
          </li>
          <li className="sidebar-item">
            <FiSettings className="icon" />
            Settings
          </li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <ul className="sidebar-menu">
          <li className="sidebar-footer-item">Help</li>
          <li className="sidebar-footer-item">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
