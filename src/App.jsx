import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart, NotFound } from './pages';

export const App = () => (
  <div className="wrapper">
    <Header />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </div>
);
