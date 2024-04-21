// SignIn.js

import React, { useState } from 'react';
import { signIn } from './api'; // Import the signIn function from the api.js file

const SignIn = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a sign-in request to the backend using the signIn function
      const userData = await signIn(username, password);
      // Update the user state in the parent component
      setUser(userData);
    } catch (error) {
      // Handle sign-in errors
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
