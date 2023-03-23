import React, { useState } from 'react';
// import Chart from '../Chart/Chart';
// import './ExpenseChart.css';
const ExpensesChart = (props) => {
const chartDataPoints = [
{ label: 'Jan', value: 0},
{ label: 'Feb', value: 0},
{ label: 'Mar', value: 0},
{ label: 'Apr', value: 0},
{ label: 'May', value: 0},
{ label: 'Jun', value: 0},
{ label: 'Jul', value: 0},
{ label: 'Aug', value: 0},
{ label: 'Sep', value: 0},
{ label: 'Oct', value: 0},
{ label: 'Nov', value: 0},
{ label: 'Dec', value: 0},
];
for(const expense of props.expenses) {
const expenseMonth = expense.date.getMonth();//startin at 0 jan is 0
chartDataPoints[expenseMonth].value += expense.amount;
}
const [selectedMonth, setSelectedMonth] = useState(null);
const handleMonthClick = (label) => {
setSelectedMonth(label);
};
const filteredData = selectedMonth ? chartDataPoints.filter((item) => item.label === selectedMonth) : chartDataPoints;
const totalExpenses = filteredData.reduce((acc, item) => acc + item.value, 0);
const allExpenses = chartDataPoints.reduce((acc, item) => acc + item.value, 0);

return (
<>
{/* <Chart dataPoints={chartDataPoints}/> */}
{/* <div > */}
{/* {filteredData.map((item) => (
<div
key={item.label}
onClick={() => handleMonthClick(item.label)}
style={{
height: item.chartDataPoints,
width: '50px',
display: 'inline-block',
margin: '5px',
backgroundColor: selectedMonth === item.label ? 'red' : 'blue',
}}
>
{item.label}

</div>
))}
</div> */}
<div className='text-success'>Total expenses : {totalExpenses/1000000000}</div>
</>
);
};

export default ExpensesChart;