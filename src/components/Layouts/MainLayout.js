import React from 'react';
import { Outlet } from 'react-router';
import { Header } from '../Header/Header';
import { Navigation } from '../Navigation/Navigation';

export const MainLayout = () => {
  return (
    <div>
      <Header />
        <Outlet />
      <Navigation />
    </div>
  )
};
