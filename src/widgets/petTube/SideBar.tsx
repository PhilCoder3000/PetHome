import { Stack, Button, styled } from '@mui/material';
import React from 'react';

const StyledStack = styled(Stack)(({ theme }) => ({
  padding: '5px',
  width: '200px',
  height: 'calc(100vh - 64px)',
  background: theme.palette.primary.light,
  overflow: 'auto',
  '& .MuiButtonBase-root': {
    borderRadius: '10px',
    marginBottom: '5px',
    background: theme.palette.primary.light,
    '&:hover': {
      background: theme.palette.background.paper,
    }
  }
}))

export function PetTubeSideBar() {
  return (
    <StyledStack>
      <Button variant="contained">asfasdf</Button>
      <Button variant="contained">asfasdf</Button>
      <Button variant="contained">asfasdf</Button>
      <Button variant="contained">asfasdf</Button>
      <Button variant="contained">asfasdf</Button>
      <Button variant="contained">asfasdf</Button>
      <Button variant="contained">asfasdf</Button>
      <Button variant="contained">asfasdf</Button>
    </StyledStack>
  );
}
