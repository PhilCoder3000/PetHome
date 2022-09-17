import React from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import { Box, styled, Typography } from '@mui/material';

const StyledTypography = styled(Typography)(() => ({
  marginLeft: '8px',
  letterSpacing: '0.25px',
  color: '#fff',
  fontSize: '25px',
  fontWeight: 700,
}))

export function MainLogo() {
  return (
    <Box display="flex" alignItems="center">
      <PetsIcon color="warning" fontSize="large" />
      <StyledTypography>
        PetTube
      </StyledTypography>
    </Box>
  );
}
