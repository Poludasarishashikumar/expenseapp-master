import React from 'react';

import './ExpensesFilter.css';
const year=new Date().getFullYear();
const YearOpt=[
  {label:year,value:year},
  {label:year-1,value:year-1},
  {label:year-2,value:year-2},
  {label:year-3,value:year-3},
  // {label:'2022',value:'2022'},
  // {label:'2021',value:'2021'},
  // {label:'2020',value:'2020'},
]
const ExpensesFilter2 = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
        
       
          <option value=''>All</option>
          {YearOpt.map((option)=>(
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter2;