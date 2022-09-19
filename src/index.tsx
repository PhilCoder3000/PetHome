import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import SuspenseProvider from './app/providers/SuspenseProvider';
import './app/styles/scrollbar.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <SuspenseProvider>
      <App />
    </SuspenseProvider>
  </React.StrictMode>,
);

