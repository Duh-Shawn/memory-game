import React, { useState } from "react";

import Card from "./components/Card";
import cardData from "./data/card-data.json";

function App() {
  const [gameOver, setGameOver] = useState(false);

  if (!gameOver){
    return (
      <div className="App">
        <h1>Memory Game</h1>
        <h3>Play for fun</h3>
        <div className="cards-container">
          {cardData.cards.map((card) => (
            <Card data={card} setGameOver={setGameOver} />
          ))}
        </div>
      </div>
    );
  }
  return(
    <div>Game Over!</div>
  )

  
}

export default App;
