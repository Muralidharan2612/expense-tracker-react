import React from "react";
import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem";



const ExpenseList = (props) => {

    if (props.expenses.length === 0) return <h2 className="expenses-list__fallback">No Expense Found.</h2>;

    return (
        <ul className="expenses-list">
            {props.expenses.map(item => (
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </ul>
    )
}

export default ExpenseList;