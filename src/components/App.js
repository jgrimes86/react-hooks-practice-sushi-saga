import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [availableSushi, setAvailableSushi] = useState([]);
  const [plates, setPlates] = useState([]);
  const [money, setMoney] = useState(50);
  const [eatenSushi, setEatenSushi] = useState([]);

  useEffect(fetchAvailableSushi, [])
  
  function fetchAvailableSushi() {
    fetch(API)
    .then(response => response.json())
    .then(sushi => setAvailableSushi(sushi))
  }

  function eatSushi (sushi) {
    setPlates((plates) => [...plates, sushi.name]);
    setMoney((money) => money-sushi.price);
    setEatenSushi([...eatenSushi, sushi])
  }

  function addMoney(input) {
    setMoney((money) => {return money+input})
  }

  return (
    <div className="app">
      <SushiContainer availableSushi={availableSushi} eatSushi={eatSushi} money={money} eatenSushi={eatenSushi} />
      <Table plates={plates} money={money} addMoney={addMoney}/>
    </div>
  );
}

export default App;
