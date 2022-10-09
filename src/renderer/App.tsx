import { MemoryRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import { AppRoutes } from './common/routes';
import { Layout } from './Components/Layout/Layout';
import { Settings } from './Pages/Settings/Settings';
import { RouterProps } from './common/types/interfaces/interfaces';
import Page1 from './Pages/Page1/Page1';

export const routesList: Array<RouterProps> = [
  {
    route: AppRoutes.Home,
    routeName: 'Home Page',
    component: <Page1 />,
  },
  {
    route: AppRoutes.SettingsRoute,
    routeName: 'Settings Page',
    component: <Settings />,
  },
];

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routesList.map((route) => (
          <Route
            path={route.route}
            element={<Layout routesList={routesList}>{route.component}</Layout>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
