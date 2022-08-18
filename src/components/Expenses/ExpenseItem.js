import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expenseTitle);

  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.expenseDate} />
      <div className='expense-item__description'>
        {/* <h2>{props.expenseTitle}</h2> */}
        <h2>{title}</h2>
        <div className='expense-item__price'>{props.expenseAmount}</div>
        <button onClick={clickHandler}>Change Title!</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
