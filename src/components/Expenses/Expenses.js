import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter2 from './ExpensesFilter2';
import './Expenses.css';
import CurrencyFilter from './CurrencyFilter';
import MonthFilter from './MonthFilter';
import CurrencyFilter2 from './CurrencyFilter2';
import ExpensesChart from './ExpensesChart';

const rates={
  USD: 1,
  EUR: 4,
  INR: 2,
  GBP: 5,
};

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const [filteredCurrency, setFilteredCurrency] = useState('INR');
  const [filteredMonth, setFilteredMonth] = useState('January');

  // const filterCurrencyHandler = (selectedCurrency) => {
  //   setFilteredCurrency(selectedCurrency);
  // };

  // const filteredExpense = props.items.filter((expense) => {
  //   return expense.currency.toString() === filteredCurrency;
  // });

  // let expensesConten = <p>No expenses found.</p>;

  // if (filteredExpense.length > 0) {
  //   expensesConten = filteredExpense.map((expense) => (
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

  



  const filterCurrencyHandler = (selectedCurrency) => {
    setFilteredCurrency(selectedCurrency.toString());
   
    
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
    if(filteredYear==='' && filteredCurrency==='')
    {
      return ((expense.date.getFullYear().toString()) ); 
    }
    else if(filteredYear==='' )
    {
      return ((expense.date.toLocaleString('en-US', { month: 'long' }) === filteredMonth) && expense.currency === filteredCurrency ); 
    }
    else{
      if(filteredMonth==='' && filteredCurrency==='')
    {
      return (expense.date.getFullYear().toString()===filteredYear ); 
    }
    else if(filteredMonth==='')
    {
      return (expense.date.getFullYear().toString()===filteredYear && expense.currency === filteredCurrency); 
    }
    else{
    //   if(filteredCurrency=='')
    // {
    //   return (expense.date.toLocaleString('en-US', { month: 'long' }) === filteredMonth ); 
    // }
    // else{

      return ((expense.date.getFullYear().toString() === filteredYear) && (expense.date.toLocaleString('en-US', { month: 'long' }) === filteredMonth) && expense.currency === filteredCurrency);
    // }
    }
    }
  });

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
          selected={filteredCurrency}
          onChangeFilter={filterCurrencyHandler}
          
          />
          <ExpensesChart expenses={filteredExpenses} />
        {expensesContent}
        {/* <CurrencyFilter
        // selected={filteredCurrency}
        // onChangeFilter={filterCurrencyHandler}
        /> */}
        
       
      
      </Card>
    </div>
  );
};
export default Expenses;