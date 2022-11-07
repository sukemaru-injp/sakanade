import React from 'react'
import { useRoutes } from 'react-router-dom';
import App from '../components/pages/App'

export const AppRoutes: React.FC = () => {
  const commonRoutes = [{ path: '/', element: <App /> }];

  const element = useRoutes([...commonRoutes]);
  return (
    <>
      {element}
    </>
  )
}
