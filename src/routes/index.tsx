import React from 'react'
import { useRoutes } from 'react-router-dom';
import App from '../App'

export const AppRoutes = () => {
  const commonRoutes = [{ path: '/', element: <App /> }];

  const element = useRoutes([...commonRoutes]);
  return (
    <>
      {element}
    </>
  )
}