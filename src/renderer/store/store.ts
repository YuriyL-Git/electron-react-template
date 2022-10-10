import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { ReduserNames } from '../common/enums/reduser-names';
import { randomNumberReducer } from './slices/random-number.slice';
import { rootSaga } from './sagas/root-saga';
import { settingsReducer } from './slices/settings-slice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    [ReduserNames.RANDOM_NUMBER]: randomNumberReducer,
    [ReduserNames.SETTINGS]: settingsReducer,
  },
  middleware: (cdm) => cdm({}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
