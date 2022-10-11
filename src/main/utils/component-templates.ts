export const getComponentTemplate = (name: string, withInterface: boolean) => {
  return `import React, { FC, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { styles } from './${name}.styles';

${withInterface ? 'interface Props {}' : ''}

const ${name}: FC${withInterface ? '<Props>' : ''}= (${
    withInterface ? '{}' : ''
  }) => {
  return <div>Hello 👋, I am a ${name} component.</div>;
};
export default ${name};
`;
};
