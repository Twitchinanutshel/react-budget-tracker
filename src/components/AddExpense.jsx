import React from 'react'
import { useState } from 'react'

const AddExpense = ({ addExpenseSave }) => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const handleSave = (e) => {
    e.preventDefault()
    const newExpense = {
      name,
      cost
    }
    addExpenseSave(newExpense)
  }

  return (
    <div>
      <h1>Add Expense</h1>
      <form onSubmit={handleSave}>
        <div className='flex'>
          <div className='flex text-black'>
            <p>Name:</p>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='flex text-black'>
            <p>Cost:</p>
            <input
              type='number'
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </div>
        </div>
        <button type='submit' >Save</button>
      </form>
    </div>
  )
}

export default AddExpense
