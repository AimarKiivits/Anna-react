import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [showForm, setShowForm] = useState(false)

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        setShowForm(false)
    }

    const showFormHandler = () => {
        setShowForm(true)
    }

    const hideFormHandler = () => {
        setShowForm(false)
    }

    if (showForm === false) {
        return(
            <div className='new-expense__start'>
                <button onClick={showFormHandler}>Add New Expense</button>
            </div>
        )
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number' min='0.01' step='0.01'
                        onChange={amountChangeHandler}
                        value={enteredAmount}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date' min='2023-01-01' max='2025-01-31'
                        onChange={dateChangeHandler}
                        value={enteredDate}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
                <button onClick={hideFormHandler}>Cancel</button>
            </div>
        </form>
    )
}

export default ExpenseForm
