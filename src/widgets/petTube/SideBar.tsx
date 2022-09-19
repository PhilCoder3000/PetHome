import { Stack, Button, styled, Divider } from '@mui/material';
import React from 'react';

const StyledStack = styled(Stack)(({ theme }) => ({
  padding: '5px',
  width: '240px',
  height: 'calc(100vh - 64px)',
  background: theme.palette.primary.light,
  overflow: 'auto',
  zIndex: 1101,
  '& .MuiButtonBase-root': {
    borderRadius: '10px',
    marginBottom: '5px',
    background: theme.palette.primary.light,
    '&:hover': {
      background: theme.palette.background.paper,
    },
  },
}));

export function PetTubeSideBar() {
  return (
    <StyledStack>
      <Button variant="contained">Main</Button>
      <Divider sx={{ m: '15px 0' }} />
      <Button variant="contained">Cats</Button>
      <Button variant="contained">Dogs</Button>
      <Button variant="contained">Guinea pigs</Button>
      <Button variant="contained">Ferrets</Button>
      <Button variant="contained">Pony</Button>
      <Divider sx={{ m: '15px 0' }} />
      <Button variant="contained">Library</Button>
      <Button variant="contained">History</Button>
    </StyledStack>
  );
}
