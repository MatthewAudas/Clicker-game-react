
import React, { useState} from 'react';
import './App.css';
import './Shop.js';
import Shop from './Shop.js';
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

  const handlePress = () => setPoints((p) => p + x);

  return (
    <div className="App">
      <header className="App-header">
        <p>Points: {points}</p>
        <p>
          <PressButton onPress={handlePress}>
            Click!!
          </PressButton>
          <PressButton onPress={() => Shop({ itemID: 1, points, setPoints, priceofItem: priceofItem2 })}>
            Double click power ({priceofItem2} points)
          </PressButton>
          <PressButton onPress={() => Shop({ itemID: 2, points, setPoints, priceofItem: priceofItem })}>
            Buy item ({priceofItem} points)
          </PressButton>
        </p>
      </header>
    </div>
  );
}

export default App;
