import React, { FC } from 'react';
import { Box, Button } from '@mui/material';
import { RestartAlt } from '@mui/icons-material';

export const Develop: FC = () => {
  return (
    <Box>
      <Button
        variant="outlined"
        startIcon={<RestartAlt />}
        onClick={() => {
          window.electron.ipcRenderer.sendMessage('reload', []);
        }}
      >
        Reload App
      </Button>
    </Box>
  );
};
