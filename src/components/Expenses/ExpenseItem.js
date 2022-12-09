import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const amount = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(props.amount);

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description' >
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{amount}</div>
            </div>
        </Card>
    )
};

export default ExpenseItem;