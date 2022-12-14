import { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { nodeApi } from '../../common/types/node/node-api-declaration';
import { styles } from './ExampleComponent.styles';
import { AppRoutes } from '../../common/routes';

export const ExampleComponent = () => {
  const [result, setResult] = useState('');
  const navigate = useNavigate();

  const handleClick = async () => {
    setResult('Generation started ....');
    const commandResult = await nodeApi.firstApi.execute();
    setResult(commandResult as string);
    console.log('RESULT =', commandResult);
    navigate(AppRoutes.SettingsRoute);
  };

  const handleMaximize = () => {
    navigate(AppRoutes.SettingsRoute);
    window.electron.ipcRenderer.sendMessage('reload', ['maximize']);
  };

  const getSettings = () => {
    navigate('/');
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
      <Button onClick={handleMaximize} type="button">
        MaximizeWindow
      </Button>
      <Button onClick={getSettings} type="button">
        get settings
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
