import React, { useState } from 'react';

export default function Details() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    notApplicable: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', form);
    alert('Changes saved!');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Update account profile</h2>
      <p style={styles.subtitle}>
        Profile information is synced across Getty Images sites. See our{' '}
        <a href="#" style={{ color: '#057a8d' }}>privacy policy</a>.
      </p>

      <p style={{ color: '#555', fontSize: '12px' }}> Your customer number: <strong>37459583</strong></p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          First name<br />
          <input
            style={styles.input}
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First name"
          />
        </label>

        <label>
          Last name<br />
          <input
            style={styles.input}
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last name"
          />
        </label>

        <label>
          Company email<br />
          <input
            style={styles.input}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            readOnly
          />
        </label>

        <label>
          Company name<br />
          <input
            style={styles.input}
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            placeholder="Company name"
          />
        </label>

        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="notApplicable"
            checked={form.notApplicable}
            onChange={handleChange}
          />
          Not applicable
        </label>

        <button type="submit" style={styles.button}>Save changes</button>
      </form>

      <p style={styles.footer}>
        This site is protected by reCAPTCHA and the Google{' '}
        <a href="#" style={{ color: '#057a8d' }}>Privacy Policy</a> and{' '}
        <a href="#" style={{ color: '#057a8d' }}>Terms of Service</a>.
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '30px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ddd',
    borderRadius: '6px',
    backgroundColor: '#f8f8f8',
  },
  title: {
    marginBottom: '5px',
    fontSize: '20px',
    color: '#555',
  },
  subtitle: {
    fontSize: '11px',
    color: '#555',
    marginBottom: '15px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'left',
    gap: '12px',
    color: '#555',
    fontSize: '16px'
  },
  input: {
    width: '95%',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#00704A',
    color: '#fff',
    padding: '10px',
    border: 'none',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  footer: {
    fontSize: '12px',
    marginTop: '20px',
    color: '#555',
  },
};
