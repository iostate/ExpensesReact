import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });

    // React schedules state updates, this method ensures we get most up to date state
    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, amount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, date: event.target.value };
    // });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataToSubmit = {
      title,
      date,
      amount,
    };
    console.log(dataToSubmit);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2022-01-01' max='2022-12-31' onChange={dateChangeHandler} />
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;