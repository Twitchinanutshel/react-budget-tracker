import React from 'react'
import { useEffect, useState } from 'react'
import ExpenseListing from './ExpenseListing';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const res = await fetch('http://localhost:5000/expenses');
      const data = await res.json();
      setExpenses(data);
    }
    fetchExpenses();
  }, [])
  return (
    <div className='my-6'>
      <h1 className='text-3xl mb-6'>Expenses</h1>
      <div>
        {expenses.map((expense) => (
          <ExpenseListing key={expense.id} expense={expense} />
        ))}
      </div>
    </div>
  )
}

export default Expenses