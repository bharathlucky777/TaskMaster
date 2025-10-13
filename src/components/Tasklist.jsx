import React from 'react'

export default function Tasklist({ tasks, toggleTask, deleteTask }) {
  return (
    <div>
      <h2>Task List Component</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <span>{task.text}</span>
            <span style={{ color: task.priority === 'High' ? 'red' : task.priority === 'Medium' ? 'orange' : 'green' }}>
              {task.priority}
            </span>
            <span>{task.category}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && <p>No tasks added yet.</p>}
    </div>
  )
}
