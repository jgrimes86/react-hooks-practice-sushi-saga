import React from "react";

function MoreButton({moreSushi}) {

  function handleClick() {
    moreSushi()
  }

  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
