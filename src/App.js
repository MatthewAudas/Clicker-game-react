
import React, { useEffect, useState} from 'react';
import './App.css';
import './ShopAuto.js';
import Shopauto from './ShopAuto.js';
import Shopdouble from './ShopClick.js';

let x = 1;
let priceofItem = 10;
let priceofItem2 = 20;
function PressButton({ onPress, children, title }) {
  // Exposes an `onPress` prop (React Native style) and maps it to a web `onClick`.
  return (
    <button type="button" onClick={onPress} title={title}>
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
    x += 1;
  }, [doublePress]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Points: {points}</p>
        <p>
          <PressButton title="Click for points" onPress={handlePress}>
            Click!!
          </PressButton>
        </p>
      </header>
      <div className="shop-sidebar">
        <h2>Shop</h2>
        <PressButton title="+1 point every 3 seconds" onPress={() => Shopauto({ itemID: 1, points, setPoints, priceofItem: priceofItem, setAutoItemCount })}>
          Buy item ({priceofItem} points)
        </PressButton>
        <PressButton title="Increases your clicking power" onPress={() => Shopdouble({ itemID: 2, points, setPoints, priceofItem: priceofItem2, setDoublePress })}>
          Buy item ({priceofItem2} points)
        </PressButton>
        
      </div>
    </div>
  );
}

export default App;
