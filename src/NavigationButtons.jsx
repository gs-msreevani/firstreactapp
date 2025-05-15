// src/NavigationButtons.js

import React from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const NavigationButtons = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Navigate to /orders/1
  const goToOrder1 = () => {
    navigate("/orders/1");
  };

  // Navigate to /order/us/1
  const goToOrderUs1 = () => {
    navigate("/order/us/1");
  };

  return (
    <div>
      {/* <button onClick={goToOrder1}>Go to Order 1</button>
      <button onClick={goToOrderUs1}>Go to Order US 1</button> */}
    </div>
  );
};

export default NavigationButtons;
