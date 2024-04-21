import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AddTodo from './AddTodo';

function App() {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);

  // Function to handle adding a new todo
  const addTodo = (todoText) => {
    setTodos([...todos, todoText]);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            {user ? (
              <li><button onClick={() => setUser(null)}>Sign Out</button></li>
            ) : (
              <>
                <li><Link to="/signin">Sign In</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
              </>
            )}
            {/* Link to the new "Add Todo" page */}
            <li><Link to="/addtodo">Add Todo</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
          {/* Route for the "Add Todo" page */}
          <Route path="/addtodo" element={<AddTodo addTodo={addTodo} />} />
          {/* Default route for Home component */}
          <Route path="/" element={<Home todos={todos} />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = ({ todos }) => {
  return (
    <div>
      <h2>To Do Application</h2>
      {/* List of todos */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
