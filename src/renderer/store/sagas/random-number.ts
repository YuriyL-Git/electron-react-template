import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { RandomNumberActionCreator } from '../slices/random-number.slice';
import { RandomNumberSagaTypes } from '../../common/enums/saga-types';

async function getNumberWithDelayEmulationFunction(delay: number) {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      if (randomNumber === 4) {
        reject();
      }
      resolve(randomNumber);
    }, delay);
  });
}

function* getRandomNumberWithDelay(data: PayloadAction<{ delay: number }>) {
  try {
    yield put(RandomNumberActionCreator.requestRandomNumber());
    const result: number = yield call(
      getNumberWithDelayEmulationFunction,
      data.payload.delay
    );

    yield put(
      RandomNumberActionCreator.requestSuccess({
        resultNumber: result,
      })
    );
  } catch (e) {
    yield put(RandomNumberActionCreator.requestError());
  }
}

export function* randomNumberWatcher() {
  yield takeEvery(
    RandomNumberSagaTypes.GET_NUMBER_WITH_DELAY,
    getRandomNumberWithDelay
  );
  // add all other generators here
}
