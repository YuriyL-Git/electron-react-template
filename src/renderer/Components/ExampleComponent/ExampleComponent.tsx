import { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { nodeApi } from '../../common/types/node/node-api-declaration';
import { styles } from './ExampleComponent.styles';
import { AppRoutes } from '../../common/routes';

export const ExampleComponent = () => {
  const [result, setResult] = useState('');
  const navigate = useNavigate();
  const [delay, setDelay] = useState('1000');

  const handleClick = async () => {
    setResult('Generation started ....');
    const commandResult = await nodeApi.firstApi.execute();
    setResult(commandResult as string);
    console.log('RESULT =', commandResult);
    navigate(AppRoutes.Route1);
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
