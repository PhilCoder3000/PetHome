import React from 'react';
import { Page } from '../Routing';
import { PetTubeWrapper } from './petTubeWrapper';

const PetTubeMain = React.lazy(() => import('./Main'));
const PetTubeChannel = React.lazy(() => import('./Channel'));
const PetTubeSearch = React.lazy(() => import('./Search'));
const PetTubeVideo = React.lazy(() => import('./Video'));

export const petTubeRoutes: Page = {
  Component: PetTubeWrapper,
  path: '/pet-tube',
  children: [
    {
      Component: PetTubeChannel,
      path: 'channel',
    },
    {
      Component: PetTubeMain,
      path: 'main',
    },
    {
      Component: PetTubeSearch,
      path: 'search',
    },
    {
      Component: PetTubeVideo,
      path: 'video',
    },
  ],
};
