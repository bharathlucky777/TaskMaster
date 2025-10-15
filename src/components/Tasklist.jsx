import React from 'react'

export default function Tasklist({ tasks, toggleTask, deleteTask }) {
  return (
    <div className="task-list">
      <h2 className="task-list-title">Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={`task-item ${task.completed ? 'task-completed' : ''}`}>
            <span className="task-text">{task.text}</span>
            <span className="task-details">(
              <span className={`priority-${task.priority.toLowerCase()}`}>
                {task.priority}
              </span>
              , {task.category})</span>
            <div className="task-btns">
              <button className="toggle-btn" onClick={() => toggleTask(index)}>
                {task.completed ? 'Mark Incomplete' : 'Complete'}
              </button>
              <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && <p className="no-tasks">No tasks added yet.</p>}
    </div>
  )
}
