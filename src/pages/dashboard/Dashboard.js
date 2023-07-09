import React from "react";
import "./Dashboard.css";
import Sidebar from "../../component/sidebar/Sidebar";
import Header from "../../component/header/Header";
import Box from "../../component/box/Box";
import Wavelinechart from "../../component/chart/waveline/Wavelinechart";
import Piechart from "../../component/chart/piechart/Piechart";
import Card from "../../component/card/Card";

const dahboard = () => {
  return (
    <div className="main-dashboard">
      <div className="sidebar-panel">
        <Sidebar />
      </div>
      <div className="main-panel">
        <Header />
        <Box/>
        <Wavelinechart/>
        
        <div className="bottum-section">
          <Piechart/>
          <Card/>
        </div>
      </div>
    </div>
  );
};

export default dahboard;
