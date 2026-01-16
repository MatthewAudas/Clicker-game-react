import './App.js';  

function SpawnBoss({ points, setPoints, cost, setBossHealth}) {

if (points < cost) {
    alert('Not enough points to spawn this boss.');
    return;
    }
    setPoints(p => p - cost);
    setBossHealth(h => h + 100);
  }

  export default SpawnBoss;