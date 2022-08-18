import ExpenseItem from './ExpenseItem';
import './Expenses.css';
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

function Expenses(props) {
  return (
    <div className='expenses-main'>
      {props.expenses.map((el, key) => {
        console.log(el.expenseDate);
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
  );
}
export default Expenses;
