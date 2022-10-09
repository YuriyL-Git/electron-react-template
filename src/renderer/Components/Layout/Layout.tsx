import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';
import { styles } from './Layout.styles';
import { NavBar } from '../NavBar/NavBar';
import { RouterProps } from '../../common/types/interfaces/interfaces';

interface Props {
  children: ReactNode;
  routesList: Array<RouterProps>;
}

export const Layout: FC<Props> = ({ children, routesList }) => {
  return (
    <Box sx={styles.container}>
      <NavBar routesList={routesList} />
      <Box sx={styles.mainWrapper}>
        {children}
        <Box sx={styles.panel}>Panel</Box>
      </Box>
    </Box>
  );
};
