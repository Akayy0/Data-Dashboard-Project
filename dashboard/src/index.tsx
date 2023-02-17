import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// @ts-ignore
import {D3plusContext} from "d3plus-react";

import { ThemeProvider } from './context/theme/Theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const globalConfig = {
  
};

root.render(
  <React.Fragment>
    <ThemeProvider>
      <D3plusContext.Provider value={globalConfig}>
        <App />
      </D3plusContext.Provider>
    </ThemeProvider>
  </React.Fragment>
);
