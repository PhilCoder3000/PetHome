import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import SuspenseProvider from './app/providers/SuspenseProvider';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <SuspenseProvider>
      <App />
    </SuspenseProvider>
  </StrictMode>,
);

