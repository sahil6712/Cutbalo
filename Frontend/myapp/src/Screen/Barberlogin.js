import React, { useState } from 'react';

export default function Barberlogin() {  // Added parentheses ()
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const handleSwitch = () => {
    setIsLogin((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        {!isLogin && (
          <div style={styles.inputGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
        )}
        <div style={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit" style={styles.button}>
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <p style={styles.toggleText} onClick={handleSwitch}>
        {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '300px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    padding: '10px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  toggleText: {
    marginTop: '15px',
    color: '#007bff',
    cursor: 'pointer',
  },
};


