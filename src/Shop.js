import React, { useState, useEffect } from 'react';
import './App.js';
//import './Shop.css';


function Shop({ itemID, points, setPoints, priceofItem, setAutoItemCount }) {

  if (points < priceofItem) {
    //Change this to a better UI alert later
    alert('Not enough points to buy this item.');
    return;
  }

  setPoints(p => p - priceofItem);

  if (itemID === 2) {
    // Add buy alert later
    setAutoItemCount(c => c + 1);
  }
}

export default Shop;