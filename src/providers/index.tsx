import React, { ReactNode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

type AppProviderProps = {
  children: ReactNode;
};
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <>
      <Router>{children}</Router>
    </>
  )
}