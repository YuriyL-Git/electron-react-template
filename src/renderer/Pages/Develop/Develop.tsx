import React, { FC } from 'react';
import { Box, Button } from '@mui/material';
import { RestartAlt } from '@mui/icons-material';
import { ComponentsGenerator } from '../../Components/ComponentsGenerator/ComponentsGenerator';
import { nodeApi } from '../../common/types/node/node-api-declaration';

export const Develop: FC = () => {
  const handleTestClick = async () => {
    const result = await nodeApi.server.sendMessage('editor');
    console.log('result', result);
  };

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
      <Button onClick={handleTestClick}>TestBtn</Button>
    </Box>
  );
};
