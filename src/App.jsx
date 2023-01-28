import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainLayout } from 'layouts/MainLayout';
import { Home, Cart, NotFound } from './pages';

export const App = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route path="" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
