import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        {/* AgileFlow Introduction */}
        <h1>Welcome to AgileFlow</h1>
        <p>
          AgileFlow is your all-in-one Agile project management tool designed to help 
          teams efficiently manage sprints, track progress, and optimize workflow.
        </p>

        {/* Dashboard Overview */}
        <h2>Dashboard Overview</h2>
        <p>Get a comprehensive view of your Agile project progress.</p>
      </header>

      {/* Statistics Section */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <h2>12</h2>
          <p>Active Sprints</p>
        </div>
        <div className="stat-card">
          <h2>25</h2>
          <p>Completed Tasks</p>
        </div>
        <div className="stat-card">
          <h2>8</h2>
          <p>Pending Tasks</p>
        </div>
      </div>

      {/* Project Overview */}
      <section className="dashboard-content">
        <h3>Project Overview</h3>
        <p>
          Track your ongoing Agile sprints, backlog items, and key milestones. 
          Stay ahead with real-time updates and insights.
        </p>
        <button className="cta-button">View Reports</button>
      </section>
    </div>
  );
};

export default Dashboard;
