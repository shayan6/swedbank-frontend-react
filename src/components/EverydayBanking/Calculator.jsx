import React, { useState } from "react";

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000);
  const [loanPeriod, setLoanPeriod] = useState(1); // in years
  const [interestRate, setInterestRate] = useState(5); // in percentage

  const handleLoanAmountChange = (event) => {
    setLoanAmount(Number(event.target.value));
  };

  const handleLoanPeriodChange = (event) => {
    setLoanPeriod(Number(event.target.value));
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(Number(event.target.value));
  };

  const calculateMonthlyPayment = () => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanPeriod * 12;
    const discountFactor =
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1) /
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments));

    const monthlyPayment = loanAmount / discountFactor;

    return monthlyPayment.toFixed(2);
  };

  const handleSave = () => {
    console.log("Form data saved");
  };

  return (
    <div className="fancy-calculator">
      <div className="calculator-col">
        <label htmlFor="loanAmount">
          <span>Loan Amount: </span>
          <h1> €{loanAmount}</h1>
        </label>
        <input
          type="range"
          id="loanAmount"
          min={1000}
          max={10000}
          step={1000}
          value={loanAmount}
          onChange={handleLoanAmountChange}
          style={{ width: '100%' }}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>€1000</span>
          <span>€10000</span>
        </div>
        <br/>
        <br/>

        <label htmlFor="loanPeriod">
          <span>Loan Period:</span>
          <select
            id="loanPeriod"
            value={loanPeriod}
            onChange={handleLoanPeriodChange}
          >
            <option value={10}>10 year</option>
            <option value={20}>20 years</option>
            <option value={30}>30 years</option>
          </select>
        </label>

        <label htmlFor="interestRate">
          <span>Interest Rate %:</span>
          <input
            type="number"
            id="interestRate"
            min={1}
            max={20}
            step={0.1}
            value={interestRate}
            onChange={handleInterestRateChange}
          />
        </label>
      </div>

      <div className="calculator-col" style={{ textAlign: 'right' }}>
          <label className="monthly-payment">
            <span>Monthly Payment</span>
            <h1>{calculateMonthlyPayment()} Euros</h1>
          </label>

          <button type="button" onClick={handleSave} className="pay-button">
            Apply
          </button>
        </div>
    </div>
  );
};

export default Calculator;
