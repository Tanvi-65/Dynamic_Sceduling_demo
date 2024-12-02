import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const AdminLogin = () => {
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleRegisterRedirect = () => {
    navigate('/admin/register'); // Navigate to the admin register page
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Admin Login</h1>
      <form>
        <input type="text" placeholder="Username" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <button style={styles.button}>Login</button>
      </form>
      <button style={styles.registerButton} onClick={handleRegisterRedirect}>
        Register
      </button>
    </div>
  );
};

const styles = {
  input: { margin: '10px', padding: '10px', width: '200px' },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  registerButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default AdminLogin;
