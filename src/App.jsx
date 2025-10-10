import React from 'react'
import Taskform from './assets/components/Taskform'
import Tasklist from './assets/components/Tasklist'
import Progresstrack from './assets/components/Progresstrack'

export default function App() {
  return (
    <div>
      <h1>Task Master</h1>
      <p>Your friendly Task Buddy</p>
      <Taskform />
      <Tasklist />
      <Progresstrack />
      <button>Clear All Tasks</button>
    </div>
  )
}

