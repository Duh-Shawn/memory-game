import React, { useState } from "react";
import Card from "./components/Card";
import cardData from "./data/card-data.json";
import "./styles/app.scss";

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [cards, setCards] = useState(cardData.cards);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

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
      console.log(isRepeatedClick);
      setGameOver(true);
      if (currentScore > highScore) setHighScore(currentScore);
      setCurrentScore(0);
    } else {
      console.log("safe click");
      setCurrentScore(currentScore + 1);
    }
  };

  const restartGame = () => {
    setGameOver(false);
  };

  if (!gameOver) {
    shuffle(cards);
    return (
      <div className="App">
        <header>
          <h1>GOT Memory Game</h1>
          <div className="scores">
            <p className="current-score">Current Score: {currentScore}</p>
            <p className="high-score">High Score: {highScore}</p>
          </div>
        </header>
        <div className="cards-container">
          {cards.map((card) => (
            <Card key={card.id} data={card} handleClick={handleClick} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div class="game-over-container">
      <h1>Game Over!</h1>
      <h2>You Scored: {currentScore}</h2>
      <h2>High Score: {highScore}</h2>
      <button onClick={restartGame}>Play Again</button>
    </div>
  );
}

export default App;
