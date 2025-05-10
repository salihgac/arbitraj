import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import ValueBetting from './pages/ValueBetting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="value-betting" element={<ValueBetting />} />
          <Route path="arbitrage" element={<Dashboard />} />
          <Route path="market-movement" element={<Dashboard />} />
          <Route path="predictions" element={<Dashboard />} />
          <Route path="bankroll" element={<Dashboard />} />
          <Route path="profile" element={<Dashboard />} />
          <Route path="settings" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;