import React, { useState, useEffect } from 'react'
import Todofrom from './Todofrom'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo'
import Edit from './Edit'

const TodoWrapper = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    console.log(todos)
  }, [todos])

  const addTodo = (task) => {
    setTodos([...todos, { id: uuidv4(), task, completed: false, isEditing: false }])
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const edit = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
  }

  const editTask = (value, id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, task: value, isEditing: false } : todo))
  }

  return (
    <div className='TodoWrapper'>
      <h1>Todo List</h1>
      <Todofrom addtodo={addTodo} />
      {todos.map(todo => (
        todo.isEditing ? (
          <Edit edit={editTask} task={todo} key={todo.id} />
        ) : (
          <Todo
            task={todo}
            key={todo.id}
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
