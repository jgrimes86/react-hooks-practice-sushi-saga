import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer(props) {
  const {availableSushi, eatSushi, money} = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  function moreSushi() {
    if (currentIndex >= 96) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex((currentIndex) => currentIndex+4)
    }
  }
  console.log("current index: ", currentIndex)

  const fourSushis = availableSushi.slice(currentIndex, currentIndex+4)
  // console.log(fourSushis)
  
  const sushiDisplay = fourSushis.map((sushi) => {
    return <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi} money={money} />
  })

  return (
    <div className="belt">
      {sushiDisplay}
      <MoreButton moreSushi={moreSushi}/>
    </div>
  );
}

export default SushiContainer;
