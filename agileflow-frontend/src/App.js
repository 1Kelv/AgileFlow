import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard.js';
import Backlog from './pages/Backlog.js';
import Sprint from './pages/Sprint.js';
import './styles/styles.css';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/backlog">Backlog</Link></li>
          <li><Link to="/sprint">Sprint</Link></li>
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/backlog" element={<Backlog />} />
          <Route path="/sprint" element={<Sprint />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
