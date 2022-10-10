import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduserNames } from '../../common/enums/reduser-names';
import { nodeApi } from '../../common/types/node/node-api-declaration';
import { RandomNumberSagaTypes } from '../../common/enums/saga-types';

type FolderAction = { folderName: string };

const initialState = {
  selectedFolderIndex: nodeApi.settings.get('selectedFolderIndex'),
  foldersList: nodeApi.settings.get('foldersList'),
  selectedPath: nodeApi.settings.get('selectedPath'),
};

const { reducer, actions } = createSlice({
  name: ReduserNames.SETTINGS,
  initialState,
  reducers: {
    removeFolder: (state, action: PayloadAction<FolderAction>) => {
      const { folderName } = action.payload;
      const index = state.foldersList.findIndex(
        (folder) => folder === folderName
      );

      state.foldersList.splice(index, 1);
      state.foldersList = [...state.foldersList];
      nodeApi.settings.removeFromList('foldersList', folderName);
    },

    addFolder: (state, action: PayloadAction<FolderAction>) => {
      const { folderName } = action.payload;
      state.foldersList = [...new Set([...state.foldersList, folderName])];
      nodeApi.settings.addToList('foldersList', folderName);
    },

    setSelectedIndex: (state, action: PayloadAction<{ index: number }>) => {
      const { index } = action.payload;
      nodeApi.settings.set('selectedFolderIndex', index);
      state.selectedFolderIndex = index;
    },
    setSelectedPath: (state, action: PayloadAction<{ path: string }>) => {
      const { path } = action.payload;
      nodeApi.settings.set('selectedPath', path);
      state.selectedPath = path;
    },
  },
});

export const getRandomNumberWithDelayAction = (data: { delay: number }) => ({
  type: RandomNumberSagaTypes.GET_NUMBER_WITH_DELAY,
  payload: data,
});

const SettingsActionCreator = {
  ...actions,
};

export const { setSelectedIndex, addFolder, removeFolder, setSelectedPath } =
  actions;

export { SettingsActionCreator, reducer as settingsReducer };
