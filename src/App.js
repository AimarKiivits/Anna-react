import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import TextBox from './components/TextBox';
import './components/Expenses.css';

function App() {
  const data = [
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
      <div className='expenses'>
        <ExpenseItem expenseData={data[0]}></ExpenseItem>
        <ExpenseItem expenseData={data[1]}></ExpenseItem>
      </div>
    </div>
  );
}

export default App;
