import { useState } from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { styles } from './GetRandomNumber.styles';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { getRandomNumberWithDelayAction } from '../../store/slices/random-number.slice';

export const GetRandomNumber = () => {
  const dispatch = useDispatch();

  const [delay, setDelay] = useState('1000');
  const { randomNumber, isError, isLoading } = useTypedSelector(
    (state) => state.randomNumber
  );

  const handleClick2 = () => {
    dispatch(
      getRandomNumberWithDelayAction({
        delay: Number(delay),
      })
    );
  };

  return (
    <div style={styles.container}>
      <input value={delay} onChange={(event) => setDelay(event.target.value)} />

      <Button onClick={handleClick2} type="button" sx={styles.buttonThree}>
        GetRandomNumber
      </Button>
      <div style={styles.info}>{`Random number: ${randomNumber}`}</div>
      <div style={styles.info}>{`Is loading: ${isLoading}`}</div>
      <div style={styles.info}>{`Is error: ${isError}`}</div>
    </div>
  );
};
