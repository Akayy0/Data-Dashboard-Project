import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ThemeProvider } from './context/theme/Theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.Fragment>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.Fragment>
);
