import { useState } from 'react';
import { Button } from '@mui/material';
import { nodeApi } from '../../common/node-api-declaration';
import { styles } from './ExampleComponent.styles';

export const ExampleComponent = () => {
  const [result, setResult] = useState('');

  const handleClick = async () => {
    setResult('Generation started ...');
    const commandResult = await nodeApi.firstApi.execute();
    setResult(commandResult as string);
    console.log('RESULT =', commandResult);
    nodeApi.secondApi.executeSecond();
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        type="button"
        sx={{ ...styles.buttonOne, ...styles.buttonTwo }}
      >
        Click
      </Button>
      <div
        style={{
          color: 'black',
        }}
      >
        {result}
      </div>
    </div>
  );
};
