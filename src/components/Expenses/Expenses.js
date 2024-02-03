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

    props.expenses.map((expense) => {
        console.log(expense)
    })

    return(
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={changeFilterHandler} year={filteredYear}/>
            {
                props.expenses.map((expense) => {
                    return <ExpenseItem expenseData={expense} key={expense.id}/>
                })
            }
        </Card>
    )
}

export default Expenses