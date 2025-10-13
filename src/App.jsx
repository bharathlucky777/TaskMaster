
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'
import Progresstrack from './components/Progresstrack'
import { useEffect, useState } from 'react'

export default function App() {

  const [tasks, settasks] = useState([]);

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  })

  const addTask = (task) => {
    settasks(task);
  }
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

