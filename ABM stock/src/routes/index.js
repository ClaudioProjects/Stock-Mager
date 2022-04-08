import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Home/index';
import Store from '../pages/Store';
import Page404 from '../pages/Page404';

export default function RoutesMain() {
  return (
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route exact path="/store" element={<Store />} />
      <Route exact path="/view/:id" element={<Index />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
