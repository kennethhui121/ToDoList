import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {

  const [ toDos, setToDos] = useState([]) 
  
  const addToDo = toDo => {
    setToDos([...toDos, {id: uuidv4(), task: toDo, complete: false, isEditing: false}])
    console.log('this is todo wrapper', toDos)
  }

  const toggleComplete = id =>{
    setToDos(toDos.map(todo => todo.id === id ?
        {...todo, completed: !todo.completed} : todo))
  }

  const deleteToDo = id =>{
    setToDos(toDos.filter(todo => todo.id !== id))
  }

  const editToDo = id =>{
    setToDos(toDos.map(todo => todo.id === id ?
        {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id) =>{
    setToDos(toDos.map(todo => todo.id === id ?
        {...todo, task, isEditing: !todo.isEditing} : todo))
  }
  return (
    <div className='TodoWrapper'>
        <h1>Get Things Done</h1>
        <TodoForm addToDo={addToDo}/>
        {toDos.map((toDo,index) => (
            toDo.isEditing ? (
                <EditTodoForm editToDo={editTask} task={toDo}/>
            ) :
            <Todo task={toDo} key={index} 
            toggleComplete={toggleComplete} 
            deleteTodo = {deleteToDo}
            EditTodo = {editToDo} />
        ))}
    </div>
  )
}
