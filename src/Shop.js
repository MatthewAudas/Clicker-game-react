import React, { useState, useEffect } from 'react';
import './App.js';
//import './Shop.css';


function Shop({ itemID, points, setPoints, priceofItem }) {

        if (points >= priceofItem) {
            setPoints((p) => p - priceofItem);
            alert('Item purchased!');
            priceofItem = Math.round(priceofItem * 1.15);
        } else {
            alert('Not enough points to buy this item.');
        }

}
export default Shop;