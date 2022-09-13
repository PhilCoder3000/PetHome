import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('./home'));
const NotFound = React.lazy(() => import('./notFound'));

const pages = [
  {
    Component: Home,
    path: '/',
  },
  {
    Component: NotFound,
    path: '*'
  }
];

function Routing() {
  return (
    <Routes>
      {pages.map(({ Component, path }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}

export default Routing;
