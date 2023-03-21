import React, { useState } from 'react';
import swal from 'sweetalert2';
import './ExpenseForm.css';

const currencies = [
  { code: "USD", value: "$", rate: 1 },
  { code: "INR", value: "₹", rate: 0.82 },
  { code: "EUR", value: "€", rate: 0.72 },
  { code: "GBP", value: "£", rate: 0.72 },
  // add more currencies as needed
];
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredCurrency, setEnteredCurrency] = useState('');
  // console.log(enteredDate==='');

  const [formError, setFormError] = useState({
    title:"",
    name:"",
    amount:"",
    date:"",
});








  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    
  };
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    
  };
  

  const currencyChangeHandler = (event) => {
    setEnteredCurrency(event.target.value.toString());
  };


  





  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      name:enteredName,
      currency:enteredCurrency,
    };
    // console.log(expenseData.date);
    if(enteredTitle==='' && enteredAmount==='' && enteredName==='' && enteredDate==="") 
       {      
              setFormError({
                  
                  name:"Enter ShopName",
                  title:"Enter title",
                  amount:"Enter amount",
                 date:"enter date",
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredTitle==='' && enteredAmount==='' && enteredName==='' ) 
       {      
              setFormError({
                  
                  name:"Enter ShopName",
                  title:"Enter title",
                  amount:"Enter amount",
                 
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredTitle==='' && enteredAmount==='' && enteredDate==='' ) 
       {      
              setFormError({
                  
                  date:"enter date",
                  title:"Enter title",
                  amount:"Enter amount",
                 
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredName==='' && enteredAmount==='' && enteredDate==='' ) 
       {      
              setFormError({
                  
                  date:"enter date",
                  name:"enter ShopName",
                  amount:"Enter amount",
                 
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredTitle==='' && enteredAmount==='' ) 
       {      
              setFormError({
                  
                  // name:"Enter userName",
                  title:"Enter title",
                  amount:"Enter amount",
                //  date:"enter date",
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredTitle==='' && enteredName==='') 
       {      
              setFormError({
                  
                  name:"Enter ShopName",
                  title:"Enter title",
                  // amount:"Enter amount",
                //  date:"enter date",
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredTitle==='' && enteredDate==='') 
       {      
              setFormError({
                  
                  // name:"Enter userName",
                  title:"Enter title",
                  // amount:"Enter amount",
                 date:"enter date",
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredDate==='' && enteredAmount==='') 
       {      
              setFormError({
                  
                  // name:"Enter userName",
                  // title:"Enter title",
                  amount:"Enter amount",
                 date:"enter date",
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredName==='' && enteredDate==='') 
       {      
              setFormError({
                  
                  name:"Enter Name",
                  // title:"Enter title",
                  // amount:"Enter amount",
                 date:"enter date",
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredAmount==='' && enteredName==='') 
       {      
              setFormError({
                  
                  name:"Enter Name",
                  // title:"Enter title",
                  amount:"Enter amount",
                //  date:"enter date",
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredTitle==='' ) 
       {      
              setFormError({
                  
                  // name:"Enter userName",
                  title:"Enter title",
                  // amount:"Enter amount",
                //  date:"enter date",
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredName===''){
                    setFormError({
                        
                        name:"Enter ShopName",
                    });
                    setTimeout(() => {
                        setFormError("");
                      }, 3000);
                    return
                }
                
              
            if(enteredAmount===''){
              setFormError({
                  
                  amount:"Enter amount",
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredDate===''){
            setFormError({
                
                date:"Enter date",
            });
            setTimeout(() => {
                setFormError("");
              }, 3000);
            return
        };
        swal.fire({  
                      title: "Completed!",  
                      text: "Added Successfully!!!",  
                      icon: "success",
                  }).then(okay => {
                      
                  })
  







    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredName('');
    setEnteredCurrency('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          <p className='error'>{formError.title}</p>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
          <p className='error'>{formError.amount}</p>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2012-01-01'
            max={new Date().getFullYear().toString()+'-'+(new Date().getMonth()+1).toString().padStart(2,'0')+'-'+new Date().getDate().toString().padStart(2,'0')}
            value={enteredDate}
            onChange={dateChangeHandler}
          />
          <p className='error'>{formError.date}</p>
        </div>
        <div className='new-expense__control'>
          <label>Shop Name</label>
          <input
            type='text'
            value={enteredName}
            onChange={nameChangeHandler}
          />
          <p className='error'>{formError.name}</p>
        </div>



        {/* <div className='new-expense__control'>
          <label>Currency</label>
          <ExpenseCurrency
          
          value={enteredCurrency}
          onChangeCurrency={currencyChangeHandler}/> */}



          
        {/* <div className='new-expense__control'>
          <label>Currency</label>
          <ExpenseCurrency
          
          value={enteredCurrency}
        onChangeCurrency={currencyChangeHandler}/> */}


          
<div className='new-expense__control'>
          <label>Currency</label>
            
              <select  value={enteredCurrency} onChange={currencyChangeHandler}>
              <option value=''>Select any Currency</option>  
              {/* <option value='$'>USD</option>
          <option value='₹'>INR</option>
          <option value='€'>EUR</option>
          <option value='£'>GBP</option> */}
           {currencies.map((option)=>(
            <option key={option.code} value={option.value}>
              {option.code}
            </option>
        ))}
          

             </select>
             {/* <p className='error'>{formError.d}</p> */}
             </div>
          



          
        
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
    
  );
};

export default ExpenseForm;