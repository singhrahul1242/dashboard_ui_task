import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-section">
      <div className="text-box">
        <p className="title">Today’s schedule</p>
        <span className="year">
          See All <i class="fa-solid fa-caret-down fa-rotate-270"></i>
        </span>
      </div>
      <div className="blog-section">
        <div className="text-schedule1">
            <h3>Meeting with suppliers from Kuta Bali</h3>
            <span className="price-text">14.00-15.00</span>
            <p className="description">at Sunset Road, Kuta, Bali </p>
        </div>
        <div className="text-schedule2">
            <h3>Meeting with suppliers from Kuta Bali</h3>
            <span className="price-text">14.00-15.00</span>
            <p className="description">at Sunset Road, Kuta, Bali </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
