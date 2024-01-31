import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate.js"


const ExpenseItem = (props) => {
    return (
        <div className="expense-item">
            <ExpenseDate className='card' date={props.expenseData.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.expenseData.title}</h2>
                <div className="expense-item__price">{props.expenseData.price}</div>
            </div>
        </div>
    )
} 

export default ExpenseItem