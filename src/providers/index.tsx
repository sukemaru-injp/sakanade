import React, { ReactNode } from 'react';
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/parts/Header';
import ThemeContext from './ThemeContext';

type AppProviderProps = {
  children: ReactNode;
};
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <>
    <RecoilRoot>
      <ThemeContext>
        <Header />
        <Router>{children}</Router>
      </ThemeContext>
    </RecoilRoot>
    </>
  );
};
