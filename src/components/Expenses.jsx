import React from 'react'
import { useEffect, useState } from 'react'
import ExpenseListing from './ExpenseListing';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const res = await fetch('/api/expenses');
      const data = await res.json();
      setExpenses(data);
    }
    fetchExpenses();
  }, [expenses])

  const handleDelete = async (id) => {
    await fetch(`/api/expenses/${id}`, {method: "DELETE"});
    setExpenses(expenses.filter(expense => expense !== id));
  }
  return (
    <div className='my-6 mx-3'>
      <h1 className='text-3xl mb-6'>Expenses</h1>
      <div>
        {expenses.map((expense) => (
          <ExpenseListing key={expense.id} expense={expense} onDelete={handleDelete}/>
        ))}
      </div>
    </div>
  )
}

export default Expenses