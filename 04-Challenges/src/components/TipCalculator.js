import React, { useState } from "react";


function BillInput({ billAmount, setBillAmount }) {
  return (
    <div className="bill-input">
      <label
        htmlFor="billAmount"
        style={{ fontWeight: "bold", marginBottom: "10px" }}
      >
        Bill Amount:
      </label>
      <input
        type="number"
        id="billAmount"
        placeholder="Bill Amount"
        value={billAmount}
        onChange={(e) => setBillAmount(Math.abs(Number(e.target.value)))}
      />
    </div>
  );
}

function TipInput({ children, tipPercentage, onSelect }) {
  return (
    <div className="tip-select">
      <label>{children}</label>
      <select
        id="tipPercentage"
        value={tipPercentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied 0%</option>
        <option value="10">Satisfied 10%</option>
        <option value="15">Very Satisfied 15%</option>
        <option value="20">Extremely Satisfied 20%</option>
      </select>
    </div>
  );
}

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState(null);
  const [tipPercentage1, setTipPercentage1] = useState(null);
  const [tipPercentage2, setTipPercentage2] = useState(null);

  function OutputTotals() {
    const totalTipPercentage = (tipPercentage1 + tipPercentage2) / 2;

    const tipAmount = (billAmount * totalTipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;
    return (
      <div>
        <h2>Total Tip: ${tipAmount.toFixed(2)}</h2>
        <h2>Total Bill: ${totalAmount.toFixed(2)}</h2>
      </div>
    );
  }

  function resetInputs() {
    setBillAmount(null);
    setTipPercentage1("");
    setTipPercentage2("");
  }

  return (
    <div className="tip-calculator">
      <h1>Tip Calculator</h1>
      <BillInput billAmount={billAmount} setBillAmount={setBillAmount} />
      <TipInput tipPercentage={tipPercentage1} onSelect={setTipPercentage1}>
        {" "}
        How did you like the service?{" "}
      </TipInput>
      <TipInput tipPercentage={tipPercentage2} onSelect={setTipPercentage2}>
        {" "}
        How did your partner feel about the service?{" "}
      </TipInput>
      <OutputTotals />
      <button className="reset-button" onClick={(e) => resetInputs()}>Reset</button>
    </div>
  );
}
