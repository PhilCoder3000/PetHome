import { CircularProgress, styled } from '@mui/material';
import React from 'react';

const StyledContainerDiv = styled('div')(() => ({
  width: '100%',
  height: '100%',
}));

export function SuspenseFallback() {
  return (
    <StyledContainerDiv>
      <CircularProgress size={50} />
    </StyledContainerDiv>
  );
}
