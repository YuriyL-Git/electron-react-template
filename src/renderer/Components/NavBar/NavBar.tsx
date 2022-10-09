import React, { FC, useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';
import { styles } from './NavBar.styles';
import { RouterProps } from '../../common/types/interfaces/interfaces';

interface Props {
  routesList: Array<RouterProps>;
}

export const NavBar: FC<Props> = ({ routesList }) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs sx={styles.container} value={tabIndex}>
      {routesList.map((route, index) => (
        <Link
          to={route.route}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
          }}
          key={route.route}
        >
          {route.icon}
          <Tab label={route.routeName} onChange={() => setTabIndex(index)} />
        </Link>
      ))}
    </Tabs>
  );
};
