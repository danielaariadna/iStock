import React from 'react';

const DownloadHistory = () => {
  const styles = {
    wrapper: {
      backgroundColor: '#f8f8f8',
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      minHeight: '81vh',
     
    },
    title: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '16px',
    },
    dropboxBanner: {
      backgroundColor: '#f6f8f8',
      border: '1px solid #ccc',
      padding: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '14px',
      color: '#333',
      marginBottom: '20px',
    },
    dropboxLogo: {
      width: '20px',
      height: '20px',
    },
    link: {
      color: '#008272',
      cursor: 'pointer',
      marginLeft: '4px',
    },
    tabs: {
      display: 'flex',
      gap: '24px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#666',
      borderBottom: '1px solid #ccc',
      marginBottom: '20px',
    },
    activeTab: {
      color: '#000',
      fontWeight: '700',
    },
    filterSection: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    select: {
      padding: '8px',
      fontSize: '14px',
      border: '1px solid #999',
      borderRadius: '2px',
      marginRight: '12px',
    },
    downloadsText: {
      fontSize: '14px',
      color: '#333',
    },
    resultsBox: {
      backgroundColor: '#f5f5f5',
      border: '1px solid #ccc',
      padding: '20px',
      fontSize: '14px',
      color: '#666',
    },
  };

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>Downloads</h2>

      <div style={styles.dropboxBanner}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/1200px-Dropbox_Icon.svg.png"
          alt="Dropbox"
          style={styles.dropboxLogo}
        />
        <span>
          Save your downloads to Dropbox.
          <span style={styles.link}> Get started</span>
        </span>
      </div>

      <div style={styles.tabs}>
        <span style={styles.activeTab}>Credits</span>
        <span>Subscriptions</span>
        <span>AI-modified</span>
        <span>AI-generated</span>
        <span>Pay as you go</span>
      </div>

      <div style={styles.filterSection}>
        <select style={styles.select}>
          <option>All downloads</option>
        </select>
        <span style={styles.downloadsText}>0 downloads</span>
      </div>

      <div style={styles.resultsBox}>
        Sorry, no results were found.
      </div>
    </div>
  );
};

export default DownloadHistory;
