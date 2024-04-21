import React from 'react';

const SignOut = ({ setUser }) => {
  const handleSignOut = () => {
    // Perform any necessary cleanup or API calls for sign-out
    // For example, clear user data from local storage, etc.
    
    // Then, set the user state to null to indicate sign-out
    setUser(null);
  };

  return (
    <div>
      <h2>Sign Out</h2>
      <p>Are you sure you want to sign out?</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;
