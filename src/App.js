import Card from "./components/Card";
import React, { useState, useEffect } from "react";

function App() {
  const data = {
    imgUrl:
      "https://static.wikia.nocookie.net/gameofthrones/images/3/34/Eddard_Stark.jpg",
    desc: "ned stark",
  };

  const [gameOver, setGameOver] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // useEffect(() => {
  //   // Do something
  // }, [currentScore]

  const handleClick = (repeatedClick) => {
    if (repeatedClick) {
      setGameOver(true);
      console.log("game over");
      if (currentScore > highScore) setHighScore(currentScore);
      setCurrentScore(0);
    } else {
      setCurrentScore(currentScore + 1);
    }
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <h3>Play for fun</h3>
      <div className="scores">
        <p className="current-score">Current Score: {currentScore}</p>
        <p className="high-score">High Score: {highScore}</p>
      </div>
      <div className="cards-container">
        <Card data={data} handleClick={handleClick} />
        <Card data={data} handleClick={handleClick} />
        <Card data={data} handleClick={handleClick} />
        <Card data={data} handleClick={handleClick} />
        <Card data={data} handleClick={handleClick} />
        <Card data={data} handleClick={handleClick} />
        <Card data={data} handleClick={handleClick} />
        <Card data={data} handleClick={handleClick} />
        <Card data={data} handleClick={handleClick} />
        <Card data={data} handleClick={handleClick} />
        <Card data={data} handleClick={handleClick} />
        <Card data={data} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
