import React from 'react'
import { useState } from 'react'

const AddExpense = ({ addExpenseSave }) => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState();

  const handleSave = (e) => {
    const newExpense = {
      name,
      cost: parseFloat(cost)
    }
    addExpenseSave(newExpense)

    setName('');
    setCost('');
  }

  return (
    <div className='bg-zinc-700 mx-5 mt-8 w-5/12 p-2 rounded-md'>
      <h1 className='pt-2 ml-3 mb-2 text-2xl'>Add Expense</h1>
      <form className='p-3 text-lg' onSubmit={handleSave}>
        <div className='flex space-x-12'>
          <div className='flex space-x-2 text-black'>
            <p>Name:</p>
            <input
              required
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='flex space-x-2 text-black'>
            <p>Cost:</p>
            <input
              required
              type='number'
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </div>
        </div>
        <button className='bg-blue-500 px-3 py-1 rounded-md mt-6 text-xl hover:bg-purple-500 active:bg-blue-500' type='submit'>Save</button>
      </form>
    </div>
  )
}

export default AddExpense
