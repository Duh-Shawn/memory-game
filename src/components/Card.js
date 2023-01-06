import React, { useState } from "react";

function Card(props) {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const data = props.data;
  const imgUrl = data.imgUrl;
  const desc = data.desc;

  const handleClick = props.handleClick;

  const checkClick = () => {
    //card as already been previously clicked

    if (hasBeenClicked) {
      //call parent's function 'handleclick' which will trigger an endgame
      handleClick(true);
    }
    //card has not been clicked prior to now
    else {
      //parent's function 'handleclick' will implement scoreboard and shuffle the board
      handleClick(false);
      //card updates its own state to track that it now has been clicked before
      setHasBeenClicked(true);
    }
  };

  return (
    <div className="card" onClick={checkClick}>
      <img src={imgUrl} alt="{desc}"></img>
      <p>{desc}</p>
    </div>
  );
}

export default Card;
