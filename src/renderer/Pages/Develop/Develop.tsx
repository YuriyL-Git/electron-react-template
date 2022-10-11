import React, { FC } from 'react';
import { Box, Button } from '@mui/material';
import { RestartAlt } from '@mui/icons-material';
import { ComponentsGenerator } from '../../Components/ComponentsGenerator/ComponentsGenerator';

export const Develop: FC = () => {
  return (
    <Box>
      <Button
        variant="outlined"
        startIcon={<RestartAlt />}
        color="warning"
        onClick={() => {
          window.electron.ipcRenderer.sendMessage('reload', []);
        }}
        sx={{
          fontWeight: 600,
        }}
      >
        Reload App
      </Button>
      <ComponentsGenerator />
    </Box>
  );
};
