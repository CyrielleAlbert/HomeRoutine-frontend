import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './src/pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
