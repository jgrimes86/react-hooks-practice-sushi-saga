import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [availableSushi, setAvailableSushi] = useState([]);
  const [plates, setPlates] = useState([])
  const [money, setMoney] = useState(50)

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(sushi => setAvailableSushi(sushi))
    }, [])

  function eatSushi (name, price) {
    setPlates((plates) => [...plates, name]);
    setMoney((money) => money-price)
  }

  return (
    <div className="app">
      <SushiContainer availableSushi={availableSushi} eatSushi={eatSushi} money={money} />
      <Table plates={plates} money={money} />
    </div>
  );
}

export default App;
