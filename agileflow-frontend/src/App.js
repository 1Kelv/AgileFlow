import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Backlog from './pages/Backlog';
import Sprint from './pages/Sprint';

function App() {
  return (
    <div>
      <h1>Welcome to AgileFlow</h1>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/backlog" element={<Backlog />} />
        <Route path="/sprint" element={<Sprint />} />
      </Routes>
    </div>
  );
}

export default App;
