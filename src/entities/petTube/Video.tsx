import { styled, Typography } from '@mui/material';
import React from 'react';

const StyledContainerDiv = styled('div')(() => ({
  padding: '10px',
  width: '350px',
  height: '320px',
  display: 'flex',
  flexDirection: 'column',
}));

const StyledVideoDiv = styled('div')(({ theme }) => ({
  marginBottom: '15px',
  width: '100%',
  height: '250px',
  background: theme.palette.grey[500],
}));

const StyledDescription = styled('div')(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  '& img': {
    margin: '10px',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
  },
}));

const StyledSummary = styled('div')(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  color: theme.palette.grey[800],
}));

interface VideoProps {
  uuid?: string;
}

export function PetTubeVideo({ uuid }: VideoProps) {
  return (
    <StyledContainerDiv>
      <StyledVideoDiv />
      <StyledDescription>
        <img />
        <StyledSummary>
          <Typography variant="h6" color="inherit">
            Video Name
          </Typography>
          <Typography variant="body2" color="inherit">
            Channel name
          </Typography>
          <Typography variant="caption" color="inherit">
            views
          </Typography>
        </StyledSummary>
      </StyledDescription>
    </StyledContainerDiv>
  );
}
