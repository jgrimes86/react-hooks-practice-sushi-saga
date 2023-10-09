import React from "react";

function Sushi({sushi, eatSushi, money, eatenSushi}) {
  const { name, img_url, price } = sushi;

  const hasBeenEaten = eatenSushi.find((goneSushi) => {
    if (goneSushi.id === sushi.id) {
      return true
    }
  })

  function handleClick() {
    if (money>=price) {
      eatSushi(sushi)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {hasBeenEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
