import React, { FC } from 'react';
import { Box, Button } from '@mui/material';
import { RestartAlt } from '@mui/icons-material';
import { ComponentsGenerator } from '../../Components/ComponentsGenerator/ComponentsGenerator';
import { openFileInEditor } from '../../common/helpers/open-file-in-editor';

export const Develop: FC = () => {
  const handleTestClick = async () => {
    const fileresult = await openFileInEditor({
      file: 'D:\\Projects\\sv-hero-dashboard\\src\\App.style.ts',
      line: 3,
      column: 12,
    });
    console.log('fileresult=', fileresult);
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
