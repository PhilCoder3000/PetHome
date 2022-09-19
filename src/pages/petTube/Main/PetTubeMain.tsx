import styled from '@emotion/styled';
import React from 'react';
import { PetTubeVideo } from '../../../entities/petTube/Video';

const StyledPetTubeMainDiv = styled('div')(() => ({
  paddingTop: '20px',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: 'calc(100vw - 240px)',
  height: 'calc(100vh - 65px)',
  overflow: 'auto',
}));

export function PetTubeMain() {
  return (
    <StyledPetTubeMainDiv>
      <PetTubeVideo />
      <PetTubeVideo />
      <PetTubeVideo />
      <PetTubeVideo />
      <PetTubeVideo />
      <PetTubeVideo />
      <PetTubeVideo />
      <PetTubeVideo />
    </StyledPetTubeMainDiv>
  );
}
