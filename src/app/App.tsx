import React from 'react';
import Routing from '../pages/Routing';
import NavMenu from '../widgets/NavMenu';
import RouterProvider from './providers/RouterProvider';
import StoreProvider from './providers/StoreProvider';
import SuspenseProvider from './providers/SuspenseProvider';
import { ThemeProvider } from './providers/ThemeProvider';

function App() {
  return (
    <SuspenseProvider>
      <ThemeProvider>
        <StoreProvider>
          <RouterProvider>
            <NavMenu />
            <Routing />
          </RouterProvider>
        </StoreProvider>
      </ThemeProvider>
    </SuspenseProvider>
  );
}

export default App;
