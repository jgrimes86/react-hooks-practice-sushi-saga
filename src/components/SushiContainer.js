import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer(props) {
  const {availableSushi, eatSushi, money} = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const fourSushis = availableSushi.slice(currentIndex, 4)
  
  const sushiDisplay = fourSushis.map((sushi) => {
    return <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi} money={money} />
  })
  // console.log(fourSushis)

  function moreSushi() {
    // setCurrentIndex((currentIndex) => currentIndex+4);
    console.log('clicked')
  }
  // console.log("current index: ", currentIndex)

  return (
    <div className="belt">
      {sushiDisplay}
      <MoreButton moreSushi={moreSushi}/>
    </div>
  );
}

export default SushiContainer;
