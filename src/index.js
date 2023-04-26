import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
