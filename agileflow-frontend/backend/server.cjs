const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
app.use(express.json());
app.use(cors());

// MySQL Database Connection
const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'yourpassword',
    database: process.env.DB_NAME || 'agileflow_db',
});

// Fetch All Sprints
app.get('/api/sprints', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM sprints');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching sprints:', error);
        res.status(500).json({ error: 'Failed to fetch sprints' });
    }
});

// Fetch Sprint Statistics for Dashboard
app.get('/api/sprint-stats', async (req, res) => {
    try {
        const [activeSprints] = await db.query("SELECT COUNT(*) AS active FROM sprints WHERE status = 'in_progress'");
        const [completedTasks] = await db.query("SELECT COUNT(*) AS completed FROM tasks WHERE status = 'completed'");
        const [pendingTasks] = await db.query("SELECT COUNT(*) AS pending FROM tasks WHERE status = 'pending'");

        res.json({
            activeSprints: activeSprints[0].active,
            completedTasks: completedTasks[0].completed,
            pendingTasks: pendingTasks[0].pending
        });
    } catch (error) {
        console.error('Error fetching sprint stats:', error);
        res.status(500).json({ error: 'Failed to fetch sprint statistics' });
    }
});

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export for testing if needed
