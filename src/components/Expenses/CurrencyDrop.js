import React from "react";

const CurrencyDrop = ({ currencies, selectedCurrency, onCurrencyChange, amount }) => {
  const selectedCurrencyRate = currencies.find((currency) => currency.code === selectedCurrency).rate;
  const total = amount * selectedCurrencyRate;

  const handleCurrencyChange = (event) => {
    onCurrencyChange(event.target.value);
  };

  return (
    <div>
      <select value={selectedCurrency} onChange={handleCurrencyChange}>
        {currencies.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.name}
          </option>
        ))}
      </select>
      <p>Total: {total}</p>
    </div>
  );
};

export default CurrencyDrop;