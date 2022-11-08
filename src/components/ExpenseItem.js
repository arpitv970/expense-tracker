import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const {date, title, amount} = props.data
    return (
        <div className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__desc'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
