import { MemoryRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import {
  DeveloperMode,
  Icecream,
  SettingsApplications,
} from '@mui/icons-material';
import { AppRoutes } from './common/routes';
import { Layout } from './Components/Layout/Layout';
import { Settings } from './Pages/Settings/Settings';
import { RouterProps } from './common/types/interfaces/interfaces';
import Page1 from './Pages/Page1/Page1';
import { Develop } from './Pages/Develop/Develop';

export const routesList: Array<RouterProps> = [
  {
    route: AppRoutes.Home,
    routeName: 'Home',
    component: <Page1 />,
    icon: <Icecream />,
    withSideBar: true,
  },
  {
    route: AppRoutes.SettingsRoute,
    routeName: 'Settings',
    component: <Settings />,
    icon: <SettingsApplications />,
  },
  {
    route: AppRoutes.DevelopRoute,
    routeName: 'Develop',
    component: <Develop />,
    icon: <DeveloperMode />,
  },
];

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routesList.map((route) => (
          <Route
            key={route.routeName}
            path={route.route}
            element={<Layout routesList={routesList}>{route.component}</Layout>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
