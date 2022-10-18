import React, { FC } from 'react';
import { Box, Button } from '@mui/material';
import { RestartAlt } from '@mui/icons-material';
import { ComponentsGenerator } from '../../Components/ComponentsGenerator/ComponentsGenerator';
import { nodeApi } from '../../common/types/node/node-api-declaration';
import { getIdeData } from '../../common/helpers/get-ide-data';
import { updateIdeText } from '../../common/helpers/update-ide-text';

export const Develop: FC = () => {
  const handleTestClick = async () => {
    const ideData = await getIdeData();
    console.log('ide date =', ideData);
    const updatedText = nodeApi.transform.addUseState(ideData);
    console.log(updatedText);
    await updateIdeText(updatedText, ideData);
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
