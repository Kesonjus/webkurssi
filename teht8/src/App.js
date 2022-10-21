import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const URL = 'http://localhost:3001/'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(URL)
    .then((response) => {
      setTasks(response.data)
    }).catch (error => {
      alert(error.response.data.error)
    })
  },[])

  
  return (
    <div>
      <h3> MY tasks</h3>
      <ol>
        {tasks.map(task => (
          <li key={task.id}>{task.description}</li>
        ))}
      </ol>
    </div>
  );

}

export default App;
