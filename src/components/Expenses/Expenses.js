import './Expenses.css'
import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('')

    const changeFilterHandler = (enteredYear) => {

        setFilteredYear(enteredYear)
        console.log('In Expenses.js')
        console.log(enteredYear)
    }

    return(
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={changeFilterHandler} year={filteredYear}/>
            <ExpenseItem expenseData={props.expenses[0]} />
            <ExpenseItem expenseData={props.expenses[1]} />
        </Card>
    )
}

export default Expenses