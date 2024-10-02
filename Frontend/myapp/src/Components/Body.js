import React from 'react';
import { Link } from 'react-router-dom';

export default function Body(){
  return (
    <div style={styles.container}>
      <p style={styles.subtitle}>Please choose your account type:</p>
      <div style={styles.buttonContainer}>
        <Link to="/signup/customer" style={styles.button}>
           Customer
        </Link>
        <Link to="/signup/Barber" style={styles.button}>
          Barber
        </Link>
      </div>
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
    backgroundColor: '#808080', // Grey background color
  },
  title: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    textDecoration: 'none',
    borderRadius: '5px',
    textAlign: 'center',
    transition: 'background-color 0.3s',
  },
};


