import { Button, Typography } from '@mui/material';
import { useGoogleLogin } from '@react-oauth/google';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store/configureStore';
import { decrement, increment } from './slice';

export function Home() {
  const onSuccess = (res: any) => {
    console.log('login', res);
  };

  const onError = (error: any) => {
    console.log('error', error);
  };

  const login = useGoogleLogin({
    onSuccess,
    onError,
  });

  return (
    <div>
      <Typography color="primary">Home</Typography>
      <Button onClick={() => login()}>Google auth login</Button>
    </div>
  );
}
