import React, { useState } from "react";

const Payment = () => {
  const [selectedAccount, setSelectedAccount] = useState("");
  const [selectedSavedPayment, setSelectedSavedPayment] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [description, setDescription] = useState("");

  const [accountError, setAccountError] = useState("");
  const [savedPaymentError, setSavedPaymentError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const accountOptions = ["Account Name 1", "Account Name 2", "Account Name 3"];
  const savedPayments = [
    "Saved Payment 1",
    "Saved Payment 2",
    "Saved Payment 3",
  ];
  const currencyOptions = ["EUR", "USD", "GBP"];

  const validateAccount = () => {
    setAccountError(selectedAccount ? "" : "Please select an account");
  };

  const validateSavedPayment = () => {
    setSavedPaymentError(
      selectedSavedPayment ? "" : "Please select a saved payment"
    );
  };

  const validateAmount = () => {
    setAmountError(amount ? "" : "Please enter the amount");
  };

  const validateDescription = () => {
    setDescriptionError(description ? "" : "Please enter a description");
  };

  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
    validateAccount();
  };

  const handleSavedPaymentChange = (event) => {
    setSelectedSavedPayment(event.target.value);
    validateSavedPayment();
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    validateAmount();
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    validateDescription();
  };

  const renderError = (error, inputName) => {
    return (
      error && (
        <div className="error-message">
          {error}
          {inputName && (
            <style>{`#${inputName}.error { border-color: red; }`}</style>
          )}
        </div>
      )
    );
  };

  const handleSubmit = () => {
    validateAccount();
    validateSavedPayment();
    validateAmount();
    validateDescription();

    if (
      !accountError &&
      !savedPaymentError &&
      !amountError &&
      !descriptionError
    ) {
      console.log("Form data saved:", {
        selectedAccount,
        selectedSavedPayment,
        amount,
        currency,
        description,
      });
    } else {
      console.log("Form has validation errors. Please fix them.");
    }
  };

  return (
    <form className="fancy-form">
      <label>
        <span>Account:</span>
        <select
          value={selectedAccount}
          onChange={handleAccountChange}
          onBlur={validateAccount}
          className={accountError ? "error" : ""}
          id="selectedAccount"
        >
          <option value="">Select an account</option>
          {accountOptions.map((account, index) => (
            <option key={index} value={account}>
              {account}
            </option>
          ))}
        </select>
        {renderError(accountError, "selectedAccount")}
      </label>

      <label>
        <span>Saved Payments:</span>
        <select
          value={selectedSavedPayment}
          onChange={handleSavedPaymentChange}
          onBlur={validateSavedPayment}
          className={savedPaymentError ? "error" : ""}
          id="selectedSavedPayment"
        >
          <option value="">Select a saved payment</option>
          {savedPayments.map((payment, index) => (
            <option key={index} value={payment}>
              {payment}
            </option>
          ))}
        </select>
        {renderError(savedPaymentError, "selectedSavedPayment")}
      </label>

      <label>
        <span>Amount:</span>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          onBlur={validateAmount}
          className={amountError ? "error" : ""}
          id="amount"
        />
        <select
          value={currency}
          onChange={handleCurrencyChange}
          className="currency"
          id="currency"
        >
          {currencyOptions.map((currencyOption, index) => (
            <option key={index} value={currencyOption}>
              {currencyOption}
            </option>
          ))}
        </select>
        {renderError(amountError, "amount")}
      </label>

      <label>
        <span>Description:</span>
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          onBlur={validateDescription}
          className={descriptionError ? "error" : ""}
          id="description"
        />
        {renderError(descriptionError, "description")}
      </label>

      <label className="buttons-container">
        <button type="button" onClick={handleSubmit} className="save-button">
          Save
        </button>
        <button type="button" onClick={handleSubmit} className="pay-button">
          Pay
        </button>
      </label>
    </form>
  );
};

export default Payment;
