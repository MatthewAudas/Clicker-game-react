//import React, { useState, useEffect } from 'react';
import './App.js';


function Shopdouble({ itemID, points, setPoints, priceofItem, setDoublePress }) {

  if (points < priceofItem) {
    //Change this to a better UI alert later
    alert('Not enough points to buy this item.');
    return;
  }

  setPoints(p => p - priceofItem);

  if (itemID === 2) {
    // Add buy alert later
    setDoublePress(c => c + 1);
  }

}

export default Shopdouble;