import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter2 from './ExpensesFilter2';
import './Expenses.css';
import CurrencyFilter from './CurrencyFilter';
import MonthFilter from './MonthFilter';
import CurrencyFilter2 from './CurrencyFilter2';
import ExpensesChart from './ExpensesChart';

// const rates={
//   USD: 1,
//   EUR: 4,
//   INR: 2,
//   GBP: 5,
// };
// const data = [
//   {title : "One",prix:100,Currency:"INR"},
//   {title : "Two",prix:200,Currency:"USD"},
//   {title : "Three",prix:300,Currency:"INR"}
// ]
const rates={
  USD: 2,
  EUR: 3,
  INR: 7,
  GBP: 3,
};
const ratesUSD={
  USD: 1,
  EUR: 0.92,
  INR: 82.22,
  GBP: 0.7,
};
const ratesINR={
  USD: 0.012,
  EUR: 0.011,
  INR: 1,
  GBP: 0.013,
};
const ratesEUR={
  USD: 1.09,
  EUR: 1,
  INR: 89.67,
  GBP: 1.06,
};
const ratesGBP={
  USD: 1.09,
  EUR: 1.06,
  INR: 90.67,
  GBP: 1,
};
const symb={
  USD: '$',
  EUR: '€',
  INR: '₹',
  GBP: '£',
}
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const [filteredCurrency, setFilteredCurrency] = useState('INR');
  const [filteredMonth, setFilteredMonth] = useState('January');
  const [filteredCurrencyfortot,setFilteredCurrencyforTot]=useState('INR');

  

  



  const filterCurrencyHandler = (selectedCurrency) => {
    setFilteredCurrency(selectedCurrency.toString());
   
    
  };
  const filterCurrencyHandlerForTot = (selectedCurrency) => {
    setFilteredCurrencyforTot(selectedCurrency.toString());
   
    
  };
  const filterMonthHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth.toString());
   
    
  };
  // const filteredExpenses = props.items.filter((expense) => {
  //   return expense.date.getFullYear().toString() === filteredYear;
  // });

  // let expensesContent = <p>No expenses found.</p>;

  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //       name={expense.name}
  //       currency={expense.currency}
  //     />
  //   ));
  // }







  
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
 
  const filteredExpenses = props.items.filter((expense) => {
    // console.log(filteredExpenses.)
    if(filteredYear==='' && filteredCurrency==='' && filteredMonth==='')
    {
      return ((expense.date.getFullYear().toString()) ); 
    }
    else if(filteredYear==='' && filteredMonth==='' && !(filteredCurrency==='') )
    {
      return ((expense.date.getFullYear().toString()) && expense.currency === filteredCurrency ); 
    }
    
    else  if(filteredMonth==='' && !(filteredCurrency==='') && !(filteredMonth===''))
    {
      return ((expense.date.getFullYear().toString())  && (expense.date.toLocaleString('en-US', { month: 'long' }) === filteredMonth) && expense.currency===filteredCurrency ); 
    }
    else if(!(filteredYear==='') && !(filteredCurrency==='') && !(filteredMonth===''))
    {
      return ((expense.date.getFullYear().toString() === filteredYear) && (expense.date.toLocaleString('en-US', { month: 'long' }) === filteredMonth) && expense.currency === filteredCurrency);
    
    }
    else if(!(filteredYear==='') && (filteredCurrency==='') && (filteredMonth===''))
    {
      return ((expense.date.getFullYear().toString() === filteredYear) );
    
    }
    else if(!(filteredYear==='') && !(filteredCurrency==='') && (filteredMonth===''))
    {
      return ((expense.date.getFullYear().toString() === filteredYear)  && expense.currency === filteredCurrency);
    
    }
    else if(!(filteredYear==='') && (filteredCurrency==='') && !(filteredMonth===''))
    {
      return ((expense.date.getFullYear().toString() === filteredYear) && (expense.date.toLocaleString('en-US', { month: 'long' }) === filteredMonth) );
    
    }
    else if((filteredYear==='') && (filteredCurrency==='') && !(filteredMonth===''))
    {
      return (expense.date.getFullYear().toString()  && (expense.date.toLocaleString('en-US', { month: 'long' }) === filteredMonth) );
    
    }
  });

  const filteredExforcurr = props.items.filter((expens) => {

   return (expens.date.getFullYear().toString());
  });



  // const Sum = filteredExpenses.filter(x=>x.Currency ==="INR").reduce((a,v) => a=a+v.prix,0);
  // console.log(Sum);
  let tot=0;
  let k=0;
  const exp=filteredExpenses.map((expense)=>{
tot+=parseInt(expense.amount);


})
const cr=filteredExforcurr.map((expens)=>{
  
    if(expens.currency==='USD')
    {
   k+=expens.amount*ratesUSD[filteredCurrencyfortot];
    }
    else if(expens.currency==='INR')
    {
      k+=expens.amount*ratesINR[filteredCurrencyfortot];
       }
       else if(expens.currency==='EUR')
    {
      k+=expens.amount*ratesEUR[filteredCurrencyfortot];
       }
       else if(expens.currency==='GBP')
    {
      k+=expens.amount*ratesGBP[filteredCurrencyfortot];
       }
      
})
  console.log(tot);
  console.log(k);
  
  let expensesContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        name={expense.name}
        currency={expense.currency}
        
        // kate={filteredCurrency}
      />
    ));
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter2
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
          <MonthFilter
          selected={filteredMonth}
          onChangeFilter={filterMonthHandler}
          
          />
        <CurrencyFilter
        off={'All'}
        head={'Filter by Currency'}
          selected={filteredCurrency}
          onChangeFilter={filterCurrencyHandler}
          
          />
          {/* <ExpensesChart expenses={filteredExpenses} /> */}
          <p id='text'>Total filtered expenses amount   :{symb[filteredCurrency]}{tot}</p>
        {expensesContent}
        <CurrencyFilter
        off={'Off'}
        head={'Total Expense Filter By Currency'}
          selected={filteredCurrencyfortot}
          onChangeFilter={filterCurrencyHandlerForTot}
          
          />
        <p id='text'>Total expenses   :{symb[filteredCurrencyfortot]}{k}</p>
        {/* <CurrencyFilter
        // selected={filteredCurrency}
        // onChangeFilter={filterCurrencyHandler}
        /> */}
        
       
      
      </Card>
    </div>
  );
};
export default Expenses;