import React, { useState } from 'react'

const Edit = ({ edit, task }) => {
  const [value, setvalue] = useState(task.task); // Initialize with the current task value

  const handleSubmit = (e) => {
    e.preventDefault();
    edit(value, task.id);
    setvalue(''); // Clear the input field after submission
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}> 
      <input type='text' className='todo-input' value={value} placeholder='Update' onChange={(e)=>setvalue(e.target.value)} />
      <button type='submit' className='todoform-button'>Update Task</button>
    </form>
  )
}

export default Edit


