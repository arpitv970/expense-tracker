import './ExpenseItem.css'

const ExpenseItem = () => {
  return (
    <div className='expense-item'>
      <div>Oct 25 2022</div>
      <div className='expense-item__desc'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>$300</div>
      </div>
    </div>
  )
}

export default ExpenseItem