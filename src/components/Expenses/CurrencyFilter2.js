import React, { useState } from "react";
import CurrencyDrop from "./CurrencyDrop";

const currencies = [
  { code: "USD", name: "US Dollar", rate: 1 },
  { code: "EUR", name: "Euro", rate: 0.82 },
  { code: "GBP", name: "British Pound", rate: 0.72 },
  // add more currencies as needed
];

const CurrencyFilter2= () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);

  const handleCurrencyChange = (newCurrency) => {
    setSelectedCurrency(newCurrency);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div>
      <h1>My Currency Converter</h1>
      <p>Select your currency:</p>
      <CurrencyDrop
        currencies={currencies}
        selectedCurrency={selectedCurrency}
        onCurrencyChange={handleCurrencyChange}
        amount={amount}
      />
      <p>Amount: <input type="number" value={amount} onChange={handleAmountChange} /></p>
    </div>
  );
};

export default CurrencyFilter2;