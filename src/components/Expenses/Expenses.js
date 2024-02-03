import './Expenses.css'
import { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023')

    const changeFilterHandler = (enteredYear) => {

        setFilteredYear(enteredYear)
        console.log('In Expenses.js')
        console.log(enteredYear)
    }

    props.expenses.map((expense) => {
        console.log(expense)
    })

    const filteredExpenses = props.expenses.filter((expense) => {
        return filteredYear === '' || expense.date.getFullYear().toString() === filteredYear;
    });
    console.log(filteredExpenses + 'filteredExpenses')

    return(
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={changeFilterHandler}/>
            <ExpensesList expenses={filteredExpenses}/>
        </Card>
    )
}

export default Expenses