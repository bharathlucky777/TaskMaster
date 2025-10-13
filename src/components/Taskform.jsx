import React from 'react'
import { useState } from 'react'

export default function Taskform({addTask}) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('General');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({text: task, priority, category, completed: false});
      setTask('');
      setPriority('Medium');
      setCategory('General');
    }
  }
  return (
      <form onSubmit={handleSubmit} id="task-form">
        <div id="inp">
          <input 
            type='text' 
            placeholder='Enter the task'
            value={task}
            onChange={(e)=> setTask(e.target.value)} 
          />
          <span><button type="submit">Add Task</button></span>
          {/* <h1>{task}</h1> */}
        </div>

        <div id="btns">
          <select value={priority} onChange={(e)=> setPriority(e.target.value)}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <select value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
          </select>
        </div>
        {/* <h1>{task} {priority} {category}</h1> */}
      </form>
  )
}
