import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleSubmit = () => {
    if (!selectedRole) {
      alert('Please select a role');
      return;
    }
    navigate(`/${selectedRole}/login`);
  };

  return (
    <div style={styles.container}>
      <h1>Select Your Role</h1>
      <p style={styles.text}>Please select your role to proceed.</p>

      <div style={styles.buttonContainer}>
        {['admin', 'faculty', 'student'].map((role) => (
          <button
            key={role}
            style={
              selectedRole === role
                ? { ...styles.button, ...styles.selectedButton }
                : styles.button
            }
            onClick={() => handleRoleSelect(role)}
          >
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        ))}
      </div>

      <div style={styles.submitContainer}>
        <button style={styles.submitButton} onClick={handleSubmit}>
          Continue
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: { textAlign: 'center', marginTop: '50px' },
  text: { fontSize: '18px', color: '#555', marginBottom: '20px' },
  buttonContainer: { marginBottom: '20px' },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    margin: '5px',
    transition: 'background-color 0.3s',
  },
  selectedButton: { backgroundColor: '#ffc107', color: '#000' },
  submitContainer: { marginTop: '20px' },
  submitButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default RoleSelection;
