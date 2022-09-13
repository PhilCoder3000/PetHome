import React from 'react';
import Routing from '../pages/Routing';
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
            <Routing />
          </RouterProvider>
        </StoreProvider>
      </ThemeProvider>
    </SuspenseProvider>
  );
}

export default App;
