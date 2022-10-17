// eslint-disable-next-line import/no-cycle
import { transformCode } from '../transform/transform-code';
import { IdeData } from '../../renderer/common/types/interfaces/ide-data';
import { addUseState } from '../transform/add-use-state';

export const transform = {
  addUseState(ideData: IdeData) {
    return transformCode(ideData, addUseState).getText();
  },
};
