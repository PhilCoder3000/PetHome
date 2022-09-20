import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

export function OAuthProvider({ children }: React.PropsWithChildren) {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      {children}
    </GoogleOAuthProvider>
  );
}