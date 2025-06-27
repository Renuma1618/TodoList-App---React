import React, { useState } from 'react'
import Todofrom from './Todofrom'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import Edit from './Edit';
uuidv4();

const TodoWrapper = () => {

  const[todo,settodo]=useState([])

  const addtodo = (todos) => {
    settodo([...todo, {id:uuidv4(), task:todos, completed:false, isEditing:false}])
    console.log(todo)
  }

  const toggleComplete = (id) => {
    settodo(todo.map(todo=>todo.id === id?{...todo, completed:!todo.completed}:todo))
  }

  const deleteTodo = (id) =>{
    settodo(todo.filter(todo=>todo.id !== id))
  }

  const edit = (id) => {
    settodo(todo.map(todo=>todo.id === id?{...todo, isEditing:!todo.isEditing}:todo))
  }

  const editTask = (value, id) => {
    settodo(todo.map(todo=>todo.id === id?{...todo, task: value, isEditing:!todo.isEditing}:todo))
  }

  return (
    <div className='TodoWrapper'>
      <h1>Todo List</h1>
      <Todofrom addtodo={addtodo}/>
      {todo.map((todos) => (
        todos.isEditing ? (
          <Edit edit={editTask} task={todos} key={todos.id} />
        ) : (
          <Todo
            task={todos}
            key={todos.id}
            toggle={toggleComplete}
            deleteTodo={deleteTodo}
            edit={edit}
          />
        )
      ))}
    </div>
  )
}

export default TodoWrapper
