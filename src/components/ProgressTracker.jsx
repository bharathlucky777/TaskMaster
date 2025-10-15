import React from 'react'

export default function ProgressTracker({ tasks }) {
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="progress-tracker">
      <h2 className="progress-title">Progress Tracker</h2>
      <p className="progress-text">Completed: {completedTasks} / {totalTasks}</p>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="progress-percentage">{Math.round(progress)}% Complete</p>
    </div>
  )
}
