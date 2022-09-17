import { Typography } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store/configureStore';
import { decrement, increment } from './slice';

export function Home() {
  const count = useSelector((state: RootState) => state.home.value);
  const dispatch = useDispatch();
  return (
    <div>
      <Typography color="primary">Home</Typography>
    </div>
  );
}
