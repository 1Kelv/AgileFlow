import React, { useEffect, useState } from 'react';
import './Sprint.css';

const Sprint = () => {
    const [sprints, setSprints] = useState([]);

    useEffect(() => {
        const fetchSprints = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/sprints');
                const data = await response.json();
                setSprints(data);
            } catch (error) {
                console.error("Error fetching sprints:", error);
            }
        };

        fetchSprints();
    }, []);

    return (
        <div className="sprint-container">
            <h2>Sprint Overview</h2>
            {sprints.length > 0 ? (
                sprints.map((sprint) => (
                    <div className="sprint-card" key={sprint.id}>
                        <h3>{sprint.name}</h3>
                        <p><strong>Start Date:</strong> {new Date(sprint.start_date).toLocaleDateString()}</p>
                        <p><strong>End Date:</strong> {new Date(sprint.end_date).toLocaleDateString()}</p>
                        <p><strong>Status:</strong> {sprint.status}</p>
                    </div>
                ))
            ) : (
                <p>No sprints available.</p>
            )}
        </div>
    );
};

export default Sprint;
