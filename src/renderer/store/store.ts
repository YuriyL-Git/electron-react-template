import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { ReduserNames } from '../common/enums/reduser-names';
import { randomNumberReducer } from './slices/random-number.slice';
import { rootSaga } from './sagas/root-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    [ReduserNames.RANDOM_NUMBER]: randomNumberReducer,
    // add the rest of the slices here
  },
  middleware: (cdm) => cdm({}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
