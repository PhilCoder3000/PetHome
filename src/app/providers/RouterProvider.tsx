import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function RouterProvider({ children }: React.PropsWithChildren) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
}

export default RouterProvider;
