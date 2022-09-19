import React from 'react';
import Routing from '../pages/Routing';
import NavMenu from '../widgets/NavMenu';
import { OAuthProvider } from './providers/OAuthProvider';
import RouterProvider from './providers/RouterProvider';
import StoreProvider from './providers/StoreProvider';
import SuspenseProvider from './providers/SuspenseProvider';
import { ThemeProvider } from './providers/ThemeProvider';

function App() {
  return (
    <SuspenseProvider>
      <OAuthProvider>
        <ThemeProvider>
          <StoreProvider>
            <RouterProvider>
              <NavMenu />
              <Routing />
            </RouterProvider>
          </StoreProvider>
        </ThemeProvider>
      </OAuthProvider>
    </SuspenseProvider>
  );
}

export default App;
