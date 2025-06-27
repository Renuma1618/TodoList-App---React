import React, { useState } from 'react'

const Todofrom = ({addtodo}) => {

  const [value, setvalue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addtodo(value);
    
    setvalue(''); // Clear the input field after submission
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}> 
    <input text='text' className='todo-input' value={value} placeholder='what is the task today?' onChange={(e)=>setvalue(e.target.value)} ></input>
    <button type='submit' className='todoform-button'>Add Task</button>
    </form>
  )
}

export default Todofrom
