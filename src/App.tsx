import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainLayout } from 'layouts/MainLayout';
import Home from 'pages/Home';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ 'pages/NotFound'));

export const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route path="" element={<Home />} />
      <Route
        path="cart"
        element={
          <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
            <Cart />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<div>Идёт загрузка...</div>}>
            <NotFound />
          </Suspense>
        }
      />
    </Route>
  </Routes>
);
