import React from 'react';

const EmailPref = () => {
  const styles = {
    container: {
      backgroundColor: '#f5fafa',
      padding: '24px',
      borderRadius: '4px',
      boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      maxWidth: '500px',
      margin: '0 auto',
    },
    title: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '10px',
    },
    text: {
      fontSize: '14px',
      color: '#333',
      marginBottom: '10px',
    },
    link: {
      fontSize: '14px',
      color: '#008577',
      textDecoration: 'none',
    },
    linkHover: {
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Email preferences</h2>
      <p style={styles.text}>
        Review and manage the types of messages you want to receive from your
        email preference center.
      </p>
      <a
        href="#"
        style={styles.link}
        onMouseOver={e => (e.target.style.textDecoration = 'underline')}
        onMouseOut={e => (e.target.style.textDecoration = 'none')}
      >
        Go to preference center
      </a>
    </div>
  );
};

export default EmailPref;
