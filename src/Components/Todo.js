import React from 'react'


export const Todo = ( {task, toggleComplete, deleteTodo, EditTodo}) => {
  return (
    <div className='Todo'>
        <p onClick ={() => toggleComplete(task.id)} className={`${task.completed ? `completed` : ''}`}>{task.task}</p>
        <div>
            <button onClick = {() => EditTodo(task.id)}>Update</button>
            <button onClick={() =>deleteTodo(task.id)}>Delete</button>
        </div>
    </div>
  )
}
