
import React, { useState } from 'react';
import './App.css';
let x = 1;
let priceofItem = 10;
let priceofItem2 = 20;
function PressButton({ onPress, children }) {
  // Exposes an `onPress` prop (React Native style) and maps it to a web `onClick`.
  return (
    <button type="button" onClick={onPress}>
      {children}
    </button>
  );
}

function PressButton2({ onPress, children }) {
  // Exposes an `onPress` prop (React Native style) and maps it to a web `onClick`.
  return (
    <button type="button" onClick={onPress}>
      {children}
    </button>
  );
}

function PressButton3({ onPress, children }) {
  // Exposes an `onBuy` prop (React Native style) and maps it to a web `onClick`.
  return (
    <button type="button" onClick={onPress}>
      {children}
    </button>
  );
}

function App() {

  const [points, setPoints] = useState(1);

  const handlePress = () => setPoints((p) => p + x);

  const handlePressAuto = () => setPoints((p) => p + 1);

  const handlePress2  = () => {
    if (points >= priceofItem2) {
      setPoints((p) => p - priceofItem2);
      alert('Item purchased!');
      x = x+1;
      priceofItem2 = Math.round(priceofItem2 *1.15);
    } else {
      alert('Not enough points to buy this item.');
    }
  };

  const handleBuy = () => {
    if (points >= priceofItem) {
      setPoints((p) => p - priceofItem);
      alert('Item purchased!');
      setInterval(handlePressAuto, 3000)
      priceofItem = Math.round(priceofItem *1.15);
    } else {
      alert('Not enough points to buy this item.');
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Points: {points}</p>
        <p>
          <PressButton onPress={handlePress}>
            Click!!
          </PressButton>
          <PressButton2 onPress={handlePress2}>
            Double click power ({priceofItem2} points)
          </PressButton2>
          <PressButton3 onPress={handleBuy}>
            Buy item ({priceofItem} points)
          </PressButton3>
        </p>
      </header>
    </div>
  );
}

export default App;
