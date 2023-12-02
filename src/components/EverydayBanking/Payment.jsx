import React, { useState } from "react";

const Payment = () => {
  const [selectedAccount, setSelectedAccount] = useState("");
  const [selectedSavedPayment, setSelectedSavedPayment] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [description, setDescription] = useState("");

  const accountOptions = ["Account Name 1", "Account Name 2", "Account Name 3"];
  const savedPayments = [
    "Saved Payment 1",
    "Saved Payment 2",
    "Saved Payment 3",
  ];
  const currencyOptions = ["EUR", "USD", "GBP"];

  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
  };

  const handleSavedPaymentChange = (event) => {
    setSelectedSavedPayment(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSave = () => {
    // Add your save logic here
    console.log("Form data saved:", {
      selectedAccount,
      selectedSavedPayment,
      amount,
      currency,
      description,
    });
    // You can implement API calls or other logic to save the form data
  };

  return (
    <form className="fancy-form">
      <label>
        <span>Account:</span>
        <select value={selectedAccount} onChange={handleAccountChange}>
          <option value="">Select an account</option>
          {accountOptions.map((account, index) => (
            <option key={index} value={account}>
              {account}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>Saved Payments:</span>
        <select
          value={selectedSavedPayment}
          onChange={handleSavedPaymentChange}
        >
          <option value="">Select a saved payment</option>
          {savedPayments.map((payment, index) => (
            <option key={index} value={payment}>
              {payment}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>Amount:</span>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </label>

      <label>
        <span>Currency:</span>
        <select value={currency} onChange={handleCurrencyChange}>
          {currencyOptions.map((currencyOption, index) => (
            <option key={index} value={currencyOption}>
              {currencyOption}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>Description:</span>
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
      </label>

      <label>
        <button type="button" onClick={handleSave} className="save-button">
            Save
        </button>
        <button type="button" onClick={handleSave} className="pay-button">
            Pay
        </button>
      </label>
    </form>
  );
};

export default Payment;
