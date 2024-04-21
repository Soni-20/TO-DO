import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyComponent() {
  // State to store the fetched data
  const [data, setData] = useState([]);

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    // Define the URL of your Spring Boot API endpoint
    const apiUrl = 'http://localhost:8084/api/projects';

    // Make a GET request to the API endpoint using Axios
    axios.get(apiUrl)
      .then(response => {
        // Set the fetched data to the state
        setData(response.data);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div>
      {/* Display the fetched data */}
      <h1>Data from Backend</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;
