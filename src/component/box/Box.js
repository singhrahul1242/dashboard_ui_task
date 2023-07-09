import React from "react";
import "./Box.css";

const boxData = [
    {
      id: 1,
      name: "Total Revenues",
      price: "$2,129,430",
      icon: 'fa-regular fa-bell',
      color: "#DDEFE0",
    },
    {
      id: 2,
      name: "Total Transactions",
      price: "1,520",
      icon: 'fa-regular fa-bell',
      color: "#F4ECDD",
    },
    {
      id: 1,
      name: "Total Likes",
      price: "9,721",
      icon: 'fa-regular fa-bell',
      color: "#EFDADA",
    },
    {
      id: 1,
      name: "Total Users",
      price: "892",
      icon: 'fa-regular fa-bell',
      color: "#DEE0EF",
    },
  ];

const Box = ({ name, price, background, icon }) => {
  return (
    <div className="box-container">
        {boxData.map((box, index) => (
          <div className="box" style={{ background:box.color }}>
          <span className="box-icon">
            <i class={box.icon}></i>
          </span>
          <p className="box-text">{box.name}</p>
          <h2>{box.price}</h2>
        </div>
        ))}
      
    </div>
  );
};

export default Box;
