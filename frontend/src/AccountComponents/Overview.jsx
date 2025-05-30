import React from 'react';
import './Overview.css'; // Archivo CSS externo

const Overview = () => {
  // Simulación de datos del usuario
  const user = {
    hasSubscription: false,
    invoices: [],
    downloads: [],
  };

  return (
    <div className="overview-container">
      {/* Título */}
      <h1 className="overview-title">Your Account</h1>

      {/* Estado de la cuenta */}
      <div className="overview-box">
        {user.hasSubscription ? (
          <p className="overview-text">
            You have an active subscription.{" "}
            <a href="#" className="overview-link">Manage your plan</a>.
          </p>
        ) : (
          <p className="overview-text">
            You currently don't have any iStock credits or a subscription.{" "}
            <a href="#" className="overview-link">View plans and pricing</a>.
          </p>
        )}
      </div>
      <h1 className="overview-title">Your Invoices</h1>
      {/* Invoices */}
      <div className="overview-box">
        {user.invoices.length === 0 ? (
          <p className="overview-text">You haven't purchased anything yet.</p>
        ) : (
          <ul className="overview-list">
            {user.invoices.map((inv, idx) => (
              <li key={idx}>
                {inv.description} - ${inv.amount}
              </li>
            ))}
          </ul>
        )}
      </div>
      <h1 className="overview-title">Your Downloads</h1>
      {/* Downloads */}
      <div className="overview-box">
        {user.downloads.length === 0 ? (
          <p className="overview-text">There are no downloads found.</p>
        ) : (
          <ul className="overview-list">
            {user.downloads.map((dl, idx) => (
              <li key={idx}>📁 {dl.filename}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Overview;