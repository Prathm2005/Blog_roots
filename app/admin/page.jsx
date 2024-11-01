import React from 'react';

const Page = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Admin Panel</h1>
      <p style={styles.message}>Manage your content efficiently and effectively.</p>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Getting Started</h2>
        <p style={styles.cardText}>
          Use the navigation menu to add your blogs
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
  },
  message: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '400px',
    width: '100%',
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#333',
  },
  cardText: {
    color: '#777',
  },
};

export default Page;
