import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <div className='expenses-main'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.expenses.map((el, key) => {
          return (
            <ExpenseItem
              key={key}
              expenseAmount={round(getRandomArbitrary(7.12, 12922.23), 2)}
              expenseDate={el.expenseDate}
              expenseTitle={el.expenseTitle}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Expenses;

// listen to changes on dropdown
// when user select new year (new state)
// listen to that event, and send PickedYear to Expenses component
