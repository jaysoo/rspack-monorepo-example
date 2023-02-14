import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import './styles.css';
import { App } from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log('>> render')
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
