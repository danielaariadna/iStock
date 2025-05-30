import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Button } from '@mui/material';

import Overview from './AccountComponents/Overview';
import Profile from './AccountComponents/Profile';
import Invoices from './AccountComponents/Invoices';
import DownloadHistory from './AccountComponents/DownloadHistory';

export default function ButtonAppBar() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'profile':
        return <Profile />;
      case 'invoices':
        return <Invoices />;
      case 'download':
        return <DownloadHistory />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
      <AppBar position="static" sx={{ bgcolor: '#000' }}>
        <Toolbar sx={{ minHeight: 40, paddingTop: 0, paddingBottom: 0 }}>
          <Button onClick={() => setActiveTab('overview')} color="inherit" sx={{ fontSize: '0.75rem', minWidth: 0, padding: '6px 8px' }}>
            Overview
          </Button>
          <Button onClick={() => setActiveTab('profile')} color="inherit" sx={{ fontSize: '0.75rem', minWidth: 0, padding: '6px 8px' }}>
            Profile
          </Button>
          <Button onClick={() => setActiveTab('invoices')} color="inherit" sx={{ fontSize: '0.75rem', minWidth: 0, padding: '6px 8px' }}>
            Invoices
          </Button>
          <Button onClick={() => setActiveTab('download')} color="inherit" sx={{ fontSize: '0.75rem', minWidth: 0, padding: '6px 8px' }}>
            Download History
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 2 }}>
        {renderContent()}
      </Box>
    </Box>
  );
}
