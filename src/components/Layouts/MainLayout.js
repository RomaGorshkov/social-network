import React from 'react';
import { Header } from '../Header/Header';
import { Navigation } from '../Navigation/Navigation';

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
        {children}
      <Navigation />
    </div>
  )
};
