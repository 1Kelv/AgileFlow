import React, { useState } from 'react';
import './Backlog.css';

const Backlog = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Implement user authentication', status: 'Pending' },
    { id: 2, title: 'Design UI for the dashboard', status: 'In Progress' },
    { id: 3, title: 'Optimize database queries', status: 'Completed' }
  ]);

  const addTask = (title) => {
    if (title.trim() === '') return;
    const newTask = { id: tasks.length + 1, title, status: 'Pending' };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="backlog-container">
      <h1>Product Backlog</h1>
      <p>Organize and track your project tasks efficiently.</p>

      <div className="task-input">
        <input 
          type="text" 
          placeholder="Enter new task..." 
          id="newTask" 
        />
        <button onClick={() => addTask(document.getElementById('newTask').value)}>
          Add Task
        </button>
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className={`task-item ${task.status.toLowerCase()}`}>
            <h3>{task.title}</h3>
            <span className="task-status">{task.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Backlog;
