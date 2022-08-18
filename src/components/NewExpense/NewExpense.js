import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
  const saveExpenseHandler = (userExpenseInput) => {
    const expenseData = {
      ...userExpenseInput,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
