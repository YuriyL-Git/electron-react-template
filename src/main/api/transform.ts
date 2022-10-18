// eslint-disable-next-line import/no-cycle
import { getSource } from '../transform/get-source';
import { IdeData } from '../../renderer/common/types/interfaces/ide-data';
import { addImport } from '../transform/add-import';

export const transform = {
  addUseState(ideData: IdeData) {
    const source = getSource(ideData);

    addImport(source, {
      moduleName: './slices/leaderBoard',
      namedImport: 'initialLeaderBoardState',
      defaultImport: 'leaderBoard',
    });

    return source.getText();
  },
};
