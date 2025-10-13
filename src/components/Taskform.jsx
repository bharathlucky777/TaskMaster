import React from 'react'
import { useState } from 'react'

export default function Taskform({addTask}) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('General');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({text: task, priority, category, completed: false});
  }
  return (
      <form onSubmit={handlesubmit} id="task-form">
        <div id="inp">
          <input type='text' placeholder='Enter the task'
          onChange={(e)=> setTask(e.target.value)} />
          <span><button type="submit">Add Task</button></span>
          {/* <h1>{task</h1> */}
        </div>

        <div id="bt
        ns">
          <select onChange={(e)=> setPriority(e.target.value)}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <select onChange={(e)=>setCategory(e.target.value)}>
            <option value="general">General</option>
            <option value="work">work</option>
            <option value="personal">personal</option>
            </select>
            </div>
            {/* <h1>{task} {priority} {category}</h1> */}
            </form>
            )
          }