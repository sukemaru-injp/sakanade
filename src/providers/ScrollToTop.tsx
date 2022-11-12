import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode
}
export const ScrollToTop: React.FC<Props> = ({ children }) => {
  const location = useLocation()

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {children}
    </>
  )
}
