import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [availableSushi, setAvailableSushi] = useState([]);
  const [plates, setPlates] = useState([])
  const [money, setMoney] = useState(50)

  useEffect(fetchAvailableSushi, [])
  
  function fetchAvailableSushi() {
    fetch(API)
    .then(response => response.json())
    .then(sushi => setAvailableSushi(sushi))
  }

  function alterAvailableSushi(sushi) {
    const newAvailableSushi = availableSushi.map((oneSushi) => {
      if (oneSushi.id === sushi.id) {
        oneSushi.img_url = null
        return oneSushi
      } else {return oneSushi}
    })
    setAvailableSushi(newAvailableSushi)
  }

  function eatSushi (sushi) {
    setPlates((plates) => [...plates, sushi.name]);
    setMoney((money) => money-sushi.price);
    alterAvailableSushi(sushi)
  }
  // console.log(availableSushi)

  function addMoney(input) {
    setMoney((money) => {return money+input})
  }

  return (
    <div className="app">
      <SushiContainer availableSushi={availableSushi} eatSushi={eatSushi} money={money} />
      <Table plates={plates} money={money} addMoney={addMoney}/>
    </div>
  );
}

export default App;
