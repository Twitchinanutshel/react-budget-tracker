import React from 'react'
import { useEffect, useState } from 'react'


const MoneyTrackers = () => {
  const [expenses, setExpenses] = useState([]); // state of expenses data
  const [editButton, setEditButton] = useState(true); // state of the editButton, true or false
  const [budget, setBudget] = useState(0); // state of the budget data

  useEffect(() => {
    const fetchExpenses = async () => {
      const res = await fetch('http://localhost:5000/expenses');
      const data = await res.json();
      setExpenses(data);
    }

    const fetchBudget = async () => {
      const res = await fetch('http://localhost:5000/budget/');
      const data = await res.json();
      setBudget(data.amount);
    }

    fetchExpenses();
    fetchBudget();
  }, []); // fetch the expenses, and the budget data


  const totalExpense = expenses.reduce((total, expense) => {
    return total + expense.cost;
  }, 0) // calculate the total expense by sum of each expense

  const onEditClick = () => {
    setEditButton(!editButton);
  } // set edit button to opposite of what it was when clicking on it, so the save button shows up

  const onSaveClick = async () => {
    const updatedBudget = { amount: budget }; // set the updatedBudget to an object of amount: budget, budget being the data we fetched

    await fetch('http://localhost:5000/budget', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBudget), // update the budget.amount in the backend using the new updatedBudget variable
    });
    setEditButton(true); // after clicking on save set the button back to edit
  }


  const remainingMoney = budget - totalExpense // calculate the remaining money left in the budget

  return (
    <div className='flex justify-between text-xl mt-6'>
      <div className='flex items-center justify-between w-4/12 mx-5 px-4 py-8 bg-zinc-700 font-medium rounded-md'>
        <div className='text-black'>
          {editButton ? (
            <h1>${budget}</h1>
          ) : (
            <input
              className='px-2 py-1 rounded-md'
              value={budget}
              type='number'
              onChange={(e) => setBudget(e.target.value)}
            />
          )} {/* if editButton is true, which it is by default, then display the budget. If false, display the input for a new budget */}
        </div>
        {editButton ? (
          <button className='bg-blue-500 px-2 py-1 rounded-md' onClick={() => onEditClick()}>Edit</button>
        ) : (
          <button className='bg-purple-500 px-2 py-1 rounded-md' onClick={() => onSaveClick()}>Save</button>
        )} {/* if editButton is true, display the edit button. If false, display the save button */}
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