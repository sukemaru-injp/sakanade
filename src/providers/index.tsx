import React, { ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import ThemeContext from './ThemeContext'

type AppProviderProps = {
  children: ReactNode;
};
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <>
    <ThemeContext>
      <Header />
      <Router>{children}</Router>
    </ThemeContext>
    </>
  );
};
