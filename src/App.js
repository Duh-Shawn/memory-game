import React, { useState, useEffect } from "react";
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
  const shuffleCards = () => {
    // create a shallow copy of the cards array so we can set cards state later
    const array = [...cards];

    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    // update state of the cards array to a new ordered array
    setCards(array);
  };

  const handleClick = (repeatedClick) => {
    if (repeatedClick) {
      setGameOver(true);
      if (currentScore > highScore) setHighScore(currentScore);
    } else {
      setCurrentScore(currentScore + 1);
      shuffleCards();
    }
  };

  const restartGame = () => {
    setCurrentScore(0);
    setGameOver(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  if (!gameOver) {
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
    <div className="game-over-container">
      <h1>Game Over!</h1>
      <h2>You Scored: {currentScore}</h2>
      <h2>High Score: {highScore}</h2>
      <button type="button" onClick={restartGame}>
        Play Again
      </button>
    </div>
  );
}

export default App;
