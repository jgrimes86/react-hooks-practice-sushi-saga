import React, {useState} from "react";

function Table({ plates = [], money, addMoney }) {
  const [moneyInput, setMoneyInput] = useState("")

  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  function handleSubmit(event) {
    event.preventDefault();
    const moneyNumber = parseInt(moneyInput, 10)
    addMoney(moneyNumber)
    setMoneyInput("")
  }

  function handleChange(event) {
    setMoneyInput(event.target.value)
  }

  return (
    <>
      <h1 className="remaining">
        You have: ${money} remaining!
      </h1>
      <form className="add-money" onSubmit={handleSubmit}>
        <label>Add Money</label>
        <input type="text" value={moneyInput} onChange={handleChange}></input>
        <input type="submit"></input>
      </form>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
