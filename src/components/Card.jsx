import React from "react";
import "../styles/card.css";

const Card = ({ heading, headingBackgroundColor, children }) => {
  const cardStyle = {
    backgroundColor: headingBackgroundColor || "var(--ui-color-orange)", // Default background color if not provided
  };

  return (
    <div className="card">
      <div className="card-heading" style={cardStyle}>
        <h2>{heading}</h2>
      </div>
      <div className="card-content">
        {children}
        <span style={{ color: "blue" }}>Read more...</span>
      </div>
    </div>
  );
};

export default Card;
