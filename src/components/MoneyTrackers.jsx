import React from 'react'
import { useEffect, useState } from 'react'


const MoneyTrackers = () => {
  const [expenses, setExpenses] = useState([]);
  const [editButton, setEditButton] = useState(false);
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    const fetchExpenses = async () => {
      const res = await fetch('http://localhost:5000/expenses');
      const data = await res.json();
      setExpenses(data);
    }
    fetchExpenses();
  }, [])

  const totalExpense = expenses.reduce((total, expense) => {
    return total + expense.cost;
  }, 0)

  const onEditClick = () => {
    setEditButton(!editButton);
  }
  const onSaveClick = () => {
    setEditButton(false)
  }

  const remainingMoney = budget - totalExpense

  return (
    <div className='flex justify-between text-xl mt-6'>
      <div className='flex items-center justify-between w-4/12 mx-5 px-4 py-8 bg-zinc-700 font-medium rounded-md'>
        <div className='text-black'>
          {editButton ? (
            <input
              className='px-2 py-1 rounded-md'
              value={budget}
              type='number'
              onChange={(e) => setBudget(e.target.value)}
            />
          ) : (
            <h1>${budget}</h1>
          )}
        </div>
        {editButton ? (
          <button className='bg-purple-500 px-2 py-1 rounded-md' onClick={() => onSaveClick()}>Save</button>
        ) : (
          <button className='bg-blue-500 px-2 py-1 rounded-md' onClick={() => onEditClick()}>Edit</button>
        )}
      </div>

      <div className='flex items-center w-4/12 mx-5 px-4 py-8 bg-green-500 font-medium rounded-md'>
        <h1>Remaining: ${remainingMoney}</h1>
      </div>

      <div className='flex items-center w-4/12 mx-5 px-4 py-8 bg-red-500 font-medium rounded-md'>
        Spent: ${totalExpense}
      </div>
    </div>
  )
}

export default MoneyTrackers