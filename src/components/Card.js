import React, { useState } from "react";

function Card(props) {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const data = props.data;
  const imgUrl = data.imgUrl;
  const desc = data.desc;

  const handleClick = props.handleClick;

  const checkClick = () => {
    console.log(hasBeenClicked);
    if (hasBeenClicked) {
      handleClick(true);
    } else {
      handleClick(false);
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
