import Card from './components/UI/Card';
import ExpenseItem from './components/Expenses/ExpenseItem';
import './components/Expenses/Expenses.css';

const App = () => {
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
      <Card className='expenses'>
        <ExpenseItem expenseData={data[0]}></ExpenseItem>
        <ExpenseItem expenseData={data[1]}></ExpenseItem>
      </Card>
    </div>
  );
}

export default App;
