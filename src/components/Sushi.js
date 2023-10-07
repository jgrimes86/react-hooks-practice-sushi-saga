import React, {useState} from "react";

function Sushi({sushi, eatSushi, money}) {
  const { name, img_url, price } = sushi;
  const [isEaten, setIsEaten] = useState(false);

  function handleClick() {
    if (money>=price) {
      eatSushi(name, price)
      return setIsEaten(true)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
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
