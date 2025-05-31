// BillingDetails.jsx
import React from 'react';
import './ABDetailss.css';

const ABDetails = () => {
    return (
        <div className="billing-container">
          <div className="alert">
            <strong>❗</strong> Before you can add or edit credit card details, you'll need to{' '}
            <a href="#">enter your tax information</a>.
          </div>
    
          <div className="card">
            <h2 className="section-title" style={{ color: '#555'}}>Address and billing details</h2>
    
            <div className="section-header">
              <span>Payment information</span>
              <span className="right-link">Add ❔</span>
            </div>
            <div className="separator" />
            <div className="info-row">
              <span className="not-available">Not available</span>
            </div>
    
            <div className="section-header" style={{ marginTop: '24px' }}>
              <span>Billing address</span>
              <span className="right-link">Edit</span>
            </div>
            <div className="separator" />
    
            <div className="info-row">
              <span>Billing country</span>
              <span>Argentina</span>
            </div>
            <div className="info-row">
              <span>Billing currency</span>
              <span>Argentine Peso</span>
            </div>
            <div className="info-row">
              <span>Taxpayer Id</span>
              <span>-</span>
            </div>
          </div>
        </div>
      );
};

export default ABDetails;
