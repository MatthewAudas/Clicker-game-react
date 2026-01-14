
import React, { useEffect, useState} from 'react';
import './App.css';
import './ShopAuto.js';
import Shopauto from './ShopAuto.js';
import Shopdouble from './ShopClick.js';

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



function App() {

  const [points, setPoints] = useState(1);
  const [autoItemCount, setAutoItemCount] = useState(0);
  const [doublePress, setDoublePress] = useState(0);
  const handlePress = () => setPoints((p) => p + x);

  useEffect(() => {
  if (autoItemCount === 0) return;

  const interval = setInterval(() => {
    setPoints(p => p + autoItemCount);
  }, 3000);

  return () => clearInterval(interval);
}, [autoItemCount]);

  useEffect(() => {
    if (doublePress === 0) return; 
    x += 2;
  }, [doublePress]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Points: {points}</p>
        <p>
          <PressButton onPress={handlePress}>
            Click!!
          </PressButton>
          <PressButton onPress={() => Shopdouble({ itemID: 1, points, setPoints, priceofItem: priceofItem2, setDoublePress })}>
            Double click power ({priceofItem2} points)
          </PressButton>
          <PressButton onPress={() => Shopauto({ itemID: 2, points, setPoints, priceofItem: priceofItem, setAutoItemCount })}>
            Buy item ({priceofItem} points)
          </PressButton>
        </p>
      </header>
    </div>
  );
}

export default App;
