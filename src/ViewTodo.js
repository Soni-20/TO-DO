import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link component

const ViewTodo = ({ user }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects', { headers: { Authorization: `Bearer ${user.token}` } });
        setProjects(response.data.projects);
      } catch (error) {
        console.error('Failed to fetch projects', error);
      }
    };

    fetchProjects();
  }, [user]);

  return (
    <div>
      <h2>View Todo</h2>
      <Link to="/add-todo">Add Todo</Link> {/* Link to AddTodo page */}
      {projects.map(project => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <ul>
            {project.todos.map(todo => (
              <li key={todo.id}>
                <div>
                  <strong>Description:</strong> {todo.description}
                </div>
                <div>
                  <strong>Created Date:</strong> {todo.createdDate}
                </div>
                <div>
                  <strong>Updated Date:</strong> {todo.updatedDate}
                </div>
                <div>
                  <strong>Status:</strong> {todo.status}
                </div>
                <button>Mark as {todo.status === 'pending' ? 'Complete' : 'Pending'}</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ViewTodo;
