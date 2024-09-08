import React from 'react'

const ExpenseListing = ({ expense, onDelete }) => {
  return (
    <div className='mx-2 my-3 text-lg'>
      <div className='flex items-center justify-between bg-blue-500 px-4 py-2 rounded-md'>
        <h1>{expense.name}</h1>
        <div className='flex items-center space-x-6'>
          <h1>${expense.cost}</h1>
          <button className='bg-red-500 px-3 py-1 rounded-md' onClick={() => onDelete(expense.id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ExpenseListing