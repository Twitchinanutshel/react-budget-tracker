import React from 'react'

const MoneyTrackers = () => {
  return (
    <div className='flex justify-between text-lg mt-6'>
      <div className='flex justify-between w-4/12 mx-5 px-4 py-8 bg-zinc-700 rounded-md'>
        <h1>Budget: $0</h1>
        <button>Edit</button>
      </div>
      <div className='w-4/12 mx-5 px-4 py-8 bg-green-400 rounded-md'>
        <h1>Remaining: $0</h1>
      </div>
      <div className='w-4/12 mx-5 px-4 py-8 bg-red-400 rounded-md'>
        Spent: $0
      </div>
    </div>
  )
}

export default MoneyTrackers