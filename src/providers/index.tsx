import React, { ReactNode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header'

type AppProviderProps = {
  children: ReactNode;
};
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <>
    <Header />
    <Router>{children}</Router>
    </>
  )
}