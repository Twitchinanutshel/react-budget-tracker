import './App.css'
import AddExpense from './components/AddExpense'
import Header from './components/Header'
import MoneyTrackers from './components/MoneyTrackers'
import Expenses from './components/Expenses'
document.body.style.backgroundColor = '#242424'

function App() {

  return (
    <>
      <div className='mx-12 my-6'>
        <Header />
        <MoneyTrackers />
        <Expenses />
        <AddExpense />
      </div>
    </>
  )
}

export default App
