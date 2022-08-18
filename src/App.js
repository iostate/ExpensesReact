// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import ExpenseForm from './components/NewExpense/ExpenseForm';
import NewExpense from './components/NewExpense/NewExpense';

// function round(value, minDecimals, maxDecimals) {
//   const formattedMoneyValue = value.toLocaleString('en', {
//     useGrouping: false,
//     minDecimals,
//     maxDecimals,
//   });
//   return formattedMoneyValue;
// }
// function round(value, minimumFractionDigits, maximumFractionDigits) {
//   const formattedValue = value.toLocaleString('en', {
//     useGrouping: false,
//     minimumFractionDigits,
//     maximumFractionDigits,
//   });
//   return Number(formattedValue);
// }

const expenses = [
  {
    expenseDate: new Date(2022, 1, 14),
    expenseTitle: 'Lorem Opsda',
    expenseAmount: 291.44,
  },
  {
    expenseDate: new Date(2022, 1, 14),
    expenseTitle: 'Lorem Opsda',
    expenseAmount: 291.44,
  },
  {
    expenseDate: new Date(2022, 1, 14),
    expenseTitle: 'Lorem Opsda',
    expenseAmount: 291.44,
  },
  {
    expenseDate: new Date(2022, 1, 14),
    expenseTitle: 'Lorem Opsda',
    expenseAmount: 291.44,
  },
];
const addExpenseHandler = (expense) => {
  console.log(expense);
};

function App() {
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
// getRandomArbitrary(7.12, 12922.23)
