import { useState } from 'react';
import ExpenseList from './ExpenseList';
import './Expense.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';

function Expense(props) {
    const [filterYear, setFilterYear] = useState('2020');

    const onSelectedYear = selectedYear => {
        setFilterYear(selectedYear)
    };

    const filterData = props.expenses.filter(item => {
        return item.date.getFullYear().toString() === filterYear;
    })

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selectedYear={filterYear}
                    onSelectedYear={onSelectedYear}
                />
                <ExpenseChart expense={filterData} />
                <ExpenseList expenses={filterData} />
            </Card>
        </div>
    );

};

export default Expense;