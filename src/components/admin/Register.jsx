import React from 'react';

const AdminRegister = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Admin Registration</h1>
      <form>
        <input
          type="text"
          placeholder="Full Name"
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Organization Name"
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          style={styles.input}
        />
        <button style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  input: {
    margin: '10px',
    padding: '10px',
    width: '200px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default AdminRegister;
