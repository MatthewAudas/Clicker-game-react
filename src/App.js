
import React, { use, useEffect, useState} from 'react';
import './App.css';
import './ShopAuto.js';
import Shopauto from './ShopAuto.js';
import Shopdouble from './ShopClick.js';
import SpawnBoss from './BossSpawn.js';

let x = 1;
let bossLevel = 1;
let cost = 50;
let priceofItem = 10;
let priceofItem2 = 20;


function PressButton({ onPress, children, title }) {

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
  const [bossHealth, setBossHealth] = useState(0);


  const handlePress = () => setPoints(((p) => p + x));

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

useEffect(() => {
  if (bossHealth <= 0) return;
  bossLevel += 1;
  cost += 50;

}, [bossHealth]);





  return ( 
    <div className="App">
      <div className="boss-sidebar">
        <h2>Boss Info</h2>
        <PressButton title="Boss" onPress={() => SpawnBoss({points, setPoints, cost, setBossHealth})}>Spawn Boss [{cost} points]</PressButton> 
        <p>Boss Health: {bossHealth}</p>
        <p>Boss Level: {bossLevel}</p>
      </div>
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
