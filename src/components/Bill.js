import "./Bill.css";
import { useState } from "react";

const Bill = ({ selected, setIsDisabled, isDisabled, splitBill }) => {
  const [whoIsPaying, setWhoIsPaying] = useState("");
  const [billValue, setBillValue] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const friendExpense = billValue ? billValue - yourExpense : "";

  console.log(friendExpense);
  console.log(yourExpense);

  const handleBillValue = (e) => {
    setBillValue(Number(e.target.value));
  };

  const handleYourExpense = (e) => {
    const value = Number(e.target.value);
    value <= billValue ? setYourExpense(value) : setYourExpense(billValue);
  };

  const handleWhoIsPaying = (e) => {
    setWhoIsPaying(e.target.value);
  };

  console.log(whoIsPaying);

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!billValue || !yourExpense) return;
    if (!whoIsPaying || !billValue || !yourExpense) return;

    splitBill(whoIsPaying === "user" ? friendExpense : -yourExpense);
  };

  return (
    <form id="bill" className="bill" onSubmit={handleSubmit}>
      <h2>split a bill with {selected.name}</h2>
      <div className="inputHolder">
        <label htmlFor="billValue">
          <span></span>Bill value
        </label>
        <input
          type="number"
          id="billValue"
          value={billValue}
          onChange={handleBillValue}
        />
      </div>
      <div className="inputHolder">
        <label htmlFor="yourExpense">
          <span></span>Your expense
        </label>
        <input
          type="number"
          id="yourExpense"
          value={yourExpense}
          onChange={handleYourExpense}
        />
      </div>
      <div className="inputHolder">
        <label htmlFor="friendExpense">
          <span></span>
          {selected.name} expense
        </label>
        <input
          type="number"
          id="friendExpense"
          value={friendExpense}
          disabled={isDisabled}
        />
      </div>
      <div className="inputHolder">
        <label htmlFor="whoPay">
          <span></span>Who is paying the bill?
        </label>
        <select
          id="whoPay"
          value={whoIsPaying}
          onChange={handleWhoIsPaying}
          defaultValue={""}
        >
          <option value={""}>Who pay?</option>
          <option value={"user"}>You</option>
          <option value={"friend"}>{selected.name}</option>
        </select>
      </div>
      <div className="btnAddFriend">
        <button type="submit" className="btn">
          Split bill
        </button>
      </div>
    </form>
  );
};

export default Bill;
