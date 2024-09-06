import './App.css'
import AddExpense from './components/AddExpense'
import Header from './components/Header'
import MoneyTrackers from './components/MoneyTrackers'
import Expenses from './components/Expenses'
document.body.style.backgroundColor = '#242424'

function App() {

  const addExpense = async (newExpense) => {
    const res = await fetch('http://localhost:5000/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newExpense),
    });
    return;
  };

  return (
    <>
      <div className='mx-12 my-6'>
        <Header />
        <MoneyTrackers />
        <Expenses />
        <AddExpense addExpenseSave={addExpense} />
      </div>
    </>
  )
}

export default App
