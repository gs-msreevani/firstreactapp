// src/OrderPage.js

import React from 'react';
import { useParams } from 'react-router-dom';

const OrderPage = () => {
  const { id } = useParams(); // Get the dynamic parameter (id) from the URL

  return (
    <div>
      <h1>Order Page</h1>
      <p>Showing details for order ID: {id}</p>
    </div>
  );
};

export default OrderPage;
