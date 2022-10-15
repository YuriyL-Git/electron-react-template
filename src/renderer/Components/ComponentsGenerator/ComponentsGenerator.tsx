import { Box, Button, TextField } from '@mui/material';
import React, { FC, useState } from 'react';
import { styles } from './ComponentsGenerator.styles';
import { nodeApi } from '../../common/types/node/node-api-declaration';

export const ComponentsGenerator: FC = () => {
  const [componentName, setComponentName] = useState('');
  const hangleGenerateTemplate = () => {
    nodeApi.generate.component('ButtonComponent', false);
  };

  return (
    <Box style={styles.container}>
      <Box style={styles.title}>Generate components</Box>
      <Box style={styles.sectionWrapper}>
        <Button
          variant="contained"
          style={styles.sectionBtn}
          onClick={hangleGenerateTemplate}
        >
          Generate component
        </Button>
        <TextField
          placeholder="Component name"
          style={styles.sectionInput}
          size="small"
          onChange={(event) => setComponentName(event.target.value)}
          value={componentName}
        />
      </Box>
    </Box>
  );
};
