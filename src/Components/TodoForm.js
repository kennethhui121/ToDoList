import React, { useState } from 'react'

export const TodoForm = ({ addToDo  }) => {
  const  [ value, setValue ] = useState('');

  function handleChange(e){
    setValue(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();

    addToDo(value)
    setValue('')
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='Task ToDo' onChange={handleChange} value={value} ></input>
        <button type='submit' className='todo-btn'> Add Task</button>
    </form>
  )
}
