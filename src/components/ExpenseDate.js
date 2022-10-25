import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.toLocaleString('en-US', { year: 'numeric' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });

    return (
        <div>
            <div className='expense-item__date'>
                <div className='expense-item__date-year'>{year}</div>
                <div className='expense-item__date-month'>{month}</div>
                <div className='expense-item__date-day'>{day}</div>
            </div>
        </div>
    );
};

export default ExpenseDate;
