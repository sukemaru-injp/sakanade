import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import App from '../components/pages/App';
import SaunaPage from '../components/pages/sauna';

const commonRoutes: RouteObject[] = [
  { path: '/', element: <App /> },
  { path: '/sauna', element: <SaunaPage /> },
];

export const AppRoutes: React.FC = () => {
  const element = useRoutes([...commonRoutes]);
  return (
    <>
      {element}
    </>
  );
};
