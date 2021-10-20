import React from "react";
import "./Grid.css";

export default function Body({ cards }) {
  return (
    <div className="container">
      <div
        className="grid-container"
        style={{ "--animate-duration": cards.length }}
      >
        {cards.map((card) => {
          return (
            <span key={card} className="grid-item">
              <div className="grid-item-banner" />
              <div className="grid-item-content" />
              <div className="grid-item-tags" />
              <div className="grid-item-content" />
            </span>
          );
        })}
      </div>
    </div>
  );
}
