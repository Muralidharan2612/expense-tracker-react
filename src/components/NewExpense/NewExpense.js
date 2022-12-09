import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEdit, setIsEdit] = useState(false);
    const onSaveHandler = (expenseProp) => {
        const expenseData = {
            ...expenseProp,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    };

    const startAddExpense = () => {
        setIsEdit(true);
    };

    const stopAddExpense = () => {
        setIsEdit(false);
    }

    return (
        <div className='new-expense'>
            {!isEdit &&
                <button type='button' onClick={startAddExpense}> Add Expense </button>
            }
            {isEdit &&
                <ExpenseForm onSaveExpense={onSaveHandler} onEdit={stopAddExpense}/>
            }
        </div>
    );

}

export default NewExpense;