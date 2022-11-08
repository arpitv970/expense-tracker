import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expense = (props) => {
    const expenses = props.data;
    
    return (
        <div className='expenses'>
            {console.log(expenses)}
            {expenses.map((item, i) => (
                <ExpenseItem data={item} />
            ))}
        </div>
    );
};

export default Expense;
