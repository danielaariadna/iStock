import React, { useState,useEffect } from 'react';
import { Box, AppBar, Toolbar, Button } from '@mui/material';

import Overview from './AccountComponents/Overview';
import Profile from './AccountComponents/Profile';
import Invoices from './AccountComponents/Invoices';
import DownloadHistory from './AccountComponents/DownloadHistory';
import { fetchUsuarioByID } from './supabase-consultas';

export default function ButtonAppBar({ usuario }) {
  const [activeTab, setActiveTab] = useState('overview');

  const [usuarioLogueado,setUsuarioLogueado] = useState({});
  useEffect(() => {
    fetchUsuarioByID(setUsuarioLogueado,usuario.email);
  }, [usuario]);


  const renderContent = () => {
  switch (activeTab) {
    case 'overview':
      return <Overview usuario={usuarioLogueado} />;
    case 'profile':
      return <Profile usuario={usuario} />;
    case 'invoices':
      return <Invoices usuario={usuario} />;
    case 'download':
      return <DownloadHistory usuario={usuario} />;
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
