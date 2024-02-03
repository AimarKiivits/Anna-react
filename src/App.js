import './components/Expenses/Expenses.css';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      date: new Date(2023, 9, 7),
      title: "New book",
      price: 69.69
    },
    {
      date: new Date(2666, 9, 7),
      title: "Genesis crystal",
      price: "Soul"
    }
  ]

  return (
    <div className='App'>
      <NewExpense></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
