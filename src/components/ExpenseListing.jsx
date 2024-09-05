import React from 'react'

const ExpenseListing = ({ expense }) => {
  return (
    <div className='mx-2 my-3 text-lg'>
      <div className='flex justify-between bg-blue-500 px-4 py-2 rounded-md'>
        <h1>{expense.name}</h1>
        <h1>${expense.cost}</h1>
      </div>
    </div>
  )
}

export default ExpenseListing