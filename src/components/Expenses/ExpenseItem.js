import React, { useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// const rates={
//   USD: 2,
//   EUR: 3,
//   INR: 7,
//   GBP: 3,
// };
// const ratesUSD={
//   USD: 1,
//   EUR: 0.92,
//   INR: 82.22,
//   GBP: 0.7,
// };
// const ratesINR={
//   USD: 0.012,
//   EUR: 0.011,
//   INR: 1,
//   GBP: 0.013,
// };
// const ratesEUR={
//   USD: 1.09,
//   EUR: 1,
//   INR: 89.67,
//   GBP: 1.06,
// };
// const ratesGBP={
//   USD: 1.09,
//   EUR: 1.06,
//   INR: 90.67,
//   GBP: 1,
// };
const symb={
  USD: '$',
  EUR: '€',
  INR: '₹',
  GBP: '£',
}
const ExpenseItem = (props) => {
  
  
  // let k=props.amount;
  // if(!(props.kate===props.currency))
  // {
  //   if(props.kate==='USD')
  //   {
  //  k=props.amount*ratesUSD[props.currency];
  //   }
  //   else if(props.kate==='INR')
  //   {
  //     k=props.amount*ratesINR[props.currency];
  //      }
  //      else if(props.kate==='EUR')
  //   {
  //     k=props.amount*ratesEUR[props.currency];
  //      }
  //      else if(props.kate==='GBP')
  //   {
  //     k=props.amount*ratesGBP[props.currency];
  //      }
  // }
 
  
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} currency={props.currency}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__name'>{props.name}</div>
        <div className='expense-item__price'>{symb[props.currency]}{props.amount}</div>
      </div>
    </Card>

  );
}

export default ExpenseItem;