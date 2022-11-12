import styled from '@emotion/styled';
import React from 'react';
import { useAppSelector } from '../../../app/store/hooks';
import { PetTubeVideo } from '../../../entities/petTube/Video';
import { useGetPokemonByNameQuery } from './api';

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
  const { access_token } = useAppSelector((state) => state.home.userData)
  const result = useGetPokemonByNameQuery({ token: access_token})
  console.log('🚀 ~ file: PetTubeMain.tsx ~ line 21 ~ PetTubeMain ~ result', result);
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
