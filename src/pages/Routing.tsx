import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { petTubeRoutes } from './petTube/petTubeRoutes';

const Home = React.lazy(() => import('./home'));
const NotFound = React.lazy(() => import('./notFound'));

type ComponentType =
  | React.LazyExoticComponent<() => JSX.Element>
  | (() => JSX.Element);

type NestedPage = {
  Component: ComponentType;
  path: string;
};

export type Page = NestedPage & {
  children?: NestedPage[];
};

const pages: Page[] = [
  {
    Component: Home,
    path: '/',
  },
  {
    Component: NotFound,
    path: '*',
  },
  petTubeRoutes,
];

function Routing() {
  return (
    <Routes>
      {pages.map(({ Component, path, children }) => (
        <Route key={path} path={path} element={<Component />}>
          {children &&
            children.map((nestedPage) => (
              <Route
                key={nestedPage.path}
                path={nestedPage.path}
                element={<nestedPage.Component />}
              />
            ))}
        </Route>
      ))}
    </Routes>
  );
}

export default Routing;