import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddTodo = ({ user, setUser }) => {
  const [projectTitle, setProjectTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdDate, setCreatedDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send an HTTP POST request to the backend endpoint to add a new project
      await axios.post('/api/projects', {
        title: projectTitle,
        description,
        createdDate,
      }, { headers: { Authorization: `Bearer ${user.token}` } });
      
      // Clear the form fields
      setProjectTitle('');
      setDescription('');
      setCreatedDate('');
      
      // Optionally, perform any other actions after adding the project
    } catch (error) {
      // Handle errors
      console.error('Failed to add project', error);
      setError('Failed to add project');
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/view-todo">View Todo</Link></li>
          <li><Link to="/add-todo">Add Todo</Link></li>
          <li><button onClick={() => setUser(null)}>Sign Out</button></li>
        </ul>
      </nav>
      <h2>Add Project</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="projectTitle">Project Title:</label>
          <input
            type="text"
            id="projectTitle"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="createdDate">Created Date:</label>
          <input
            type="date"
            id="createdDate"
            value={createdDate}
            onChange={(e) => setCreatedDate(e.target.value)}
          />
        </div>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AddTodo;
