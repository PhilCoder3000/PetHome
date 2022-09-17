import { styled, AppBar, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import { MainSearch } from '../../shared/fields/MainSearch';
import { MainLogo } from '../../shared/logo/MainLogo';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  paddingLeft: '50px',
  background: theme.palette.primary.light,
  // opacity: 0.9,
  '& > div': {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export function PetTubeNavBar() {
  const [value, setValue] = useState('');
  return (
    <StyledAppBar position="sticky" color="primary">
      <Toolbar>
        <MainLogo />
        <MainSearch value={value} setValue={setValue} />
        <AccountCircleIcon fontSize="large" />
      </Toolbar>
    </StyledAppBar>
  );
}
