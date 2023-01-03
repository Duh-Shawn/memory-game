import React, { useState } from "react";
import uniqid from "uniqid";
import Card from "./components/Card";
import cardData from "./data/card-data.json";

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [cards, setCards] = useState(cardData.cards);

  /*
  Fisher-Yates shuffle algorithm from stack overflow: 
  https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  */
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const handleClick = (isRepeatedClick) => {
    if (isRepeatedClick) {
      setGameOver(true);
    } else {
      console.log("safe click");
    }
  };

  if (!gameOver) {
    shuffle(cards);
    return (
      <div className="App">
        <h1>Memory Game</h1>
        <h3>Play for fun</h3>
        <div className="cards-container">
          {cards.map((card) => (
            <Card key={uniqid()} data={card} handleClick={handleClick} />
          ))}
        </div>
      </div>
    );
  }
  return <div>Game Over!</div>;
}

export default App;
