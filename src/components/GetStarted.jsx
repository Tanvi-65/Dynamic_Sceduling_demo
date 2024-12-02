import React from 'react';
import { useNavigate } from 'react-router-dom'; // React Router hook for navigation

const GetStarted = () => {
  const navigate = useNavigate(); // Hook to enable navigation

  // Function to handle button click
  const handleGetStarted = () => {
    navigate('/role-selection'); // Navigate to the role selection screen
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to Dynamic Class Scheduling System</h1>
      <p style={styles.text}>Click below to get started!</p>
      <button style={styles.button} onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
  },
  text: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default GetStarted;