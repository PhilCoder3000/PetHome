import React from 'react';
import { Button, Typography } from '@mui/material';
import { useGoogleLogin } from '@react-oauth/google';
import { useAppDispatch } from '../../app/store/hooks';
import { setUserData } from './slice';

export function Home() {
  const dispatch = useAppDispatch()
  const onSuccess = (res: any) => {
    dispatch(setUserData(res))
  };

  const onError = (error: any) => {
    console.error(error);
  };

  const login = useGoogleLogin({
    onSuccess,
    onError,
    scope: 'https://www.googleapis.com/auth/userinfo.profile',
  });

  return (
    <div>
      <Typography color="primary">Home</Typography>
      <Button onClick={() => login()}>Google auth login</Button>
    </div>
  );
}
