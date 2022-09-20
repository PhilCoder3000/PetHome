import { Button, Typography } from '@mui/material';
import { useGoogleLogin } from '@react-oauth/google';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store/configureStore';
import { useInterval } from '../../features/hooks/useInterval';
import { decrement, increment } from './slice';

export function Home() {
  const onSuccess = async (res: any) => {
    console.log('login', res);
    // const userInfo = await fetch(
    //   'https://www.googleapis.com/oauth2/v3/userinfo',
    //   {
    //     method: 'GET',
    //     headers: { Authorization: `Bearer ${res.access_token}` },
    //   },
    // );
    // console.log(userInfo);

    // const videos = await fetch(
    //   `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&part=id&part=player&chart=mostPopular&maxResults=8&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
    //   {
    //     method: 'GET',
    //     headers: {
    //       Authorization: `Bearer ${res.access_token}`,
    //       Accept: 'application/json',
    //     },
    //   },
    // );
    // console.log(videos);
  };

  const onError = (error: any) => {
    console.log('error', error);
  };

  const login = useGoogleLogin({
    onSuccess,
    onError,
    scope: 'https://www.googleapis.com/auth/userinfo.profile',
  });

  // useEffect(() => {
  //   if (typeof window === "undefined" || !window.google || !divRef.current) {
  //     return;
  //   }

  //   window.go

  //   try {
  //     window.google.accounts.id.initialize({
  //       client_id: googleOAuthClientId,
  //       callback: async (res) => {
  //         await signin(IdentityProvider.Google, res.credential);
  //       },
  //     });
  //     window.google.accounts.id.renderButton(divRef.current, opts);
  //   } catch (error) {
  //     setState({ error });
  //   }
  // }, [googleOAuthClientId, window.google, divRef.current]);
  const [timeout, setTime] = useState(1000);

  useInterval(() => console.log('interval'), timeout);
  useEffect(() => {
    setTimeout(() => {
      setTime(null)
    }, 5000);
  }, []);

  return (
    <div>
      <Typography color="primary">Home</Typography>
      <Button onClick={() => login()}>Google auth login</Button>
    </div>
  );
}
