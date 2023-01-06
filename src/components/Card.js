import React, { useState } from "react";
import PropTypes from "prop-types";

function Card(props) {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const { data, handleClick } = props;
  const { imgUrl, desc } = data;

  const checkClick = () => {
    // card as already been previously clicked

    if (hasBeenClicked) {
      // call parent's function 'handleclick' which will trigger an endgame
      handleClick(true);
    }
    // card has not been clicked prior to now
    else {
      // parent's function 'handleclick' will implement scoreboard and shuffle the board
      handleClick(false);
      // card updates its own state to track that it now has been clicked before
      setHasBeenClicked(true);
    }
  };

  return (
    <div
      className="card"
      onClick={checkClick}
      onKeyDown={checkClick}
      role="button"
      tabIndex={0}
    >
      <img src={imgUrl} alt="{desc}" />
      <p>{desc}</p>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Card;
