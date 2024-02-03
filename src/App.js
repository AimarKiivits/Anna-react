import './components/Expenses/Expenses.css';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const DYMMY_EXPENSES = [
    {
      id: 'id1',
      date: new Date(2023, 9, 7),
      title: "New book",
      amount: 69
    },
    {
      id: 'id2',
      date: new Date(2666, 9, 7),
      title: "Genesis crystal",
      amount: 1
    }
  ]

  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={DYMMY_EXPENSES} />
    </div>
  );
}

export default App;
