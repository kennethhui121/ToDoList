import React, { useState } from 'react'

export const EditTodoForm = ({ editToDo, task  }) => {
  const  [ value, setValue ] = useState(task.task);

  function handleChange(e){
    setValue(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();

    editToDo(value, task.id)
    setValue('')
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='Update Task' onChange={handleChange} value={value} ></input>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
