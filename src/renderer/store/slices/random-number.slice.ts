import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduserNames } from '../../common/enums/reduser-names';
import { RandomNumberSagaTypes } from '../../common/enums/saga-types';

type RequestRandomNumberAction = { resultNumber: number };

const initialState = {
  randomNumber: 0,
  isLoading: false,
  isError: false,
};

const { reducer, actions } = createSlice({
  name: ReduserNames.RANDOM_NUMBER,
  initialState,
  reducers: {
    requestRandomNumber: (state) => {
      state.isLoading = true;
      state.isError = false;
    },

    requestSuccess: (
      state,
      action: PayloadAction<RequestRandomNumberAction>
    ) => {
      const { resultNumber } = action.payload;
      state.isLoading = false;
      state.randomNumber = resultNumber;
    },

    requestError: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const getRandomNumberWithDelayAction = (data: { delay: number }) => ({
  type: RandomNumberSagaTypes.GET_NUMBER_WITH_DELAY,
  payload: data,
});

const RandomNumberActionCreator = {
  ...actions,
};

export { RandomNumberActionCreator, reducer as randomNumberReducer };
