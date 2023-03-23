import React from 'react';

import './ExpensesFilter.css';
const Month=new Date().toLocaleString('en-US', { month: 'long' });
const MonthOpt=[
  {label:'Jan',value:'January'},
  
  {label:'February',value:'February'},
  {label:'March',value:'March'},
  {label:'April',value:'April'},
  {label:'May',value:'May'},
  {label:'June',value:'June'},
  {label:'July',value:'July'},
  {label:'August',value:'August'},
  {label:'September',value:'September'},
  {label:'October',value:'October'},
  {label:'November',value:'November'},
  {label:'December',value:'December'},
]
const MonthFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by Month</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
        
       
          <option value=''>All</option>
          {MonthOpt.map((option)=>(
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MonthFilter;