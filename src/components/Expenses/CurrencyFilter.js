import React from 'react';

import './CurrencyFilter.css';
const currencies = [
  { code: "USD", value: "USD"},
  { code: "INR", value: "INR" },
  { code: "EUR", value: "EUR" },
  { code: "GBP", value: "GBP" },
  
];
const CurrencyFilter = (props) => {
  // const selectedCurrencyRate = currencies.find((currency) => currency.code === filteredCurrency).rate;
  // const total = amount * selectedCurrencyRate;
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value.toString());
  };

  return (
    <div className='expenses-currencyfilter'>
      <div className='expenses-currencyfilter__control'>
        <label>Filter by Currency</label>
        <select value={props.selected} onChange={dropdownChangeHandler} >
        {/* <option value=''>None</option>  */}
        {currencies.map((option)=>(
            <option key={option.code} value={option.value}  >
              {option.code}
            </option>
        ))}
        </select>
      </div>
      {/* <p>Total: {total}</p> */}
    </div>
  );
};

export default CurrencyFilter;