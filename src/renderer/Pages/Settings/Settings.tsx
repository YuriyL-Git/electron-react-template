import React, { FC } from 'react';
import { Box } from '@mui/material';
import { styles } from './Settings.styles';
import { FoldersList } from '../../Components/FoldersList/FoldersList';
import { useTypedSelector } from '../../hooks/use-typed-selector';

export const Settings: FC = () => {
  const { selectedPath } = useTypedSelector((state) => state.settins);
  return (
    <Box sx={styles.container}>
      <FoldersList />
      <div>{selectedPath}</div>
    </Box>
  );
};
