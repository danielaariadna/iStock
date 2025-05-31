import React, { useState } from 'react';
import { Box, Button, Typography, Divider } from '@mui/material';
import Details from './Profile/Details';
import ABDetails from './Profile/ABDetails';
import EmailPref from './Profile/EmailPref';

export default function Profile({ usuario }) {
  const [subTab, setSubTab] = useState('details');

  const renderSubTab = () => {
    switch (subTab) {
      case 'details':
        return <Details usuario={usuario} />;
      case 'abdetails':
        return <ABDetails />;
      case 'email':
        return <EmailPref usuario={usuario} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar izquierda */}
      <Box
        sx={{
          width: '220px',
          backgroundColor: '#e9eded',
          padding: 2,
          //borderRight: '1px solid #ccc',
        }}
      >
        <Typography variant="h6" sx={{ fontSize: '1rem',  color: '#000', fontWeight: 'bold', mb: 1 }}>
          Profile
        </Typography>
        <Divider sx={{ my: 1 }} /> {/* ← esta línea es la barra */}
        <Button
          onClick={() => setSubTab('details')}
          fullWidth
          sx={{
            justifyContent: 'flex-start',
            color: '#000',
            textTransform: 'none',
            fontWeight: subTab === 'details' ? 'bold' : 'normal',
            fontSize: '0.875rem',
            padding: '6px 8px',
          }}
        >
          Details
        </Button>

        <Button
          onClick={() => setSubTab('abdetails')}
          fullWidth
          sx={{
            justifyContent: 'flex-start',
            color: '#000',
            textTransform: 'none',
            fontWeight: subTab === 'abdetails' ? 'bold' : 'normal',
            fontSize: '0.875rem',
            padding: '6px 8px',
          }}
        >
          Address and billing details
        </Button>

        <Button
          onClick={() => setSubTab('email')}
          fullWidth
          sx={{
            justifyContent: 'flex-start',
            color: '#000',
            textTransform: 'none',
            fontWeight: subTab === 'email' ? 'bold' : 'normal',
            fontSize: '0.875rem',
            padding: '6px 8px',
          }}
        >
          Email preferences
        </Button>
      </Box>

      {/* Contenido a la derecha */}
      <Box sx={{ flexGrow: 1, p: 2 }}>
        {renderSubTab()}
      </Box>
    </Box>
  );
}