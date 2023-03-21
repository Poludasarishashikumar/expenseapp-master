import React from 'react';

import './CurrencyFilter.css';
const currencies = [
  { code: "USD", value: "$", rate: 1 },
  { code: "INR", value: "₹", rate: 0.82 },
  { code: "EUR", value: "€", rate: 0.72 },
  { code: "GBP", value: "£", rate: 0.72 },
  // add more currencies as needed
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
        <select value={props.selected} onChange={dropdownChangeHandler}>
        {/* <option value=''>None</option>  */}
        {currencies.map((option)=>(
            <option key={option.code} value={option.value}>
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