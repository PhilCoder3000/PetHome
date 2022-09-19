import { Box, createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { PetTubeNavBar } from '../../widgets/petTube/NavBar';
import { PetTubeSideBar } from '../../widgets/petTube/SideBar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#121212',
      light: '#212121',
    },
    secondary: {
      main: '#0f0f0f',
    },
    warning: {
      main: '#FF0000',
    },
    background: {
      default: '#181818',
      paper: '#0f0f0f',
    },
    divider: '#424242',
  },
});

export function PetTubeWrapper() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          background: '#121212',
        }}
      >
        <PetTubeNavBar />
        <Box sx={{ display: 'flex' }}>
          <PetTubeSideBar />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
