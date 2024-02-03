import './Expenses.css'
import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'

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

    return(
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={changeFilterHandler} year={filteredYear}/>
            {
                filteredExpenses.map((expense) => {
                    return <ExpenseItem expenseData={expense} key={expense.id} />
                })
            }
        </Card>
    )
}

export default Expenses