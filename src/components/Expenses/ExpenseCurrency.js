import React from 'react';

import './ExpenseCurrency.css';

const ExpenseCurrency = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeCurrency(event.target.value);
  };

  return (
    <div className='expenses-currency'>
      <div className='expenses-currency__control'>
        
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='$'>USD</option>
          <option value='₹'>INR</option>
          <option value='€'>EUR</option>
          <option value='£'>GBP</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseCurrency;