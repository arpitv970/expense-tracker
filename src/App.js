import React from 'react';
import ExpenseItem from './components/ExpenseItem';

const App = () => {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 89.34,
            date: new Date(2022, 10, 20),
        },
        {
            id: 'e2',
            title: 'Car Insurance',
            amount: 234.32,
            date: new Date(2022, 9, 25),
        },
        {
            id: 'e3',
            title: 'OTT Subcription',
            amount: 98.56,
            date: new Date(2022, 8, 15),
        },
        {
            id: 'e4',
            title: 'New Desk',
            amount: 60.56,
            date: new Date(2022, 7, 10),
        },
    ];
    return (
        <div>
            <h1>Expense Tracker</h1>
            <ExpenseItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            />
            <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            />
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            />
            <ExpenseItem
                title={expenses[3].title}
                amount={expenses[3].amount}
                date={expenses[3].date}
            />
        </div>
    );
};

export default App;
