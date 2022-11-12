import React, { useEffect } from 'react';
import { useLinkClickHandler } from 'react-router-dom';

interface Props {
  children: React.ReactNode
}
export const ScrollToTop: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}
