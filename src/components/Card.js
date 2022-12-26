import React, { useState } from "react";

function Card(props) {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const data = props.data;
  const imgUrl = data.imgUrl;
  const desc = data.desc;

  const handleClick = props.handleClick;

  const checkClick = () => {
    if (hasBeenClicked) {
      handleClick(true);
    } else {
      handleClick(false);
      setHasBeenClicked(true);
    }
  };

  return (
    <div className="card" onClick={checkClick}>
      <div>
        <img src={imgUrl} alt=""></img>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Card;
