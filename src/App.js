import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import TextBox from './components/TextBox';

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
      <ExpenseItem expenseData={data[0]}></ExpenseItem>
      <TextBox></TextBox>
      <ExpenseItem expenseData={data[1]}></ExpenseItem>
      <TextBox></TextBox>
    </div>
  );
}

export default App;
