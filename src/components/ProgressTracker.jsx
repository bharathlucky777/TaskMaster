import React from 'react'

export default function ProgressTracker({ tasks }) {
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div>
      <h2>Progress Tracker</h2>
      <p>Completed: {completedTasks} / {totalTasks}</p>
      <div style={{ width: '100%', height: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
        <div style={{ width: `${progress}%`, height: '100%', backgroundColor: '#4caf50', borderRadius: '10px' }}></div>
      </div>
      <p>{Math.round(progress)}% Complete</p>
    </div>
  )
}
