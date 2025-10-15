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
      <form onSubmit={handleSubmit} className="task-form">
        <div className="input-group">
          <input
            type='text'
            placeholder='Enter the task'
            value={task}
            onChange={(e)=> setTask(e.target.value)}
            className="task-input"
          />
          <button type="submit" className="add-btn">Add Task</button>
        </div>

        <div className="select-group">
          <select value={priority} onChange={(e)=> setPriority(e.target.value)} className="priority-select">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <select value={category} onChange={(e)=>setCategory(e.target.value)} className="category-select">
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
          </select>
        </div>
      </form>
  )
}
