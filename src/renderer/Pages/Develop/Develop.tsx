import React, { FC } from 'react';
import { Box, Button } from '@mui/material';
import { RestartAlt } from '@mui/icons-material';
import { ComponentsGenerator } from '../../Components/ComponentsGenerator/ComponentsGenerator';
import { openFileInEditor } from '../../common/helpers/ide-helpers/open-file-in-editor';
import { getIdeData } from '../../common/helpers/ide-helpers/get-ide-data';
import { nodeApi } from '../../common/types/node/node-api-declaration';

export const Develop: FC = () => {
  const handleTestClick = async () => {
    const ideData = await getIdeData(nodeApi);
    const openFileData = await nodeApi.tsmorph.getCssClassImplementation(
      ideData
    );
    console.log('openFileData', openFileData);
    await openFileInEditor(nodeApi, openFileData);
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
