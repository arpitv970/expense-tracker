import React from 'react';
import Expense from './components/Expense';
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
            <Expense data={expenses} />
        </div>
    );
};

export default App;
